// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye".
// ```


// function Task1 (age, balance) {

//     if (age > 18 && balance > 100){
//         return 'Wellcome'
//     } else {return 'Goodbye'} 
// }
// console.log(Task1(17, 101));




// ```
// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого".
// ```



// function Task2(amount, price){
//     if(amount * price <= 1000){
//         return "Ми це купуємо"
//     } else { return "Це занадто дорого" }

// }

// console.log(Task2(30, 500));


// ```
// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".
// ```


// function Task3(temp){
// if( temp < 0 ){
//     return "Замерзає"
// } else if ( temp > 0 &&  temp < 25){
//     return "Нормальна температура"
// } else { return "Спекотно"}
// }
// console.log(Task3(26));


// ```
// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться".
// ```

// function Task4(number, divisor){
// if(number %divisor === 0 ){
//     return "Ділиться"
// } else { return  "Не ділиться" }
// }
// console.log(Task4(45,22));




// ```
// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу".
// ```

// function Task5(isRaining, hasUmbrella){
// if(isRaining && hasUmbrella){
//     return "Не змокнеш"
// } else if (isRaining && !hasUmbrella)
// { 
//     return "Змокнеш"
// } else { return "Без дощу" 

// }
// }
// console.log(Task5(true, false));



// ```
// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".
// ```


// function Task6(grade){
//     if(grade >= 90)
//     {
//         return "Відмінно"
//     } else if (grade >= 75){
//         return "Добре"
//     } else if ( grade >= 50){
//         return "Задовільно"
//     } else { return "Незадовільно"}

// }
// console.log(Task6(75));




// ```
// Задача-7
// Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день".
// ```


// function task7(dayOfWeek, isHoliday){
//     if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday" || isHoliday){
//         return "Вихідний"
//     } else { return "Робочий день"}
// }
// console.log(task7("Moundey", false));




// ```
// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".
// ```

// function task8(year){
// if (year %4 === 0 && year %100 !== 0 || year %400 === 0){
//     return "Високосний рік"
// } else { 
//     return "Звичайний рік" }
// }

// console.log(task8(2023));


// ```
// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".
// ```


// function task9(hasInvitation,  isFriend){
// if (hasInvitation || isFriend)
// {
//     return "Ви запрошені"
// } else { return "Вхід заборонено" }

// }
// console.log(task9(false, false));


// ```
// Задача-10
// Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".
// ```

// function task10(age){
// if(age <= 12)

// { return "Дитина"  } 
// else if ( age <= 18){
//     return "Підліток"
// } else if ( age <= 60) {
//     return "Дорослий"
    
// } else { return "Пенсіонер" }

// } 
// console.log(task10(11));






// ```
// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".
// ```



// function task11(isLoggedIn, hasAdminRights){

//     if ( isLoggedIn && hasAdminRights) { 
//         return "Адмін-сторінка"
//      } else if (isLoggedIn && !hasAdminRights ){
//         return "Користувач"
//      } else { return "Гість" }
        
// }
// console.log(task11(false, false))

// ```
// Задача-12
// Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно".
// ```
// function task12(speed){
//     if (speed <= 60 ){
//         return "Безпечно"
//     } else if (speed <= 100){
// return "Увага"
//     } else {
//         return "Небезпечно"
//     }

// }
// console.log(task12(61));





// ```
// Задача-13
// Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір".
// ```



// function task13(time, isWeekend){
//     if( time < 12 && !isWeekend){
//         return "Ранок буднього дня"
//     } else if ( time > 12 && time < 18 && isWeekend){
//         return "День вихідного дня"
//     } else { return "Вечір" }
    
// }
// console.log(task13(11, false));

// ```
// Задача-14
// Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".
// ```

// function task14(hasGlutenAllergy, containsGluten){
//     if ( hasGlutenAllergy && containsGluten){
//         return "Не можна їсти"
//     } else { return "Можна їсти"}

// }
// console.log(task14(false, true));


// ```
// Задача-15
// Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь".
// ```


// function task15(age){
// if (age < 18){ return "Не можна купувати алкоголь"

