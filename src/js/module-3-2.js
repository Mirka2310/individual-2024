// Напиши функцію, яка приймає два параметри (a і b) та повертає їхню суму.




// function task1(a,b){
//     const sum = a + b;
//     return sum;
// }

// console.log(task1(1, 6));
// 1. Напиши функцію, яка приймає три параметри (a, b, c) і повертає максимальне з
//    них.


// function task2(a,b,c){
// if( a > b && a > c){
//     return a;
// } else if (b > a && b > c){
//     return b;
// } else c;
// }

// console.log(task2(4,7,5))

// 1. Напиши функцію, яка приймає три параметри (число, мінімум і максимум) та
//    повертає true, якщо число знаходиться між мінімумом і максимумом (включно), і
//    false, якщо ні.



// function task33(number, min, max){
//     if(number > min && number <=max){
//         return true;
//     } return false;
// }

// console.log(task33(7, 5, 7));

// 1. Напиши функцію, яка приймає рядок і повертає перший символ цього рядка.

// function task1(string){
//     return string[0];
// }
// console.log(task1("world"));

// 1. Напиши функцію, яка приймає рядок і повертає останній символ цього рядка.


// function task2(string){
//     return string(string.length - 1);
   
// }

// console.log(task2("world"));

// 1. Напиши функцію, яка приймає число і повертає true, якщо число парне, і false,
//    якщо ні.


// function task3(number){
//     if( number %2 === 0){
//         return true;
//     } return false;
// }

// console.log(task3(6));

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.


// function task4(number1, number2){
// if( number1 === 0 || number2 === 0){
//     return null;
// } else { 
//     return number1 * number2}
// }
// console.log(task4(3,6));

// 1. Напиши функцію яка приймає рядок і повертає цей самий рядок але огорнутий у
//    тег div. Приклад: на вході був рядок `"Hello world"` а на виході рядок    ????????????????????????//////////////
//    `"<div>Hello world<div>"`

// function task5(string){
// return `"<div>${string}<div>"`;

// }

// console.log(task5("Hello world"));

// 1. Напиши функцію, яка приймає рядок і повертає кількість слів у ньому (слова
//    розділені пробілами).     ??????????????????///


// function task6(string){
//     return string.trim().split(/\s+/).length;
// }

// console.log(task6("Hello world my name is Myroslava"));

// 1. Напиши функцію, яка приймає рядок і повертає його довжину помножену на  ????????????????????
//    кількість слів в цьому рядку.

// function task7(string){
//     const length = string.length;
//     const wordCount = string.trim().split(/\s+/).length;
//     return length *  wordCount;
// }
// console.log(task7("Hello world my name is Myroslava"));

// 1. Напиши функцію, яка приймає рядок і повертає кількість голосних літер у ньому
//    (a, e, i, o, u). Використовуйте метод includes та цикл.

// function task8(string){
    
// let result = 0;
// const vowels = ["a", "e", "i", "o", "u"];

// for(let i = 0; i < string.length; i++){
//     if(vowels.includes(string[i].toLowerCase())){
//         result++;
//     }
// } return result;
// }

// console.log(task8("Hello"));

////////////////////////////////////////////////////////////////
// 1. Напиши функцію, яка приймає рядок і повертає новий рядок, де слова
//    розташовані у зворотному порядку.

// function task9(string){

//     return string.split(" ").reverse().join(" ");
// }
// console.log(task9("My name is Myroslava!"));

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає true,
//    якщо всі аргументи є числами, і false, якщо ні. ////////////???????????????????????????/

// function task10(){
//     for(let arg of arguments ){
// if(  typeof arg !== 'number'){
//     return false; }

//     } return true;

// }
// console.log(task10(3,7,5));

// 1. Напиши функцію, яка приймає довільну кількість аргументів і повертає їх
//    об'єднаними в один рядок, розділений комами.
// function task11(){
// let rezult = "";
// for(let arg of arguments ){
//     rezult += `${arg}, `

// } return rezult;
// }

// console.log(task11("Hello world", 6, true));
///////////////////////////////////////////////////////////////
// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає їхній
//    добуток.


// function task12(...args){
//     let result = 1;
//     for( let arg of args){
// result *= arg;
//     } return result;
// }
// console.log(task12(3,4,5,2));

// 1. Напиши функцію, яка приймає довільну кількість чисел і повертає кількість
//    непарних чисел серед них.
// function task13(...args){
//     let result = 0;
//     for(let arg of args){
//        if(arg %2 !==0){
// result += 1;
//        }
//     } return result;
// }
// console.log(task13(5,4,8,2,1,3));

// 1. Напиши функцію яка приймає довільну кількість рядочків і повертає той рядок
//    що є найдовшим


// function task14(...args){
//     let result = "";
//     for( let arg of args){
//         if(result.length < arg.length){
//             result = arg;
//         }
//     }return result;
// }
// console.log(task14("Hello", "world", "end", "starts"));

// 1. Напиши функцію яка приймає довільну кількість рядочків і обєднує їх в один
//    цілий рядок.

// function task15(...args){
//     let result = args.join();
//     return result;
// } 
// console.log(task15("www", "eee", "qqq"));

// 1. Напиши функцію яка приймає два числа. Якщо одне з чисел дорівнює нуль то
//    повернути null, в іншому випадку повернути добуток цих двох чисел.

// function task33( number1, number2){

