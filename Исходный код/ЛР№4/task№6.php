<?php

require_once 'App/Stack.php';

$text =  preg_split('//u', file_get_contents('./public/task№6.txt'));

$stack = new Stack();

for ($i = 1; $i < 4; $i++) {
    foreach (array_reverse($text) as $symbol) {
        if ($i == 1 && !IntlChar::isalpha($symbol) && !IntlChar::isdigit($symbol)) {
            $stack->push($symbol);
        }  else if ($i == 2 && IntlChar::isalpha($symbol)) {
            $stack->push($symbol);
        } else if ($i == 3 && IntlChar::isdigit($symbol) ) {
            $stack->push($symbol);
        }
    }
}

$stack->typingInTXT("public/task№6-answer.txt", false);