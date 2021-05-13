<?php

require_once 'App/Stack.php';

$text = str_split(file_get_contents('./public/task№4.txt'));

$stack = new Stack();

balanceRoundedBrackets($text);


function balanceRoundedBrackets($text)
{
    global $stack;

    for ($i = 0; $i < count($text); $i++) {

        if ($text[$i] === '(')
            $stack->push($text[$i]);

        elseif ($text[$i] === ')') {
            if ($stack->isEmpty()) {
                echo "False";
                return;
            }


            $stack->pop();
        }
    }

    if ($stack->isEmpty())
        echo "True";
    else
        echo "False";
}

