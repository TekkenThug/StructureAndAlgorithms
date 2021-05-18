// Задание №1
/* Реализовать методы поиска подстроки в строке.
Добавить возможность ввода строки и подстроки с клавиатуры.
Предусмотреть возможность существования пробела.
Реализовать возможность выбора опции чувствительности или нечувствительности к регистру.
Оценить времяработы каждого алгоритма поиска и сравнить его со временем работы стандартной
функции поиска, используемой в выбранном языке программирования. */

const searchSubstr = (elem, str, funcName, signature, register = false) => {
    if (!register) {
        elem = elem.toLowerCase();
        str = str.toLowerCase()
    }

    console.time(signature);
    console.log(funcName(str, elem, register));
    console.timeEnd(signature)
}

const KnutMorris = (str, elem) => {
    let strLength = str.length;
    let elemLength = elem.length;

    let p = 0;
    p[0] = 0;

    for (let i = 1, j = 0; i < elemLength; i++) {
        while (j > 0 && elem[j] !== elem[i]) {
            j = p[j - 1]
        }

        if (elem[j] === elem[i]) j++

        p[i] = j;
    }

    for (let i = 0, j = 0; i < strLength; i++) {
        while (j > 0 && elem[j] !== str[i]) j = p[j - 1]

        if (elem[j] === str[i]) j++

        if (j === elemLength) return i - j + 1
    }

    return -1
}
const BoyerMour = (str, substr) => {
    let strLen = str.length;
    let substrLen = substr.length;

    if (substrLen > strLen) return -1;

    const offsetTable = {};

    for (let i = 0; i <= 255; i++) {
        let char = String.fromCharCode(i);
        offsetTable[char] = substrLen;
    }

    for (let i = 0; i < substrLen - 1; i++) {
        offsetTable[substr.charAt(i)] = substrLen - i - 1;
    }

    let i = substrLen - 1,
        j = i,
        k = i;

    while (j >= 0 && i <= strLen - 1) {
        j = substrLen - 1;
        k = i;

        while (j >= 0 && str.charAt(k) === substr.charAt(j)) {
            k--;
            j--;
        }

        i += offsetTable[str.charAt(i)]
    }

    if (k >= strLen - substrLen) return -1;
    else return k + 1;
}

function searching() {
    const str = prompt("Введите строку");
    const substr = prompt("Введите подстроку");

    console.time("Стандартная функция")
    str.indexOf(substr);
    console.timeEnd("Стандартная функция")

    searchSubstr(substr, str, KnutMorris, "Алгоритм Кнута-Морриса-Пратта");
    searchSubstr(substr, str, BoyerMour, "Алгоритм Бойера-Мура");
}

searching();

// Задание №2
/* Написать программу, определяющую, является ли данное расположение  «решаемым»,
то есть можно ли из него за конечное число шагов перейти к правильному.
Если это возможно, то необходимо найти хотя бы одно решение - последовательность движений,
после которой числа будут расположены в правильном порядке. */
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    // BOARD to STRING
    const serializePuzzle = (board) => {
        let str = '';
        board.forEach(row=>{
            row.forEach(s=>{
                str += s;
            })
        })
        return str;
    }

    const target = "123450";
    if (serializePuzzle(board) === target) return 0;
    const swaps = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
    let toVisit = [serializePuzzle(board)];
    let visited = new Set();
    let result = 0;

    while (toVisit.length){
        // LEVEL TRAVEL
        let levelSize=toVisit.length;
        for (let i=0; i<levelSize; i++){
            let encodedBoard = toVisit.shift();
            let pos0 = encodedBoard.indexOf("0");
            visited.add(encodedBoard);

            for (let pos of swaps[pos0]){
                // SWAP
                let temp = encodedBoard[pos];
                let newBoard = encodedBoard.slice().split("");
                newBoard[pos] = "0";
                newBoard[pos0] = temp;
                newBoard = newBoard.join("")

                // CONCLUDE
                if (!visited.has(newBoard)){
                    if (newBoard === target) return result+1;
                    toVisit.push(newBoard);
                }
            }
        }
        result++;
    }

    return -1;
};

slidingPuzzle([[15, 2, 1, 12],[8, 5, 6, 11], [4, 9, 10, 7], [3, 14, 13]])