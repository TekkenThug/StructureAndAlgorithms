<?php

require_once 'App/Stack.php';

$text = str_split(file_get_contents('./public/task№9.txt'));

$opstack = new Stack();
$vstack = new Stack();
$cur = 0;

while(true) {
    $read = false;

    if (!$opstack->isEmpty()) {
        $elem = $opstack->pop();
        if ($elem == "N") {
            $opstack->push($elem);
            if ($vstack->isEmpty()) {
                $read = true;
            } else {
                if ($vstack->pop() == "T") {
                    $vstack->push("F");
                } else {
                    $vstack->push("T");
                }
                $opstack->pop();
            }
        } else if ($elem == "A") {
            $opstack->push($elem);
            if ($vstack->len() < 2) {
                $read = true;
            } else {
                $a = $vstack->pop();
                $b = $vstack->pop();
                if ($a == $b and $b == "T") {
                    $vstack->push("T");
                } else {
                    $vstack->push("F");
                }
                $opstack->pop();
            }
        } else if ($elem == "O") {
            $opstack->push($elem);
            if ($vstack->len() < 2) {
                $read = true;
            } else {
                $a = $vstack->pop();
                $b = $vstack->pop();
                if ($a == "T" || $b == "T") {
                    $vstack->push("T");
                } else {
                    $vstack->push("F");
                }
                $opstack->pop();
            }
        } else if ($elem == "X") {
            $opstack->push($elem);
            if ($vstack->len() < 2) {
                $read = true;
            } else {
                $a = $vstack->pop();
                $b = $vstack->pop();
                if ($a !== $b) {
                    $vstack->push("T");
                } else {
                    $vstack->push("F");
                }
                $opstack->pop();
            }
        } else if ($elem == "(") {
            $opstack->push($elem);
            $read = true;
        } else if ($elem == ")") {
            $opstack->push($elem);
            $opstack->pop();
            $opstack->pop();
        }
    } else {
        $read = true;
    }

    if ($read) {
        $i = $text[$cur];
        if (strpos('FT', $i) !== false) {
            $vstack->push($i);
        }
        if (strpos('AXON()', $i) !== false) {
            $opstack->push($i);
        }
        $cur++;
    }

    if ($cur == count($text) && $opstack->len() == 0) {
        break;
    }
}

while (!$vstack->isEmpty()) {
    echo $vstack->pop();
}



