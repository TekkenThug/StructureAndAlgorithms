<?php

require_once 'App/Stack.php';

$text = explode("\n", file_get_contents('./public/task№8.txt'));

$stack = new Stack();


foreach ($text as $str) {
    $stack->push($str);
}

$stack->typingInTXT("public/task№8-answer.txt");