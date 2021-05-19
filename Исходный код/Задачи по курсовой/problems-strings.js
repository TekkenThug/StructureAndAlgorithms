// Задача №1
/*
Даны две строки: s1 и s2 с одинаковым размером, проверьте,
может ли некоторая перестановка строки s1 “победить” некоторую
перестановку строки s2 или наоборот.
Строка x может “победить” строку y (обе имеют размер n),если x[i]>=y[i]
(в алфавитном порядке) для всех i от 0 до n-1.
 */

const defeatStrings = (s1, s2) => {
    s1 = s1.split("").sort();
    s2 = s2.split("").sort();
    let bool1 = true, bool2 = true;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] > s2[i]) bool1 = false;
        if (s1[i] < s2[i]) bool2 = false;
    }

    return bool1 || bool2;
}

console.log(defeatStrings('abc', 'xya'))
console.log(defeatStrings('abe', 'acd'))

// Задача №2
/*
Дана строка s, вернуть самую длинную полиндромную подстроку в s
 */

const isPalindrome = (str, i, j) => {
    let start = i, end = j;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

const longestPalindrome = (s) => {
    for (let i = s.length - 1; i >= 0; i--) {
        let start = 0;
        let end = i;
        while (end < s.length) {
            if (isPalindrome(s, start, end)) {
                return s.substring(start, end + 1);
            }
            start++;
            end++;
        }
    }
    return "";
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));

// Задача №3
/*
Вернуть количество отдельных непустых подстрок текста,
которые могут быть записаны как конкатенация некоторой
строки с самой собой(т.е.она может быть записана, как a + a,
где a - некоторая строка).
 */

const countNotEmpty = (text) => {
    const strings = new Set();
    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            const left = text.slice(i,j);
            const right = text.slice(j, j + j - i);
            // console.log(left, right);
            if (left === right) strings.add(left);
        }
    }
    return strings.size;
}

console.log(countNotEmpty("abcabcabc"));