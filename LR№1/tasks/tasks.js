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
    arr.forEach(arrItem => {
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
    })
    
}

// Задание № 2
/* */
let numbers = [3,30,34,5,9];
maxNumberStr(numbers);

function maxNumberStr(arr) {
    arr.sort();
    console.log(arr);
}