<?php


require_once 'App/Deque.php';

$text = str_split(file_get_contents('./public/task№5.txt'));

$deque = new Deque();

balanceRectangleBrackets($text);

function balanceRectangleBrackets($text)
{
    global $deque;

    for ($i = 0; $i < count($text); $i++) {
        if ($text[$i] === '[')
            $deque->pushStart($text[$i]);

        elseif ($text[$i] === ']') {
            if ($deque->isEmpty()) {
                echo "False";
                return;
            }


            $deque->popStart();
        }
    }

    if ($deque->isEmpty())
        echo "True";
    else
        echo "False";
}

