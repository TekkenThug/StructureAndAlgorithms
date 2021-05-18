// Задача №1
/*
Дан массив отрезков intervals, в котором intervals[i] =[start i,end i],
некоторые отрезки могут пересекаться. Напишите функцию, которая объединяет
все пересекающиеся отрезки в один и возвращает новый массив непересекающихся отрезков.
 */

const sumIntervals = (intervals) => {
    /* Сортировка */
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })

    /* Поиск пересекающихся интервалов */
    intervals.forEach((firstInterval, firstIndex) => {
        intervals.forEach((secondInterval, secondIndex) => {
            if (firstIndex !== secondIndex) {
                if (secondInterval[0] <= firstInterval[1] && secondInterval[0] >= firstInterval[0]) {
                    if (secondInterval[1] > firstInterval[1])
                        firstInterval[1] = secondInterval[1];

                    secondInterval[0] = secondInterval[1] = -1
                }
            }

        })
    });

    /* Удаление отрицательных */
    intervals = intervals.filter(elem => elem[0] !== -1 && elem[1] !== -1);

    /* Вывод в консоль массива */
    console.log(intervals)
}

sumIntervals([[8, 10], [1, 3], [15, 18], [2, 6]])
sumIntervals([[4, 5], [1, 4]])