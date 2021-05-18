<?php

require_once 'App/Stack.php';

$text = str_split(file_get_contents('./public/task№10.txt'));

$op = new Stack();
$nums = new Stack();
$temp = new Stack();
$num = '';
$cur = 0;

while ($cur < count($text)) {
    $i = $text[$cur];

    if (IntlChar::isdigit($i)) {
        $num .= $i;
    } else if ($num !== '') {
        $nums->push((int)$num);
        $num = '';
    }

    if ($i == ")")
        $nums->push($i);

    if (strpos('MN', $i) !== false) {
        $op->push($i);
    }

    $cur++;
}

//echo print_r($nums);
//echo print_r($op);

while (!$op->isEmpty()) {
    $x = $nums->pop();

    while ($x == ")") {
        $x = $nums->pop();
    }
    $nums->push($x);

    $a = $nums->pop();
    $b = $nums->pop();

    if ($b == ")") {
        $temp->push($a);
        continue;
    }

    if ($a < $b) {
        list($a, $b) = [$b, $a];
    }

    if ($op->pop() == 'M') {
        $nums->push($a);
    } else {
        $nums->push($b);
    }

    if ($temp->len() > 0) {
        $nums->push($temp->pop());
    }
}

//echo print_r($nums);

while (!$nums->isEmpty()) {
    echo $nums->pop();
}




