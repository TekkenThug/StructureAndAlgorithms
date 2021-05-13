<?php

require_once 'App/Deque.php';

$text = preg_split('//u', mb_strtolower(file_get_contents('./public/task№2.txt')));

$alph = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
$alph = preg_split('//u', $alph, -1, PREG_SPLIT_NO_EMPTY);
shuffle($alph);

$key = new Deque();

foreach ($alph as $letter)
    $key->pushEnd($letter);

function encode($a)
{
    global $key;

    for ($i = 0; $i < $key->len(); $i++) {
        $x = $key->popStart();

        if ($x == $a) {
            $key->pushEnd($x);
            $value = $key->popStart();
            $key->pushEnd($value);
            return $value;
        }

        $key->pushEnd($x);
    }
}

function decode($a)
{
    global $key;

    for ($i = 0; $i < $key->len(); $i++) {
        $x = $key->popEnd();

        if ($x == $a) {
            $key->pushStart($x);
            $value = $key->popEnd();
            $key->pushStart($value);
            return $value;
        }

        $key->pushStart($x);
    }

}

$encoded = '';
$decoded = '';

foreach ($text as $letter) {
    $encodedLetter = encode($letter);

    if ($encodedLetter)
        $encoded .= $encodedLetter;
    else
        $encoded .= $letter;
}
foreach (preg_split('//u', $encoded) as $letter) {
    $decodedLetter = decode($letter);
    if ($decodedLetter)
        $decoded .= $decodedLetter;
    else
        $decoded .= $letter;
}


echo $encoded . "<br>";
echo $decoded;
