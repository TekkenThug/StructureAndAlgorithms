<?php


class Stack
{
    protected $stack;

    public function __construct() {
        // инициализация стека
        $this->stack = array();
    }

    public function len() {
        return count($this->stack);
    }

    public function push($item) {
        // проверяем, не полон ли наш стек
//        if (count($this->stack) < $this->limit) {
            // добавляем новый элемент в начало массива
            array_unshift($this->stack, $item);
//        } else {
//            throw new RunTimeException('Стек переполнен!');
//        }
    }

    public function pop() {
        if ($this->isEmpty()) {
            // проверка на пустоту стека
            throw new RunTimeException('Стек пуст!');
        } else {
            // Извлекаем первый элемент массива
            return array_shift($this->stack);
        }
    }

    public function isEmpty() {
        return empty($this->stack);
    }

    public function typingInTXT($path, $newLine = true) {
        $formattedText = '';
        $length = count($this->stack);

        for ($i = 0; $i < $length; $i++) {
            if ($newLine)
                $formattedText .= $this->pop() . "\n";

            else
                $formattedText .= $this->pop();
        }

        $fp = fopen($path, "w");
        fwrite($fp, $formattedText);
        fclose($fp);
    }
}