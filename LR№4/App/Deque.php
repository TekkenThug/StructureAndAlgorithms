<?php


class Deque
{
    protected $deque;

    public function __construct()
    {
        // инициализация дека
        $this->deque = array();
    }

    public function pushStart($item)
    {
        // Добавление в начало дека
        array_unshift($this->deque, $item);
    }

    public function pushEnd($item)
    {
        // Добавление в конец дека
        array_push($this->deque, $item);
    }

    public function popStart()
    {
        if ($this->isEmpty()) {
            // проверка на пустоту дека
            throw new RunTimeException('Стек пуст!');
        } else {
            // Извлекаем начальный элемент дека
            return array_shift($this->deque);
        }
    }

    public function popEnd()
    {
        if ($this->isEmpty()) {
            // проверка на пустоту дека
            throw new RunTimeException('Стек пуст!');
        } else {
            // Извлекаем конечный элемент дека
            return array_pop($this->deque);
        }
    }

    public function isEmpty()
    {
        return empty($this->deque);
    }

    public function typingInTXT($path) {
        $formattedText = '';
        $length = count($this->deque);

        for ($i = 0; $i < $length; $i++) {
            $formattedText .= $this->popStart() . "\n";
        }

        $fp = fopen($path, "w");
        fwrite($fp, $formattedText);
        fclose($fp);
    }
}