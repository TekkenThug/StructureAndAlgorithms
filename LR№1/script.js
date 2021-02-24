// Лабораторная работа № 1
// Выполнил студент группы БСТ1902 Игнатов В.С.

// Задание № 1

console.log("Hello, World!");


// Задание № 2

let matrix = randomMatrix(3, 3, 1, 10);
console.log(matrix);

function randomMatrix(m = 50, n = 50, minLim = -250, maxLim = 1005) {
    let matrix = [];
    for (let i = 1; i <= m; i++) {
        let matrixInner = [];

        for (let j = 1; j <= n; j++) {
            let elem = Math.floor(minLim + Math.random() * (maxLim + 1 - minLim));
            matrixInner.push(elem);
        }

        matrix.push(matrixInner);
    }

    return matrix
}

// Задание № 3
matrixProcess(matrix, "Сортировка выбором", selectSort);       // Вызов сортировки выбором

matrixProcess(matrix, "Сортировка вставками", insertSort);     // Вызов сортировки вставками

matrixProcess(matrix, "Сортировка обменом", swapSort);         // Вызов сортировки обменом

matrixProcess(matrix, "Сортировка Шелла", ShellSort);          // Вызов сортировки Шелла

matrixProcess(matrix, "Быстрая сортировка", quickSort);        // Вызов быстрой сортировки

matrixProcess(matrix, "Пирамидальная сортировка", HeapSort);   // Вызов пирамидальной сортировки

matrixProcess(matrix, "Встроенная сортировка", includeSort);   // Вызов встроенной сортировки



/* Сортировка выбором. Сложность O(n^2) */
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let MinElemIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[MinElemIndex] > arr[j]) {
                MinElemIndex = j;
            }
        }

        if (MinElemIndex !== i) {
            [arr[i], arr[MinElemIndex]] = [arr[MinElemIndex], arr[i]];
        }
    }
    return arr;
};

/* Сортировка вставками. Сложность O(n^2) */
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i;

        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
};

/* Сортировка обменом. Сложность O(n^2) */
function swapSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    return arr;
}

/* Сортировка Шелла. Сложность O(n) */
function ShellSort(arr) {
    let gap = Math.floor(arr.length / 2);

    while (gap >= 1) {
        for (let i = gap; i < arr.length; i++) {
            const current = arr[i];
            let j = i;

            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = current;
        }

        gap = Math.floor(gap / 2);
    }

    return arr;
};

/* Быстрая сортировка */
function quickSort(arr) {
    if (arr.length < 2) return arr;
    
    let less = [],
        more = [],
        pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            more.push(arr[i]);
        };
    }

    return quickSort(less).concat(pivot, quickSort(more));
}

/* Пирамидальная сортировка */
function HeapSort(arr) {
    let n = arr.length, i = Math.floor(n / 2), j, k, t;
    while (true) {
        if (i > 0) t = arr[--i];
        else {
            n--;

            if (n == 0) return arr;
            t = arr[n];
            arr[n] = arr[0];
        }
        j = i;
        k = j * 2 + 1;
        while (k < n) {
            if (k + 1 < n && arr[k + 1] > arr[k]) k++;
            if (arr[k] > t) {
                arr[j] = arr[k];
                j = k;
                k = j * 2 + 1;
            }
            else break;
        }
        arr[j] = t;
    }
}

/* Встроенная сортировка */
function includeSort(arr) {
   return arr.sort((a, b) => a - b);
}

/* Обработка матрицы */
function matrixProcess(originalArr, name, func) {
    let matrix = JSON.parse(JSON.stringify(originalArr)); // Создание копии массива

    console.time(name);                                   // Время старта сортировки
    for (let row = 0; row < matrix.length; row++) {           // Сортировка каждой строки матрицы
        matrix[row] = func(matrix[row]); 
    }                     
    console.timeEnd(name);                                // Время конца сортировки

    console.log(matrix);
}


