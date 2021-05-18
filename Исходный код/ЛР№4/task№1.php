<?php

require_once 'App/Deque.php';

$text = explode("\n", file_get_contents('./public/task№1.txt'));
$length = count($text);

$dequeFirst = new Deque();
$dequeSecond = new Deque();

foreach ($text as $book) {
    $dequeFirst->pushEnd($book);
}

recurse($length);

$dequeSecond->typingInTXT("public/task№1-answer.txt");


function recurse($iterator) {
    global $dequeSecond;
    global $dequeFirst;

    $dequeSecond->pushEnd($dequeFirst->popStart());

    if ($iterator <= 1)
        return;

    for ($i = 0; $i <= $iterator - 1; $i++) {
        $a = $dequeSecond->popEnd();
        $b = $dequeFirst->popStart();

        if ($a < $b) {
            $dequeFirst->pushEnd($b);
            $dequeSecond->pushEnd($a);
        } else {
            $dequeFirst->pushEnd($a);
            $dequeSecond->pushEnd($b);
        }
    }

    recurse($iterator - 1);
}


//echo "<pre>";
//echo print_r($dequeFirst);
//echo print_r($dequeSecond);
//echo "</pre>";