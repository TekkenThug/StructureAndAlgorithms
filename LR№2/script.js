// Задание № 1
/* Реализовать функции поиска */

/* Случайные данные */
let data = randomData(25);
function randomData(n = 50, minLim = 0, maxLim = 10) {
    let data = [];

    for (let j = 1; j <= n; j++) {
        let elem = Math.floor(minLim + Math.random() * (maxLim + 1 - minLim));
        data.push(elem);
    }

    return data
}

/* Вызов функций поиска */
dataProcess(data, 3, binarySearch);

/* Бинарный поиск */
function binarySearch(value, list) {
    let first = 0,
        last = list.length - 1,
        position = -1,
        found = false,
        middle;
 
    while (found === false && first <= last) {
        middle = Math.floor((first + last)/2);

        if (list[middle] == value) {
            found = true;
            position = middle;
        } else if (list[middle] > value) {
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }

    return position;
}

/* Обработка матрицы */
function dataProcess(originalData, value, func) {
    let data = JSON.parse(JSON.stringify(originalData));

    console.time("Бинарный поиск");
    const pos = func(value, data);
    console.timeEnd("Бинарный поиск");

    if (pos) {
        console.log(`Позиция: ${pos}`)
    };
                               
    console.log(data);
}

/* Добавление */

/* Удаление */
