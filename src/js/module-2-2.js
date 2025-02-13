// 1. Напиши цикл, який виведе на консоль числа від 1 до 10.

// for(let i = 1; i <= 10; i++){
//     console.log(i);

// }

// function task1(start, end){
//     for(let i = start; i <=end; i++){
//         console.log(i);

//     }
// }
// task1(1,20);



// function task11(start, end){
//     for(let i = start; i <= end; i++){
//         console.log(i);
        
//     }
// }

// task11(0,20);
//--------------------------------------------------------------------------


// 1. Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// for (let i = 1; i <=20; i++){
//     if(i %2=== 0){
//         console.log(i);

//     }
// }

// function task2( start, end, num){
//     for(let i = start; i <= end; i++){
//         if(i %num === 0){
//             console.log(i);

//         }
//     }
// }

// task2(1, 22, 2);
// task2(1, 30, 3);



// function task22(start, end, num){
//     for(let i = start; i <= end; i++){
//         if(i %num === 0){
//             console.log(i);
            
//         }
//     }
// }

// task22(1,22,2);
//------------------------------------------------------------------------------------------

// 1. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     sum += i
// }

// console.log(sum);

// function task3(start, end){
//     let sum = 0;
//     for (let i = start; i <=end; i++){
//         sum +=i
//     }

//     console.log(sum);

// }

// task3(1, 55);



// function task33(start, end){
//     let sum = 0;
//     for ( let i = start; i <=end; i++){
//         sum += i
//     }
//     console.log(sum);
    
// }

// task33(1, 100);
//-----------------------------------------------------------------------------------------

// 1. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до
//    10).


// function task4(number){
//     for(let i = 1; i <= 10; i++){
//         console.log(`${i} * ${number} = ${i*number}`);
        
//     }
// }
// task4(5);
//----------------------------------------------------------------------------

// 1. Напиши цикл, який обчислить факторіал числа, введеного користувачем
//    (наприклад, факторіал числа 5: `!5 = 1 * 2 * 3 * 4 * 5`).

// function task4(end) {
//   let product = 1;
//   for (let i = 1; i <= end; i++) {
//     product *= i;
//   }f
//   console.log(product);
// }

// task4(5);
//--------------------------------------------------------------------


// 1. Напиши цикл, який виведе кожну другу літеру рядочку "Hello world"

// function task5(){

//     let text = "Hello world"
// for(let i = 1; i < text.length; i += 2){
//     console.log(text[i]);
    
// }
// }
// task5();
//----------------------------------------------------------------

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому
//    порядку.

// function task(){
//     let str = "Hello world";
//     for (let i = str.length-1; i >= 0; i--){
//         console.log(str[i]);
        
//     }
// }
// task();

// 1. Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне
//    пробіл.


// function task7(){
//     let str2 = "Hello world";
//     for( i = 0; i < str2.length; i++){
//         if (str2[i] != " "){
//             console.log(str2[i]);
//         } else {break}
        
//     }
// }

// task7();

// 1. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".



// function task8(){
//     let str3 = "JavaScript";
//     for( i = 1; i < str3.length; i+=2){
//         console.log(str3[i])
//     }
// }
// task8();


// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок


// function task9(str){
//     let result = "";
//     for (i = str.length - 1; i >=0; i--){
//         result += str[i]
//     } return result;
// }

// console.log(task9("Hello"));

// 1. Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у
//    верхньому регістрі

// 1. Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до
//    рядочка str1 стільки разів скільки вказали у параметрі count.






// function getString(str1, str2, count){
//   let result = str1;
   
//    for( i = 0; i < count; i++){
//     result += str2;
//    }
//    return result;
// }

// console.log(getString("Hello", "!", 4))



