// Задание № 1
/* Массив A состоит из целых положительных чисел ­ длин отрезков.
Составьте из трех отрезков такой треугольник, чтобы его периметр был максимально возможным.
Если невозможно составить треугольник с положительной площадью ­функция возвращает 0. */

let arr1 = [2, 1, 2];
let arr2 = [1, 2, 1];
let arr3 = [3, 2, 3, 4];
let arr4 = [3, 6, 2, 3];

maxPerimeter(arr1, arr2, arr3, arr4);

function maxPerimeter(...arr) {
  arr.forEach((arrItem) => {
    arrItem.sort((a, b) => b - a);

    let max = 0;

    for (let i = 0; i < arrItem.length - 2; i++) {
      if (arrItem[i] < arrItem[i + 1] + arrItem[i + 2]) {
        max = Math.max(max, arrItem[i] + arrItem[i + 1] + arrItem[i + 2]);
        break;
      }
    }

    if (max) {
      console.log(`Максимальный периметр: ${max}`);
    } else {
      console.log(`Треугольника нет`);
    }
  });
}

// Задание № 2
/* Дан массив неотрицательных целых чисел nums.
Расположите их в таком порядке, чтобы вместе они образовали максимально возможное число.*/
let numbers = [3, 30, 34, 5, 9];
let number2 = [10,  2];
let number3 = [10];

const concatMax = (arr) => {
  let result = arr.map(String).sort((a, b) => (b + a) - (a + b)).join("");
  return result;
}

console.log(concatMax(numbers), concatMax(number2), concatMax(number3));

// Задание № 3
/* Дана матрица mat размером m * n, значения ­ целочисленные.
Напишите функцию, сортирующую каждую диагональ матрицы по возрастанию
и возвращающую получившуюся матрицу. */
let mat1 = [
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
];
let mat2 = [
  [11, 25, 66, 1, 69, 7],
  [23, 55, 17, 45, 15, 52],
  [75, 31, 36, 44, 58, 8],
  [22, 27, 33, 25, 68, 4],
  [84, 28, 14, 11, 5, 50],
];

sortDiagonals(mat1);
sortDiagonals(mat2);

function sortDiagonals(arr) {
  const m = arr.length;
  const n = arr[0].length;

  let c = 1;

  while (c !== m) {
    sorting(m, n);
    c++;
  }

  console.log(arr);

  function sorting(m, n) {
    for (let i = 0; i < m; i++) {
      let a = (b = i);
      for (let j = 0; j < n; j++) {
        if (i + 1 < m && j + 1 < n && arr[i + 1][j + 1] < arr[i][j]) {
          let swap = arr[i + 1][j + 1];
          arr[i + 1][j + 1] = arr[i][j];
          arr[i][j] = swap;
        }
      }
    }
  }
}
