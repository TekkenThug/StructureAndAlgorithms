<?php

require_once 'App/Stack.php';

$kernelA = new Stack();
$kernelB = new Stack();
$kernelC = new Stack();
$counter = 1;

$disks = [10, 7, 4, 3, 2, 1, 0];

foreach ($disks as $disk) {
    $kernelA->push($disk);
}

function move($a, $b)
{
    if ($a->len() == 0 && $b->len() > 0)
        $a->push($b->pop());
    elseif ($a->len() > 0 && $b->len() == 0)
        $b->push($a->pop());
    elseif ($a->peek() > $b->peek()) {
        $a->push($b->pop());
    } else
        $b->push($a->pop());

//    echo "<pre>";
//    echo print_r($a);
//    echo "</pre>";
//
//    echo "<pre>";
//    echo print_r($b);
//    echo "</pre>";

}

if (count($disks) % 2 == 0) {
    while ($kernelC->len() !== count($disks)) {

        move($kernelA, $kernelB);
        move($kernelA, $kernelC);
        move($kernelB, $kernelC);
    }
} else {
    while ($kernelC->len() !== count($disks)) {
//        echo "Длина стержня A " . $kernelA->len() . "<br>";
//        echo "Длина стержня B " . $kernelB->len() . "<br>";
//        echo "Длина стержня C " . $kernelC->len() . "<br> <br>";

        move($kernelA, $kernelC);

        if ($kernelC->len() == count($disks))
            break;

        move($kernelA, $kernelB);
        move($kernelB, $kernelC);
    }
}

while (!$kernelC->isEmpty()) {
    echo $kernelC->pop() . "<br>";
}