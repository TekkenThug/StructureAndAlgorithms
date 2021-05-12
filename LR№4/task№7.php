<?php

require_once 'App/Deque.php';

$text = explode("\n", file_get_contents('./public/task№7.txt'));
$length = count($text);

$positiveCounter = 0;

$deque = new Deque();

for ($i = 0; $i < $length; $i++) {
    if ($i > 0) {
        $a = $deque->popEnd();

        if ($text[$i] <= 0 && $a >= 0) {
            while ($a >= 0) {
                $deque->pushStart($a);
                $a = $deque->popEnd();
            }

            $deque->pushEnd($a);

            $deque->pushEnd($text[$i]);

            $b = $deque->popStart();

            while ($b >= 0) {
                $deque->pushEnd($b);
                $b = $deque->popStart();
            }

            $deque->pushStart($b);
        } else {
            $deque->pushEnd($a);
            $deque->pushEnd($text[$i]);
        }

    } else {
        $deque->pushEnd($text[$i]);
    }
}

echo "<pre>";
echo print_r($deque);
echo "</pre>";

$deque->typingInTXT("public/task№7-answer.txt");