// } else { return "Можна купувати алкоголь"}
// }
// console.log(task15(17));


// ```
// Задача-16
// Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома".
// ```

// function task16(isSunny){
//     if(isSunny) {
//         return "Вийдемо на прогулянку"
//     } else { return "Залишимося вдома"}
// }
// console.log(task16(false));



// ```
// Задача-17
// Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне".
// ```



// function task17(number){
// if(number %2 === 0){
//     return "Парне"
// } else { return "Непарне"}
// }
// console.log(task17(21));



// ```
// Задача-18
// Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються".
// ```


//  function task18(password, confirmPassword ){
//     if(password === confirmPassword){
// return "Паролі збігаються"
//     } else {
//         return "Паролі не збігаються"}

//  }
// console.log(task18("assss", "sssss"));



// ```
// Задача-19
// Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь".
// ```

// function task19(temperature){
// if( temperature < 0){
//     return "Зима"
// } else if( temperature <= 15){
//     return "Весна"
// } else if (temperature <= 25){
//     return "Літо"
// } else  {return  "Осінь"}
// }

// console.log(task19(0));


// ```
// Задача-20
// Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні".
// ```

// function task20( number1,  number2){
// if(number1 > number2){
//     return "Перше більше"
// } else if (number1 < number2){
//     return "Перше менше"
// } else { 
//     return "Рівні"}
// }


// console.log(task20(27,25));


// // ```







///////////////////////////////////////////////////////////////////////////////////////////


// function task55 (name){
//     const message = `Hello ${name}`
// console.log(message);



// }


// function task56(name){
//     return name.toUpperCase()
// }

// function task57(name){
//       const myName = task56(name)
//     task55(myName)
// }
// task57('Petro');

///////////////////////////////////////////////////////////////////////////



// Задача-21
// Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати".



// function task21(isBatteryFull){
//     if(isBatteryFull){
//         return "Не потрібно заряджати"
//     }else { 
//         return "Заряджати"}
// }
// console.log(task21(true));



// Задача-22
// Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено".



// function task22(isStudent, hasID){
// if(isStudent && hasID){
//     return "Вхід дозволено"
// } else { return "Вхід заборонено"}
// }
// console.log(task22(true, false));



// Задача-23
// Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легкий одяг".


// function task23(temperature, isRaining){
//     if(temperature < 0 || isRaining)
// {
//     return "Потрібно носити теплий одяг"
// }else {
//     return "Легкий одяг"}

// }
// console.log(task23(5, true));


// Задача-24
// Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено".


// function task24(hasCar, hasLicense){
//     if(hasCar && hasLicense){
//         return "Можете водити машину"
//     } else {
//         return "Водити заборонено"
//     }

// }
// console.log(task24(false, true));


// Задача-25
// Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено".

// function task25(age, hasParentConsent){
//     if(age < 18 && !hasParentConsent){
//         return "Доступ заборонено"
//     } else if(age > 18 || hasParentConsent) {
//         return "Доступ дозволено"
//     }
// }
// console.log(task25(19, false));

// Задача-26
// Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти".


// function task26(isVegetarian, containsMeat){
// if(isVegetarian && containsMeat){
//     return "Не можна їсти"
// } else { 
//     return "Можна їсти"} 
// }
// console.log(task26(true, false));


// Задача-27
// Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу".

// function task27(hoursWorked, overtime){
// if(hoursWorked > 40 || overtime){
//     return "Отримуєте бонус"
// } else {
//     return "Без бонусу"}
// }

// console.log(task27(40, true));

// Задача-28
// Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число".



// function task28(number, isPositive){
// if(number > 0 && isPositive){
//     return "Це позитивне число"
// }else {
//      return "Це не позитивне число" }
// }

// console.log(task28(-2, true));



// Задача-29
// Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома".

// function task29(temperature, isSunny){
// if(temperature > 20 && isSunny){
//     return "Час для прогулянки"
// }else {
//     return "Залишимося вдома"
// }
// }
// console.log(task29(21, false));


// Задача-30
// Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми".

