/*
Задание No1. Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
иначе false.
*/
let obj = {};

console.log(isEmpty(obj));

/*
Задание No2. Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
*/
obj = {
    prop1: '1',
    prop2: 222,
    prop3: 'dfdfd',
    prop4: 22.4
};

multiplyNumeric(obj);

for (let prop in obj) {
    console.log(obj[prop]);
}

/*
Задание No3. Ввод числового значения
Создайте функцию readNumber, которая будет запрашивать ввод числового значения
до тех пор, пока посетитель его не введёт.
функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую
строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/
alert(getReadNumber());

/*
Задание No4. Случайное число от min до max
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с
плавающей точкой от min до max (но не включая max).
Пример работы функции:
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/
console.log(getRandomNumber(1, 5));

/*
Задание No5. Случайное целое число от min до max
Напишите функцию randomInteger(min, max), которая генерирует случайное целое
(integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.
Пример работы функции:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/
console.log(getRandomInteger(-1, 6));

/*
Задание No6. Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым
символом.
Например:
ucFirst("вася") == "Вася";
*/
console.log(toUppercaseFirst('вася'));

/*
Задание No7. Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/
console.log(checkSpam('buy ViAgRA now'));

/*
Задание No8. Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
она превосходит maxlength, заменяет конец str на "...", так, чтобы её длина стала равна
maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо,
если необходимо, усечённая строка.
Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне
хотело..."
truncate("Всем привет!", 20) = "Всем привет!"
*/
console.log(getTruncateString("Вот, что мне хотелось бы сказать на эту тему:", 20));

/*
Задание No9. Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем –
число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
числовое значение и возвращать его.
Например:
alert( extractCurrencyValue('$120') === 120 ); // true
*/
console.log(extractCurrencyValue('$120'));

/*
Задание No10. Сумма введённых чисел
Напишите функцию sumInput(), которая:
    • Просит пользователя ввести значения, используя prompt и сохраняет их в
    массив.
    • Заканчивает запрашивать значения, когда пользователь введёт не числовое
    значение, пустую строку или нажмёт «Отмена».
    • Подсчитывает и возвращает сумму элементов массива.
    • P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
alert('Сумма чисел = ' + sumInput());

/*
Задание No11. Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна
«0»:
getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/
let arr = [100, -9, 2, -3, 5];

console.log(getMaxSubSum(arr));

/*
Задание No12. Обязателен ли "else"?
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его
результат:
function checkAge(age) {
if (age > 18) {
return true;
} else {
// ...
return confirm('Родители разрешили?');
}
}
Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
if (age > 18) {
return true;
}
// ...
return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?

Ответ:
Отличий в поведении нет, поскольку оператор return выходит из функции
*/

/*
Задание No13. Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Родители разрешили?');
}
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||
*/
console.log(checkAgeUsingTernary(18));

/*
Задание No14. Функция min(a, b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/
console.log(getMin(3, -1));

/*
Задание No15. Функция pow(x,n)
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
Запустить демо
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е.
целые от 1 и выше.
*/
console.log(calcPow(3, 2));

/*
Задание No16. Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
if (confirm(question)) yes()
else no();
}
ask(
"Вы согласны?",
function() { alert("Вы согласились."); },
function() { alert("Вы отменили выполнение."); }
);
*/
let ask = (question, yes, no) => { confirm(question) ? yes() : no() };

ask(
    "Вы согласны?",
    function () { alert("Вы согласились."); },
    function () { alert("Вы отменили выполнение."); }
);

/*
Задание No17. Робинзон Крузо
Ваш месячный доход - 3333 попугая. Вы хотите купить пальму за 8000
попугаев. Вычислите, за какой промежуток времени вы насобираете на
пальму, при условии что ваши ежемесячные расходы составляют 1750
попугаев.
*/
console.log(calcTimeToBuy(3333, 1750, 8000));

/*
Задание No18. Вопросы пользователю
1. Спросить у пользователя 10 чисел
2. Если число
- положительное —> ничего не делать
- отрицательная —> получить их сумму
3. Вывести сумму отрицательных чисел, которые ввел пользователь
ВАЖНО: по условиям задачи в вашем коде должен быть только 1 prompt и
только 1 цикл for
*/
let sumNegativeNumbers = 0;

for (i = 0; i < 10; i++) {
    let number = +prompt('Введите число');

    if (!isNaN(number) && number < 0) {
        sumNegativeNumbers += number;
    }
}

alert('Сумма отрцательных чисел = ' + sumNegativeNumbers);

/*
Задание No19. Скопирован ли массив?
Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // ?

Ответ:
Поскольку массив - это объект, он копируется по ссылке, а значит,
изменяя shoppingCart, мы будем изменять и fruits. Отсюда следует,
что последняя строка выведет 4
*/

/*
Задание No20. Операции с массивами
Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в
середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/
arr = ['Джаз', 'Блюз'];
arr.push('Рок-н-ролл');
arr[Math.ceil(arr.length / 2) - 1] = 'Классика';
console.log(arr.splice(0, 1));
arr.unshift('Рэп', 'Регги');

/*
Задание No21. Вызов в контексте массива
Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function() {
alert( this );
})
arr[2](); // ?

Ответ:
В результате выведет все элементы массива(две буквы и одна ф-ия).
Поскольку arr - объект, а 3-ий элемент - функция, указатель this
содержит ссылку именно на arr
*/
