// Задача №1
/*
На столе стоят3n стопок монет. Вы и ваши друзья Алиса и Боб забираете стопки монет
по следующему алгоритму:

1.Вы выбираете 3 стопки монет из оставшихся на столе.
2.Алиса забирает себе стопку с максимальным количеством монет.
3.Вы забираете одну из двух оставшихся стопок.
4.Боб забирает последнюю стопку.
5.Если еще остались стопки, то действия повторяются с первого шага.

Дан массив целых положительных чисел piles. Напишите функцию, возвращающую максимальное число монет,
которое вы можете получить.
 */

const coins = (piles) => {
    piles.sort((a, b) => a - b);

    const n = piles.length;
    let yourCoins = 0;

    for (let i = n / 3; i < n; i += 2) {
        // console.log(`Массив: ${piles}, Элемент: ${piles[i]}`);
        yourCoins += piles[i];
    }

    console.log(yourCoins);
}

coins([2, 4, 1, 2, 7, 8])
coins([2, 4, 5])
coins([9, 8, 7, 6, 5, 1, 2, 3, 4])