// function task30(weight, height){
//     if(weight > 100 && height < 150){
//         return "Перевищено допустимий ліміт"
//     } else {
//         return "У межах норми"
//     }
// }
// console.log(task30(99, 150));




// Задача-31
// Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік".

// function task31(year, isLeapYear){
// if(year %4 === 0 && isLeapYear){
//     return "Це високосний рік"
// }else {
//     return "Звичайний рік"
// }
// }
// console.log(task31(2024, false));




// Задача-32                                                     !!!!!!
// Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть "Повна вартість квитка".

// function task32( age, isStudent, isSeniorCitizen ){
// if(age < 18 || isStudent || age > 65 && isSeniorCitizen){
//     return "Знижка на квиток"
// }else {
//     return "Повна вартість квитка"}
// }
// console.log(task32(18, false, false));





// Задача-33
// Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку".


// function task33( temperature, isRaining, hasUmbrella){
//     if(temperature > 25 && isRaining && hasUmbrella){
//         return "Візьміть парасолю та одягніться легше"
//     }else if(temperature > 25 && isRaining && !hasUmbrella){
//         return "Залишайтеся вдома"
//     }else {return "Виходьте на прогулянку"}
// }
// console.log(task33(24, true, false));

// Задача-34
// Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна".

// function task34(isMember, hasCoupon, purchaseAmount){
// if(isMember || hasCoupon && purchaseAmount > 100){
//     return "Отримаєте знижку"
// }else {
//     return "Знижка не доступна"}
// }
// console.log(task34(false, false, 99));



// Задача-35
// Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам".

// function task35(password, confirmPassword){
//     const hasDigit = /\d/.test(password)
// if( hasDigit && password === confirmPassword){
//     return "Пароль прийнято"
// }else {
//     return "Пароль не відповідає вимогам"
// }
// }
// console.log(task35("wwww", "wwwww"));



// Задача-36
// Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції".




// function task36(isOnline, hasCamera, hasMicrophone){
// if(isOnline && hasCamera || hasMicrophone){
//     return "Готові до відеоконференції"
// } else{
//     return "Немає можливості для відеоконференції"
// }
// }

// console.log(task36(true, false, false));


// Задача-37                                             !!!!!!!
// Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час".


// function task37(currentTime, isWeekend, isHoliday){
//     if(currentTime < 8 && !isWeekend && !isHoliday){
//         return "Скоро час на роботу"
//     } else { return "Вільний час"}

// }
// console.log(task37(7, false, false));



// Задача-38
// Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна".


// function task38(temperature, isSnowing, hasHeater){

// if(temperature < 0 && isSnowing && hasHeater){
//     return "Тепло та затишно"
// } else if (!hasHeater){
//     return "Потрібно зігрітися"
// } else {
//     return "Погода нормальна"
// }
// }
// console.log(task38(0, false, true));




// Задача-39
// Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем".

// function task39( age, hasDriverLicense, isInsured){
// if(age > 18, hasDriverLicense && isInsured){
//     return "Можна керувати автомобілем"
// } else {
//     return "Не можна керувати автомобілем"
// }
// }
// console.log(task39(17, false, true));




// Задача-40
// Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі".





// function task40(currentDay, hasMeeting, isHoliday){
// if(currentDay === "понеділок" || currentDay === "середа" || currentDay === "п'ятниця" && hasMeeting && !isHoliday){
//     return "Є зустріч"
// } else {
//     return "Немає зустрічі"
// }
// }

// console.log(task40("неділя", false, false));

// Задача-41
// Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Скидка доступна", в іншому випадку поверніть "Скидка не доступна".



// function task41(itemPrice, isDiscounted, discountAmount){
// if(itemPrice > 1000 && isDiscounted && discountAmount >= 10){
//     return "Скидка доступна"
// } else { return "Скидка не доступна"}
// }
// console.log(task41(990, true, 10));








/////////////////////////////////////////////////////////////////////////
// Задача-42"
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".

// function task42(dayOfWeek){
//     if(dayOfWeek === 1 ){
//         return "Понеділок"
//     } else if (dayOfWeek === 2){
//         return "Вівторок"
//     } else if(dayOfWeek === 3){
//         return "Середа"
//     } else {
//         return "Невідомий день"}
// }

