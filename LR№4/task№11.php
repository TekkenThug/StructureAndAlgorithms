<?php

require_once 'App/Stack.php';

$text = str_split(file_get_contents('./public/task№11.txt'));


echo var_dump(formula($text));

function formula($text) {
    $stack = new Stack();
    $cur = 0;

    while(true) {
        $read = false;

        if (!$stack->isEmpty()) {
            $elem = $stack->pop();
            if ($elem == '(') {
                $stack->push($elem);
                $read = true;
            } else if ($elem == ')') {
                $stack->push($elem);
                if ($stack->len() < 2 || $stack->pop() !== 'formula' || $stack->pop() !== '(')
                    return false;
                $stack->push('formula');
            } else if ($elem == 'formula') {
                $stack->push($elem);
                $newElem = $stack->pop();
                if ($stack->len() > 1 && strpos('+-', $newElem) !== false) {
                    $stack->push($newElem);
                    if (strpos('+-', $stack->pop()) !== false && $stack->pop() == "formula")
                        $stack->push('formula');
                    else
                        return false;
                } else {
                    $stack->push($newElem);
                    $stack->push('formula');
                    $read = true;
                }
            } else {
                $read = true;
            }
        } else {
            $read = true;
        }

        if ($read) {
            $i = $text[$cur];

            if (strpos('xyz', $i) !== false) {
                $stack->push('formula');
            } elseif (strpos('()+-)', $i) !== false) {
                $stack->push($i);
            }

            $cur++;
        }

        if ($cur == count($text) && $stack->len() == 1)
            break;
    }

    return true;
}
