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

/* M + N сравнений в среднем */
const KMP = (text, word) => {
    const prefixFunc = (word) => {
        const prefixTable = [0];
        let prefixIndex = 0;
        let suffixIndex = 1;

        while (suffixIndex < word.length) {
            if (word[prefixIndex] === word[suffixIndex]) {
                prefixTable[suffixIndex] = prefixIndex + 1;
                suffixIndex += 1;
                prefixIndex += 1;
            } else if (prefixIndex === 0) {
                prefixTable[suffixIndex] = 0;
                suffixIndex += 1;
            } else {
                prefixIndex = prefixTable[prefixIndex - 1];
            }
        }

        return prefixTable;
    }

    if (word.length === 0) return 0;

    let textIndex = 0;
    let wordIndex = 0;

    const prefixArr = prefixFunc(word);

    while (textIndex < text.length) {
        if (text[textIndex] === word[wordIndex]) {
            if (wordIndex === word.length - 1) return (textIndex - word.length) + 1

            wordIndex += 1;
            textIndex += 1;
        } else if (wordIndex > 0) {
            wordIndex = prefixArr[wordIndex - 1];
        } else {
            wordIndex = 0;
            textIndex += 1;
        }
    }

    return -1;
}

/* N/M в лучших случаях, M + N в среднем */
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

    searchSubstr(substr, str, KMP, "Алгоритм Кнута-Морриса-Пратта");
    searchSubstr(substr, str, BoyerMour, "Алгоритм Бойера-Мура");
}

searching();

// Задание №2
/* Написать программу, определяющую, является ли данное расположение  «решаемым»,
то есть можно ли из него за конечное число шагов перейти к правильному.
Если это возможно, то необходимо найти хотя бы одно решение - последовательность движений,
после которой числа будут расположены в правильном порядке. */

const slidingPuzzle = board => {
    /*
    mapping is a dictionnary of possible swapping directions
      0 1 2 we can swap index 0 only with indices 1 and 3 in the original board
      3 4 5                                                    
    */
    const mapping = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4]
    }

    // a simple function to swap values, it's easier to convert a string to an array then swap
    const swap = (state, pos, next) => {
        const array = state.split('');
        [array[pos], array[next]] = [array[next], array[pos]];
        return array.join('')
    }

    // convert board to string Exmpl '123540'
    let state = '';
    board.forEach(row => state += row.join(''));

    const visited = new Set(state);

    // Queue to keep track for state,  position of 0 and moves so far
    const q = [[state, state.indexOf('0'), 0]];

    while (q.length) {

        const [state, pos, moves] = q.shift();

        if (state == '123450')
            return moves;

        // move 0 to the possible directions (next) in mapping dict 
        for (let next of mapping[pos]) {
            const newState = swap(state, pos, next);

            if (visited.has(newState))
                continue;

            visited.add(newState);
            q.push([newState, next, moves + 1])
        }
    }
    return -1;

};

console.log(slidingPuzzle([[1,2,3],[4,0,5]]));