// function task42(dayOfWeek){
//     switch(dayOfWeek){
//         case 1: 
//         return "Понеділок";
//         break;
//         case 2:
//             return "Вівторок";
//             break;
//              case 3:
//                 return "Середа";
//                 break;
//                 default:
//                     return "Невідомий день";
//     }
// }





// Задача-43
// Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно".
// function task43(grade){
//     switch(grade){
//         case  "A":
//         return "Відмінно";
//         break;
//         case "B" :
//             return "Добре";
//             break;
//             case  "C":
//                 return "Задовільно";
//                 break;
//     }
// }
// console.log(task43("C"));




// Задача-44
// Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода".

// function task44(fruit){
//     switch(fruit){
//         case "Лимон": 
//         case "Апельсин":
//             case  "Грейпфрут":
//                 return  "Цитрус";
//                 break;
//                 case "Яблуко":
//                     return "Яблуко";
//                     break;
//                     case "Груша":
//                         return "Груша";
//                         break;
//                         case "Полуниця":
//                             case "Малина":
//                                 case "Чорниця":
//                                     return "Ягода";
//                                     break;
//     }
// }





// Задача-45
// Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше".

// function task45(vehicleType){
//     switch(vehicleType){
//         case "Car":
//             return "Легковий автомобіль";
//             break;
//             case "Truck":
//                 return "Вантажівка";
//                 break;
//                 case "Motorcycle":
//                     return "Мотоцикл";
//                     break;
//                     default :
//                     return "Інше";
//     }
// }




///////////////////////////////////////////////////////////////////////////////



// Задача-46 Напишіть функцію, яка приймає один параметр animal. Використовуючи
// switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від
// введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб",
// "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка",
// "Черепаха", "Змія" - "Рептилія".

// function task46(animal){
// switch(animal){
//         case "Кішка":
//         case "Собака":
//         case "Кінь":
//            return "Ссавець";
//         break;
//         case "Голуб":
//         case "Орлан":
//         case "Горобець":
//            return "Птах";   
// break; 
//         case "Лосось":
//         case "Тунець": 
//         case "Тріска":
//            return "Риба";
// break;
//         case "Ящірка": 
//         case "Черепаха": 
//         case "Змія":
//             return "Рептилія";
//             break;
// }
// }
// console.log(task46("Кінь"));
////////////////////////////////////////////////////////////////////////////////////////////////


// ```
// Задача-47
// Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди.
// Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг".
// ```

// function task47(weather) {
//     switch(weather){
// case "Сонячно":
//     return "Sunny";
//     break;
//     case "Хмарно":
//         return "Cloudy";
//         break;
//         case "Дощ":
//             return "Rainy";
//             break;
//             case "Сніг":
//                 return "Snowy";
//                 break;
//     }
    
// }
// console.log(task47("Дощ"));
/////////////////////////////////////////////////////////////////////////////////////////////

// ```
// Задача-48
// Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. 
// Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований".
// ```

// function task48(mood){
//     switch(mood){
//         case "Happy":
//             return "Щасливий";
//             break;
//             case "Sad":
//                 return "Сумний";
// break;
//         case "Angry":
//     return "Злий";
//     break;
//         case "Surprised":
//         return "Здивований";
//         break;
//     }

// }
// console.log(task48("Surprised"));
///////////////////////////////////////////////////////////////////////


// ```
// Задача-49
// Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. 
// Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима".
// ```
///////////////////////////////////////////////////////////////////////////////////////

// function task49(month){
//     switch(month){
//         case "Березень": 
//         case "Квітень": 
//         case "Травень": 
//         return "Весна";
//         break;
//         case "Червень": 
//         case "Липень": 
//         case "Серпень":
//             return "Літо";
//             break;
//             case "Вересень": 
//             case "Жовтень":
//              case "Листопад":
//                 return "Осінь";
//                 break;
//                 case "Грудень": 
//                 case "Січень": 
//                 case "Лютий":
//                     return "Зима";
//                     break;
//     }

// }
// console.log(task49("Червень"));

