// Прості задачі

// 1. Напиши функцію, яка приймає масив та виводить кожен елемент масиву у консоль.

// function task11(array){
// for ( const item of array){
//     console.log(item);

// }
// }

// task11(["Hello", "world", 1, 6, true]);

// 1. Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у
//    консоль.

// function task22(array){
//     for( let i = 0; i < array.length; i++){
//         if(i %2=== 0){
//             console.log(array[i]);

//         }
//     }
// }
// task22([2,6,5,10,8]);

// // 1. Напиши функцію, яка приймає масив чисел та виводить лише парні числа у
//    консоль.

// function task33(array){
//     for( let i = 0; i < array.length; i++){
//         if(array[i] %2 === 0) {
//             console.log(array[i]);

//         }
//     }
// }

// task33([4,8,6,2,10,3,15]);
// 1. Напиши функцію, яка приймає два параметри (arr, max). Де arr - це масив
//    чисел. Потрібно вивести лише ті елементи масиву які більші за max.

// function task44(arr, max){
//     for ( let i = 0; i < arr.length; i++){
// if( arr[i] > max)
//     console.log(arr[i]);

//     }
// }
// task44([4,10,6,8,5], 5);

// 1. Напиши функцію яка приймає масив та повертає суму всіх чисел у масиві.

// function task55(arr){

//     debugger
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
// sum += arr[i]
//     }
//     console.log(sum);

// }

// task55([2,3,4]);

// 1. Напиши функцію яка приймає масив та елемент для пошуку. Фукнція повинна
//    порахувати скільки разів шуканий елемент зустрічається у масиві.

// function task56(arr, elem){
//     let sum = 0;
//     for( let i = 0; i < arr.length; i++){
//         if( elem === arr[i]){
//             sum += 1;}
//     } console.log(sum);

// }

// task56([2,3,3,3,5,6], 3);

// 1. Напиши функцію яка приймає масив чисел. Функція повинна видалити усі
//    негативні(відємні числа) з масиву та повернути новий масив.

// function task57(arr){
//     let array = [];
//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] > 0 ){
//             array.push(arr[i])
//         }
//     } console.log(array);

// }

// task57([-1, -4, 7,6,9]);

// 1. Напиши функцію яка приймає масив рядочків. Потрібно змінити кожен елемент
//    масиву наступним чином - якщо довжина рядочку менша за 6 до привести рядок до
//    нижнього регістру, в іншому випадку привести до верхнього регістру.

// function task11(arr){
//     for( let i = 0; i < arr.length; i++){
//         if( arr[i].length < 6){
//             arr[i] = arr[i].toLowerCase()
//         } else { arr[i] = arr[i].toUpperCase()

//         }
//     } console.log(arr);

// }
// task11(["qqqqq", "dddddd", "ttttttt"]);

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише непарні числа.

// function task22(arr){
//     let newArray = [];
//     for(i = 0 ; i < arr.length; i++){
//         if(arr[i] %2 === 1) {
//             newArray.push(arr[i]);
//         }
//     } return newArray;
// }
//  console.log( task22([1,4,3,7,4]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожне
//    число помножене на індекс, за яким воно знаходиться в масиві.

// function task33(arr){
// let newArray = [];
// for( let i = 0; i <arr.length; i++){
//         newArray.push(arr[i] * i);
// } return newArray;
// }
// console.log(task33([1,2,3,4,9,6,7,5]));

// 1. Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить
//    лише числа, які діляться на 3.

// function task33(arr){
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
// if( arr[i] %3 === 0 ){
//     newArray.push(arr[i]);
// }
//     } return newArray
// }
// console.log(task33([3,6,9,7,5,4]));

//////////////////////////////////////////////////////////////

// Середні задачі

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише ті елементи які зустрічаються і в arr1 і arr2.

// function task1(arr1, arr2){
//     let newArr = [];
//     for( let i = 0; i < arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             newArr.push(arr1[i])
//         }
//     } return newArr;
// }

// console.log(task1([1,2,3],[1] ));

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
//    де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function task2(arr1, arr2){
//     let newArray = [];
//     for(i = 0; i < arr1.length; i++){
//         if(!arr2.includes(arr1[i])){
//             newArray.push(arr1[i])
//         }
//     } return newArray;
// }

// console.log(task2([1,1,2,4],[3,4,1]));

// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function task3(arr){
// let newElement = arr[0];
// for(let i = 0; i < arr.length; i++){
// if(arr[i] < newElement){
//     newElement = arr[i]
// }
// } return newElement;
// }
// console.log(task3([1,5,6,3,9]));

// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function task4(arr){
//     let newEl = arr[0];
//     for(let i = 0; i < arr.length; i ++){
//         if(arr[i] > newEl){
//             newEl = arr[i];
//         }
//     } return newEl;
// }

// console.log(task4([1,9,5]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за середнє значення всіх елементів масиву.

// function task5(array){
//     let newArr = [];
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     const awg = sum / array.length
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > awg){
//             newArr.push(array[i])
//         }
//     } return newArr;
// }

// console.log(task5([1,2,3,4,5,6]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
//    більші за власний індекс.

// function task6(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > i){
//             newArr.push(arr[i]);
//         }
//     } return newArr;
// }

// console.log(task6([1,6,3,7,3]))
// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
//    елемент та видалити його з масиву.
// function task7(arr){
//     let minIndex = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < arr[minIndex])
//             minIndex = i;
//     }
//     arr.splice(minIndex, 1)

//     return arr;
// }

// console.log(task7([1,2,3,4,5]));

// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
//    повернути масив де будуть числа з діапазону але лише ті у яких не має
//    цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
//    у собі.

// function task8(start, end){
//     let arr = [];
//     for(let i = start; i < end; i++){
//         if(!i.toString().includes("5")){
//             arr.push(i)
//         }
//     } return arr;
// }

// console.log(task8(1,55));

/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// Функція для фільтрації чисел:
//  Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише числа, які є кратними 5.

// function taskOne(arr){
//     let array = [];
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] % 5 === 0){
//             array.push(arr[i])
//         }
//     } return array;
// }

// console.log(taskOne([5,7,10,25,18,30]));

// // Знайти мінімум і максимум:
// // Напиши функцію, яка приймає масив чисел і повертає об’єкт із мінімальним і максимальним значенням у масиві.                       ??????

// function taskSecond(arr){
//     let min = arr[0];
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         } if(arr[i] > max ){
//             max = arr[i];
//         }
//     } return {min: min, max: max }
// }
// console.log(taskSecond([1,7,9,1,0,5]));

// Функція для пошуку рядків:
//  Напиши функцію, яка приймає масив рядків і рядок для пошуку. Поверни індекс першого входження рядка, або -1, якщо його немає в масиві.

// function taskThird(arr, string){
// for(let i = 0; i < arr.length; i++){
//    if( arr[i] === string) {
//         return i;
//     }
// }
//  return -1;
// }

// console.log(taskThird(["Hello", "world", "apple"],"apple"));

// Квадрати чисел:
//  Напиши функцію, яка приймає масив чисел і повертає новий масив, де кожен елемент є квадратом відповідного числа з вхідного масиву.

// function taskFourth(arr){
//     let array = [];
//     for(let i = 0; i < arr.length; i++){
//        array.push(arr[i] ** 2)
//     } return array
// }

// console.log(taskFourth([1,2,3,4,5,7]));

// Сортування рядків за довжиною:
// Напиши функцію, яка приймає масив рядків і повертає новий масив, у якому рядки відсортовані за зростанням їхньої довжини.                  ????????????????????

// function taskFifth(arr){
//     let array = [];
//     for (let i = 0; i < arr.length; i++){
//     }
// }
// let arr = [3,5,2,7,4];

// for (let i = 0; i < arr.length; i++) {
  
//   for (let j = i; j < arr.length; j++) {
//     if(arr[i] > arr[j]){
//         let tmp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tmp; 
//     }

//   }

// }
// console.log(arr);

// Сума непарних індексів:
//  Напиши функцію, яка приймає масив чисел і повертає суму чисел, що знаходяться на непарних індексах.
// function taskSixth(arr){
//     let sum = 0;
//     for(let i = 1; i < arr.length; i+=2){
// sum += arr[i]
//     } return sum;
// }

// console.log(taskSixth([1,2,3,4,5,6,7]));

// Подвійне сортування:
//  Напиши функцію, яка приймає масив чисел і повертає новий масив, де всі парні числа відсортовані за зростанням, а непарні – за спаданням.   ??????????

// function taskSeven(arr){

//     let growNumbers = [];
//     let fallNumbers = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] %2 === 0){
//             growNumbers.push(arr[i])
//         } else {fallNumbers.push(arr[i])}
//     }
// growNumbers.sort((a, b) => a - b);
// fallNumbers.sort((a,b) => b - a);

// return growNumbers.concat(fallNumbers);
// }

// console.log(taskSeven([1,6,9,4,3,19, 9, 8]));

// Фільтрація за довжиною рядка:
// Напиши функцію, яка приймає масив рядків і число n. Функція повинна повернути новий масив, що містить лише рядки довжиною більше n.

// function task12(arr, n){
// let array = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i].length > n ){
//         array.push(arr[i]);
//     }
// } return array;
// }

// console.log(task12(["world", "task", "number"], 4));

// Функція для знаходження спільних елементів:
// Напиши функцію, яка приймає два масиви і повертає новий масив, що містить лише спільні елементи обох масивів.

// function task13(arr1, arr2){
// let array = [];
// for(let i = 0; i < arr1.length; i++){                               чому проходим по масиву  1
//     if(arr2.includes(arr1[i])){
//         array.push(arr1[i])
//     }
// } return array;
// }

// console.log(task13([1,5,7], [1,6,7]));

// Кількість унікальних елементів:
// Напиши функцію, яка приймає масив чисел і повертає кількість унікальних елементів у ньому.               ---------------------------

// function task22(arr){
//     let uniqueElement = 0;
//     for( let i = 0; i < arr.length; i ++){
//  let el = arr[i];
//  let firstIndex = arr.indexOf(el);
//  let lastIndex = arr.lastIndexOf(el);
//  if(firstIndex === lastIndex){
//     uniqueElement += 1;
//  }
// } return uniqueElement;
// }

// console.log(task22([1,5,6,8,5,1]));

// console.log(task22());

// Фільтрація чисел більших за середнє значення:
//  Напиши функцію, яка приймає масив чисел і повертає новий масив, що містить лише ті числа, які більші за середнє значення масиву.

// function task22(arr){
//     let array = [];
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//       sum += arr[i];
//     }

//     const  avg = sum / arr.length;
//     for( let i = 0; i < arr.length; i ++){
//         if(arr[i] > avg){
//             array.push(arr[i])
//         }
//     } return array
// }

// console.log(task22([1,6,7,9,8,4,3]));

// Заміна від'ємних чисел на нуль:
// Напиши функцію, яка приймає масив чисел і повертає новий масив, у якому всі від'ємні числа замінені на 0.

// function task1(array){
//     let arr = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] < 0 ){
//             arr.push(0)
//         } else {
//             arr.push(array[i]);
//         }
//     } return arr;
// }
// console.log(task1([-1,-6 -3, 5,8,9]))

// Сортування чисел за модулем:
// Напиши функцію, яка приймає масив чисел і повертає новий масив, у якому числа відсортовані за їх модулем (тобто за абсолютною величиною).  ????????????????????????????

// function tast3(arr){
//     let array = 0;
//     for(let i = 0; i < arr.length; i++){

//     }
// }

// Перевірка на послідовність:
// Напиши функцію, яка приймає масив чисел і повертає true, якщо числа в масиві розташовані у зростаючому порядку, і false – якщо ні.

// function task22(arr){
//     for(let i = 0 ; i < arr.length - 1; i++){
//         if(arr[i] > arr[i + 1] ) {
//             return false;
//         }
//     } return true;
// }
// console.log(task22([1,3,4,8]));

// Знайти елемент з найбільшою кількістю повторів:
// Напиши функцію, яка приймає масив і повертає елемент, який зустрічається найчастіше. Якщо таких кілька, поверни перший.




// Перетворення масиву в об'єкт:
// Напиши функцію, яка приймає масив чисел і повертає об'єкт, де кожен ключ — це індекс числа, а значення — саме число.

// function task11(arr){
//     let obj = {};
//     for(let i = 0 ; i< arr.length; i++){
//         obj[i] = arr[i];
// } return obj;
// }

// console.log(task11([1,6,8,9]));

// Перевірка симетрії масиву:
// Напиши функцію, яка перевіряє, чи є масив "паліндромом" (однаковим у зворотньому порядку).

// function task23(arr){
//     for(let i = 0; i < arr.length; i++){
//        if()
//     }
// }

// function task23(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {  // проходимо тільки половину масиву
//         if (arr[i] !== arr[arr.length - 1 - i]) { // порівнюємо симетричні елементи   
//             return false; // якщо знайшли невідповідність - масив не паліндром
//         }
//     }
//     return true; // всі елементи симетричні, масив - паліндром
// }
// Додавання елементів до масиву:
// Напиши функцію, яка приймає масив чисел і повертає новий масив, додавши по 1 до кожного парного числа та віднявши 1 від кожного непарного числа.

// function task22(arr){
// let array = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] %2 === 0){
//         array.push(arr[i] + 1)
//     } else {
//         array.push(arr[i] - 1)

//     }
// } return array;
// }

// console.log(task22([1,2,4,5,8,9]));

// Кількість рядків певної довжини:
// Напиши функцію, яка приймає масив рядків і число n і повертає кількість рядків, довжина яких дорівнює n.

// function task33(arr, n){
//     let number = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].length === n ){
//             number++;
//         }
//     } return number;
// }
// console.log(task33(["qqq", "rtrt","ee"], 4))

// Сума всіх чисел на парних індексах:
// Напиши функцію, яка приймає масив чисел і повертає суму всіх чисел, що знаходяться на парних індексах.

// function task33(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//        if ( i %2 === 0){
//         sum += arr[i]
//        }
//     } return sum;
// }

// console.log(task33([1,4,5,6,7,8,9,]));



// Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
// де будуть лише ті елементи які зустрічаються і в arr1 і arr2.
// function task1(arr1, arr2){
//     let array = [];
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.includes(arr1[i])){
//             array.push(arr1[i]);
// }
//     }  return array;
// }
// console.log(task1([1,5,4], [2,4,6]));

// 1. Напиши функцію яка приймає два масиви (arr1, arr2), та повертає новий масив
// де будуть лише елементи масиву arr1 яких не має у масиві arr2.

// function task2(arr1, arr2){
//     let array = [];
//     for (let i = 0; i < arr1.length; i++){
//         if(!arr2.includes(arr1[i])){
//             array.push(arr1[i]);
//         }
//     } return array;
// }
// console.log(task2([4,6,8], [1,5,4,8]));

// 1. Напиши функцію яка приймає масив та знаходить мінімальний елемент.

// function task3(arr){
// if(arr.length === 0){
//     return null;
// }
//     let min = arr[0];
//     for(i = 0; i < arr.length; i++){
// if(arr[i] < min ){
//     min = arr[i];
// }
//     } return min;
// }
// console.log(task3([65,8,7,3,6]));

// 1. Напиши функцію яка приймає масив та знаходить максимальний елемент.

// function task4(arr){
//     if(arr.length === 0){
//         return null;
//     }
//     let max = arr[0];
//     for( let i = 1; i < arr.length; i ++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     } return max;

    
// }
// console.log(task4([7,6,9,3,1]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
// більші за середнє значення всіх елементів масиву.

// function task5(arr){
//     let array = [];
//     let sum = 0;
//     for(let i = 0 ; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let averageValue = sum / arr.length;

//     for(let i = 0; i < arr.length; i ++){
//         if(arr[i] > averageValue ){
//             array.push(arr[i])
//         }
//     } return array;
// }
// console.log(task5([3,2,3,4,5,6,6,6]));

// 1. Напиши функцію яка приймає масив та повертає масив лише з тих елементів які
// більші за власний індекс.


// function task6 (arr){
// let array = [];
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > i){
//         array.push(arr[i])
//     }
// } return array;
// }

// console.log(task6([5,4,1,3,4,7]));

// 1. Напишіть функці яка приймає масив чисел. Функція повинна занйти мінімальний
// елемент та видалити його з масиву.

// function task10(arr){
//     let minIndex = 0;
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < arr[minIndex]){
//         minIndex = i;
//     }
//     arr.splise(minIndex);

// } return arr;

// }
// 1. Напиши функцію яка приймає два параметри start та end. Функія повина
// повернути масив де будуть числа з діапазону але лише ті у яких не має
// цифри 5. К прикладу числа (51, 25, 15,256) не підходять бо містять символ "5"
// у собі.

// function task44(start, end){
//     let array = [];
//     for( let i = start; i <= end; i++){
// if(!i.toString().includes("5")){
//     array.push(i);
// }
//     } return array;

// }

// console.log(task44(3, 15));






////////////////////////////////////////////////////////////////////////////////////////////////


// Складні

// 1. Напиши функцію, яка приймає массив чисел і повертає новий масив, де всі парні
//    числа переміщені в початок, а всі непарні - в кінець.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є сумою усіх попередніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, що містить
//    лише унікальні числа.
// 1. Напиши функцію, яка приймає два масиви і повертає об'єднаний массив без
//    дублювання елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де кожен
//    елемент є середньоарифметичним всіх сусідніх елементів.
// 1. Напиши функцію, яка приймає массив чисел і повертає новий массив, де елементи
//    відсортовані в порядку збільшення або зменшення.
// 1. Напиши функцію, яка приймає массив рядочків та сортує їх за довжиною
//    елементів.

