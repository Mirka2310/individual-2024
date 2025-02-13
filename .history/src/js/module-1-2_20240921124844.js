// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2. В іншому випадку функція повинна повернути булеве значення false.

// function task1(str1, str2) {
//   const firstLetters = str1[0];
//   const lastLetters = str2[str2.length - 1];
//   if (firstLetters === lastLetters) {
//     return true;
//   } else return false;
// }

// console.log(task1('Hello world', 'World'));

// console.log(task1('MDHR','WDRM'));

// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2. В іншому випадку функція повинна повернути булеве значення false.

// function task2(str1, str2) {
//   const firstTaskOne = str1[0];
//   const lastTaskTwo = str2[0];

//   if (firstTaskOne === lastTaskTwo) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(task2('Daj', 'Daj'));

// console.log(task2('One', 'Daj'));


// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2. В іншому випадку функція повинна повернути булеве значення false.

// function task3 (str1, str2 ){
//     const lastLettersOne = str1.length;
//     const lastLetterTwo = str2.length;

//     return lastLettersOne === lastLetterTwo
// } 
//  console.log(task3('Hello', 'Hello'));
 

// Задача-4
// Напишіть функцію яка приймає число num. Функція повинна повернути булеве значення true якщо кількість цифр у числі парна. В іншому випадку функція повинна повернути булеве значення false.


// function numberOne(num){

//     const numberTwo = num.toString().length;
// return (numberTwo %2) === 0
// }

// console.log(numberOne(12));

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.


// function numberOne(num1, num2){ 

//     return num1 > num2 
// }

// console.log(numberOne(3,4));


// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі. В іншому випадку функція повинна повернути булеве значення false.


// function numberTwo(num1,num2){
//     return num1%num2 === 0  
// }
// console.log(numberTwo(19,7));



// Задача-7
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є непарним числом. В іншому випадку функція повинна повернути булеве значення false.


// 

// Задача-8
// Напишіть функцію, яка приймає параметр str. Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру. В іншому випадку функція повинна повернути булеве значення false.


// function stringOne(str){
// return str !== str.toLowerCase()
// }

// console.log(stringOne('Hello'));

// Підказка: допоможе toLowerCase();
// Задача-9
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо довжина str1 більше, ніж довжина str2. В іншому випадку функція повинна повернути булеве значення false.


// function stringOne(str1, str2) {
//     const stringOnne = str1.length;
//     const stringTwo = str2.length;

//     return stringOnne > stringTwo 
// }

// console.log(stringOne('Ok', 'Good'));

// Задача-12
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл. В іншому випадку функція повинна повернути булеве значення false.


// function stringOnne(str){
// return str.includes(' ')
// }

// console.log(stringOnne('Hello '));

// Задача-14
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str є паліндромом (однаковий у зворотному напрямку). В іншому випадку функція повинна повернути булеве значення false.


function stringOne(str){
    return str.split('').reverse().join()
}
console.log(stringOne('hello'));

// Підказка: тут допоможе метод масиву reverse();
// Задача-15
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2. В іншому випадку функція повинна повернути булеве значення false.