////////////////////////////////////////////////////////////////////////////////////

// ```
// Задача-50
// Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. 
// Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір".
// ```


// function task50(color){
// switch(color){
// case "Red":
//  case "Orange": 
//  case "Yellow":
//     return "Теплий колір";
//     break;
//     case "Blue": 
//     case "Green":
//      case "Purple":
//         return "Холодний колір";
//         break; 
// }
// }
// console.log(task50("Yellow"));


// ```
// Задача-51
// Напишіть функцію, яка приймає один параметр continent.
// Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. 
// Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".
// ```
// function task51(continent){
//     switch(continent){
//         case "Africa":
//             return "Africa";
//             break;
//             case  "Europe":
//                 case  "Asia":
//                     return "Eurasia";
//                     break;
//                     case "North America":
//                         return "North America";
//                         break;
//                         case "South America":
//                             return "South America";
//                             break;
//                             case "Antarctica":
//                                 return "Antarctica";
//                                 break;
//                                 case "Australia":
//                                     return "Australia";
//                                     break;
//                                     default :
//                                     return "Невідомий континент";
//     }
// }


// console.log(task51("North America"));



// function task51(continent){
//     switch(continent){
//         case "Africa":
//          case "Europe": 
//          case "Asia": 
//          case "North America": 
//          case "South America": 
//          case "Antarctica": 
//          case "Australia":
//             return "відомі континенти";
//             break;
//              break;
//               default :
//                return "Невідомий континент";
//     }
// }


// console.log(task51("yurope"));











// Яким буде результат виразів?


// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //"kiwi"

// console.log(true && 0 && 'kiwi'); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); // false

// console.log(null || (2 && 3) || 4); // 3


// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); // 0
// console.log('' && 'Mango'); // ""
// console.log('Mango' && ''); // ""
// console.log('Mango' && 'Poly'); // "P"
// console.log('Poly' && 'Mango'); // "M"



// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true


// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // false
// console.log(!'Mango'); // false
// console.log(!0); // true
// console.log(!''); // true

// const isOnline = true;
// const isNotOnline = !isOnline;

// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true
// console.log(false && false); // false

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(false || false); // false

// console.log(!true); 
// console.log(!false);
// console.log(!!true); // true
// console.log(!!false); // false

// console.log(1 === 1 && 2 === 2); // true
// console.log(1 === 2 && 2 === 2); // false
// console.log(1 === 1 || 2 === 2); // true
// console.log(1 === 2 || 2 === 2); // true





// console.log(1 > 2 && 2 < 3); // false
// console.log(1 < 2 && 2 < 3); // true
// console.log(1 > 2 || 2 < 3); // true
// console.log(1 < 2 || 2 < 3); // true

// console.log(0 && 3); // 0
// console.log(3 && 0); // 0
// console.log(0 || 3); // 3
// console.log(3 || 0); // 3

// console.log('' || 'apple'); // "apple"
// console.log('orange' || ''); // "orange"
// console.log('' && 'banana'); // " "

// console.log(0 || false); // false
// console.log(false || 0); // 0
// console.log(1 && 'cherry'); // "cherry"
// console.log('banana' && 1); // 1
// console.log(null && 'pear'); // null


// console.log('peach' && undefined); // undefined
// console.log(undefined || 'plum'); // "plum"
// console.log('melon' || null); // "melon"
// console.log(undefined && false); // undefined
// console.log(true || 'watermelon'); // true
// console.log('watermelon' || true); // "watermelon"
// console.log(false && 'pineapple'); // false
// console.log('pineapple' && false); // false



// console.log(NaN || 'kiwi'); // "kiwi"
// console.log('kiwi' || NaN); // "kiwi"
// console.log(NaN && 'mango'); // NaN
// console.log('mango' && NaN); // NaN



// console.log(Infinity || 'apricot'); // "Infinity"     !!!!
// console.log('apricot' || Infinity); // "apricot"      !!!!
// console.log(Infinity && 'blueberry'); // "blueberry"  !!!!
// console.log('blueberry' && Infinity); // Infinity     !!!!
// console.log(null || undefined); // undefined