// if( number1 === 0 || number2 === 0 ){
//     return null;
// } else {
//     return number1 * number2;
// } 
// }


// console.log(task33(4,6));
//////////////////////////////////////////////////////////////////////////////////////

// Напиши функцію, яка приймає масив чисел і повертає суму всіх елементів у масиві.

// function task1(arr){
//     let sum = 0;
//     for(  let i = 0; i < arr.length; i++){
//         sum += arr[i];
// }
// return sum;
// }

// console.log(task1([5,7,6,8,9,9]));


// Напиши функцію, яка приймає масив чисел і повертає кількість додатних чисел у масиві..
// Наприклад, для [1, -2, 3, -4, 5] результат буде 3, тому що є три додатні числа: 1, 3, 5.

// function task2(arr){
//     let sum = 0; 
//     for(let i = 0; i < arr.length; i++){
//         if( arr[i] > 0){
//             sum++;
//         }
//     } return sum;
// }

// console.log(task2([2,4,5,6,7]));



// Напиши функцію, яка приймає рядок і повертає кількість символів у ньому, що є пробілами.

// function task3(string){
//     let symbol = 0; 
//    for( let char of string){
// if( char === " "){
//     symbol ++;
// }
//    } return symbol;

//     }

// console.log(task3("Hello world"))

// Напиши функцію, яка приймає рядок і повертає новий рядок, у якому кожна літера рядка замінена на наступну в алфавіті (наприклад, "abc" перетворюється на "bcd").
// Підказка: використовуйте методи charCodeAt() і fromCharCode().  ?????????????///

// function task4(string){
//     let stringNew = "";
//     for( char of string){

//     }
// }


// Напиши функцію, яка приймає число і повертає "Парне", якщо число парне, або "Непарне", якщо число непарне.

// function task4(number){
//   if( number %2 === 0){
//     return "Парне";
//   } 
//   return "Непарне";
// }
// console.log(task4(5));

// Напиши функцію, яка приймає рядок і повертає цей рядок, але без голосних літер (a, e, i, o, u).

// Наприклад, "hello world" → "hll wrld".

// function task5(string){
//     let result = "";
//     for( letter of string){
//         if(!"aeiouAeiou".includes(letter)){
//             result +=letter;
          
//         }
//     } return result;
// }
// console.log(task5( "hello world"));
// Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожен елемент помножено на 2.

// function task6(arr){
//     let array = [];
//     for(let i = 0; i < arr.length; i++){
       
//         array.push(arr[i] * 2);
        
//     } return array;
// }
// console.log(task6([3,4,6,7,9]));


// Напиши функцію, яка приймає рядок і повертає новий рядок, у якому всі букви у верхньому регістрі (заголовні букви).
// function task7(string){
//     return string.toUpperCase();
// }
// console.log(task7("hello"));

// Напиши функцію, яка приймає масив чисел і повертає "Так", якщо в масиві є число 7, і "Ні" — якщо немає.

// function task8(arr){
//     for( let i = 0; i < arr.length; i++ ){
// if(arr[i] === 7) {
//     return "Так";
// }
//     } 
//     return "Ні";

//     }


// console.log(task8([4,8,9]));

// Напиши функцію, яка приймає масив чисел і повертає новий масив, у якому залишилися тільки парні числа.

// function task10(arr){
//     let array = [];
//     for(let i = 0 ; i < arr.length; i++){
// if(arr[i] %2=== 0 ){
//     array.push(arr[i]);
// }
//     } return array;
// }
// console.log(task10([4,7,6,9,8,2,1]));





// 1. Порахувати кількість голосних літер у рядку
// Напишіть функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку (a, e, i, o, u).

// Приклад:

// function countVowels(str) {
//     for()
// }
// console.log(countVowels("hello")); // 2
// console.log(countVowels("world")); // 1

// Пояснення: Потрібно перебрати кожен символ і перевірити, чи є він голосним.

// 2. Пошук найпершої літери в рядку
// Напишіть функцію, яка приймає рядок і повертає першу літеру цього рядка. Якщо рядок порожній, повертає "Немає літери".

// Приклад:

// function firstLetter(str) {
//     // Ваш код тут
// }
// console.log(firstLetter("javascript")); // "j"
// console.log(firstLetter("")); // "Немає літери"


// 3. Перевірка, чи є слово в рядку
// Напишіть функцію, яка перевіряє, чи є в рядку слово "Java". Якщо є — повертає "Знайдено", якщо ні — "Не знайдено".

// Приклад:

// function findJava(str) {
//     // Ваш код тут
// }
// console.log(findJava("I love JavaScript")); // "Знайдено"
// console.log(findJava("I love coding")); // "Не знайдено"


// 4. Підрахувати кількість пробілів у рядку
// Напишіть функцію, яка приймає рядок і повертає кількість пробілів у цьому рядку.

// Приклад:


// function countSpaces(str) {
//     // Ваш код тут
// }
// console.log(countSpaces("Hello World")); // 1
// console.log(countSpaces("This is a test")); // 3

// 5. Заміна символів у рядку
// Напишіть функцію, яка приймає рядок і замінює всі пробіли на дефіси ("-"), а всі літери "a" на "@".

// Приклад:

// function replaceCharacters(str) {
//     // Ваш код тут
// }
// console.log(replaceCharacters("JavaScript is amazing")); // "J@v@Script-is-@m@zing"
// console.log(replaceCharacters("Hello World")); // "Hello-World"