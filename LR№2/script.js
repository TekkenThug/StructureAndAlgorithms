// Задание № 1
/* Реализовать функции поиска */

/* Случайные данные */
let data = randomData(25);
function randomData(n = 10, minLim = 0, maxLim = 10) {
  let data = [];

  for (let j = 1; j <= n; j++) {
    let elem = Math.floor(minLim + Math.random() * (maxLim + 1 - minLim));
    data.push(elem);
  }

  return data;
}

/* Бинарный поиск */
function binarySearch(value, list) {
  let first = 0,
    last = list.length - 1,
    position = -1,
    found = false,
    middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);

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

/* Бинарное дерево */

/* Фиббоначиев поиск */
function fibMonaccianSearch(x, arr) {
  let n = arr.length;
  /* Initialize fibonacci numbers */
  let fibMMm2 = 0; // (m-2)'th Fibonacci No.
  let fibMMm1 = 1; // (m-1)'th Fibonacci No.
  let fibM = fibMMm2 + fibMMm1; // m'th Fibonacci

  /* fibM is going to store the smallest Fibonacci
    Number greater than or equal to n */
  while (fibM < n) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  // Marks the eliminated range from front
  let offset = -1;

  /* while there are elements to be inspected. Note that
    we compare arr[fibMm2] with x. When fibM becomes 1,
    fibMm2 becomes 0 */

  while (fibM > 1) {
    // Check if fibMm2 is a valid location
    let i = Math.min(offset + fibMMm2, n - 1);

    /* If x is greater than the value at index fibMm2,
        cut the subarray array from offset to i */
    if (arr[i] < x) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (arr[i] > x) {
      /* If x is less than the value at index fibMm2,
        cut the subarray after i+1 */
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else return i;

    /* element found. return index */
  }

  /* comparing the last element with x */
  if (fibMMm1 && arr[n - 1] == x) {
    return n - 1;
  }

  /*element not found. return -1 */
  return -1;
}

/* Интерполяционный поиск */
function interpolationSearch(key, arr) {
  let mid,
    left = 0,
    right = arr.length - 1;

  while (arr[left] < key && key < arr[right]) {
    mid =
      left +
      Math.floor(
        ((key - arr[left]) * (right - left)) / (arr[right] - arr[left])
      );

    if (arr[mid] < key) {
      left = mid + 1;
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  if (arr[left] == key) return left;
  else if (arr[right] == key) return right;
  else return -1;
}

/* Вызов функций поиска */
dataProcess(data, 3, binarySearch, "Бинарный поиск");
dataProcess(data, 3, fibMonaccianSearch, "Фиббоначиев поиск");
dataProcess(data, 3, interpolationSearch, "Интерполяционный поиск");

/* Обработка матрицы */
function dataProcess(originalData, value, func, signature) {
  let data = JSON.parse(JSON.stringify(originalData));

  data.sort((a, b) => a - b);

  console.time(signature);
  let pos = func(value, data);
  pos = pos == -1 ? "Элемент не найден :(" : pos;
  console.timeEnd(signature);

  if (pos) {
    console.log(`Позиция: ${pos}`);
  }

  console.log(data);
}

// Задание №3
/* Расставить на стандартной 64-клеточной шахматной доске 8 ферзей так, чтобы ни
один из них не находился под боем другого». Подразумевается, что ферзь бьёт все клетки,
расположенные по вертикалям, горизонталям и обеим диагоналям
Написать программу, которая находит хотя бы один способ решения задач. */
let solutions = [];

function queen() {
  let columns = [];
  let numberOfDiagonals = 15;
  let diagonals1;
  let diagonals2;
  
  for (let i = 0; i < numberOfDiagonals; i++) {
    if (i < 8) columns[i] = -1;

    diagonals1[i] = diagonals2 = 0;
  }
}

function calculate(row, columns, solutions) {
  for (let i = 0; i < 8; ++i) {
    if (columns[i] >= 0) continue;

    let thisDiag1 = row + i;

    if (diagonals1[thisDiag1] == 1) continue;

    let thisDiag2 = 7 - row + i;

    if (diagonals2[thisDiag2] == 1) continue;

    columns[i] = row;

    diagonals1[thisDiag1] = 1;
    diagonals2[thisDiag2] = 1;

    if (row == 7) solutions.push(columns.slice());
    else calculate(row + 1);

    columns[i] = -1;
    diagonals1[thisDiag1] = 0;
    diagonals2[thisDiag2] = 0;
  }
}

function getline(solution) {
  //сформировать строку с решением
  var line = "";
  for (var j = 0; j < solution.length; ++j)
    line += "(" + (j + 1) + "," + (solution[j] + 1) + ")";
  return line;
}
