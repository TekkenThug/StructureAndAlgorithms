<?php

require_once 'App/Stack.php';

$text = str_split(file_get_contents('./public/task№10.txt'));

$op = new Stack();
$nums = new Stack();
$num = '';
$cur = 0;

while ($cur < count($text)) {
    $i = $text[$cur];

    if (IntlChar::isdigit($i)) {
        $num .= $i;
    } else if ($num !== '') {
        $nums->push((int) $num);
        $num = '';
    }

    if (strpos('MN', $i) !== false) {
        $op->push($i);
    }

    $cur++;
}

while (!$op->isEmpty()) {
    $a = $nums->pop();
    $b = $nums->pop();

    if ($a < $b) {
        list($a,$b)=[$b,$a];
    }

    if ($op->pop() == 'M') {
        $nums->push($a);
    } else {
        $nums->push($b);
    }
}

while (!$nums->isEmpty()) {
    echo $nums->pop();
}




