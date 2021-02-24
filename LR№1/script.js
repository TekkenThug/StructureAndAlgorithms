// Лабораторная работа № 1
// Выполнил студент группы БСТ1902 Игнатов В.С.

// Задание № 1

console.log("Hello, World!");


// Задание № 2

let matrix = randomMatrix(3, 3, 1, 5);
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

matrixProcess(matrix, "Сортировка вставками", selectSort);     // Вызов сортировки вставками

matrixProcess(matrix, "Сортировка выбором", insertSort);       // Вызов сортировки выбором

matrixProcess(matrix, "Сортировка обменом", swapSort);         // Вызов сортировки обменом

matrixProcess(matrix, "Сортировка Шелла", ShellSort);          // Вызов сортировки Шелла

matrixProcess(matrix, "Быстрая сортировка", quickSort);  /* Не работает */      // Вызов быстрой сортировки

matrixProcess(matrix, "Пирамидальная сортировка", HeapSort);   // Вызов пирамидальной сортировки

matrixProcess(matrix, "Встроенная сортировка", includeSort);   // Вызов встроенной сортировки



/* Сортировка выбором */
function selectSort(arr) {
    for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
};

/* Сортировка вставками */
function insertSort(arr) {
    for (let i = 1, l = arr.length; i < l; i++) {
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

/* Сортировка обменом */
function swapSort(arr) {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

/* Сортировка Шелла */
function ShellSort(arr) {
    const l = arr.length;
    let gap = Math.floor(l / 2);
    while (gap >= 1) {
        for (let i = gap; i < l; i++) {
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
function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
};
  
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
    arr.sort((a, b) => a - b);
}

/* Обработка матрицы */
function matrixProcess(originalArr, name, func) {
    let matrix = JSON.parse(JSON.stringify(originalArr)); // Создание копии массива

    const startPoint = new Date().getTime();              // Время старта сортировки
    matrix.forEach(row => func(row));                     // Сортировка каждой строки матрицы
    const endPoint = new Date().getTime();                // Время конца сортировки

    console.log(matrix);

    console.log(`${name}. Время работы: ${endPoint - startPoint}ms`); // Вывод названия сортировки и время работы 
}