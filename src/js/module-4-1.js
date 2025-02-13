// # Обєкти

// ## ОСНОВИ



// const defaultUser = {name: "", age: 0, address:"", isAdmin:false } /////////////////////////////////////////////////////////


// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та
// професія.


//  const person = {
//     hello  (){
//         console.log("Hello world")
//     },
//     name: "Myroslava",
//     age: 34,
//     profession: "Bank",
//     x: "321",
// }
// person.hello();

// // Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// console.log(person.name);
// console.log(person.age);
// console.log(person["age"]);

// // Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// person.age = 20;

// // Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи
// // зі значенням.

// person.work = "supermarket";


// // Видалення властивостей: Видаліть властивість професія з об'єкта person.

// delete person.profession;

// // Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.


// console.log(person.hasOwnProperty("work"));

// // Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить
// // інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з
// // об'єктом person.


// const friend = {
//     name: "Jon",
//     age: 25,
//     proffesion: "IT",
//     y:"123",
// }

// const object = { ...person, ...friend}

// console.log(object);


// const copy = {...object}

// // Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у
// // вигляді ключ-значення.



// const errOfKeys = Object.keys(person)
// for(const i of errOfKeys){
// // person[i]
// // console.log(i, person[i])
// // console.log(`console.log("${i}", person["${i}"])`)
// }



// // Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити
// // вітання з іменем особи.

// person.x = function sayHello(){
//     console.log("Hello world");
// }
// person.x();

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта
// person за допомогою функції Object.keys().

// ---




// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.
// ```


// function task1(name, age ){
// const object = {
//     name:name,
//     age:age,
// }
//  return object;
// }
// console.log(task1("Anton", 33));


// // ```
// // Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// // Поверни оновлений об'єкт.
// // ```

// function task3(object){
//     object.address = "";
//     return object;
// }


// 
// // ---

// // ```
// // Напиши функцію, яка приймає об'єкт і новий вік.
// // Функція повинна змінити значення властивості "age" в об'єкті на нове значення.
// // Поверни оновлений об'єкт.
// // ```


// function task3(object, newAge){
//     object.age = newAge;
//     return object;
// }

// const person = {name: "Anton", age: 26};

// console.log(task3(person, 23));
// ---

// // Напиши функцію, яка приймає об'єкт і видаляє з нього властивість "age".
// // Поверни оновлений об'єкт.
// // ```

// function task4(object){
   
//     delete object.age
//     return object;
// }


// console.log(task4(person));
// // ---

// // ```
// // Напиши функцію, яка приймає об'єкт і повертає значення властивості "name".
// // ```
// function task5(object){
//    return object.name;
// }

// console.log(task5(person));
// // ---

// // ```
// // Напиши функцію, яка приймає об'єкт і повертає true, якщо властивість "address" існує в об'єкті, і false, якщо ні.
// // ```
// function task6(object){
// return  object.hasOwnProperty("address");
// }
// console.log(task6(person));
// // ---

// ```
// Напиши функцію, яка приймає два об'єкти і об'єднує їх в один.
// Якщо у об'єктів є однакові властивості, значення другого об'єкта мають замінити значення першого.
// Поверни результат.
// ```

// function task2(object1, object2){
//     const newObject = {...object1, ...object2}
//     return newObject;
// }
// console.log(task2(defaultUser, {name:"Natalia", address:"Kyiv"}))

// // ```
// Напиши функцію, яка створює об'єкт з трьома властивостями: ім'ям, віком і адресою.
// Якщо ім'я та вік не передані, встанови їх значення за замовчуванням ("Unknown", 0 відповідно).
// Поверни об'єкт.
// ```
// function task8(name = "Unknown", age = 0, address = "No address provided"){
//     const objectPerson = {
//         name:name,
//         age:age,
//         address:address,
//     };
//     return objectPerson;
// }
// console.log(task8("Max", 33,"Kyiv"));
// // ---

// // ```
// // Напиши функцію, яка приймає об'єкт та нові значення для імені та віку. Функція повинна змінити обидві властивості в об'єкті. Поверни оновлений об'єкт.
// // ```
// function task9(objectPerson, newName, newAge){
//     objectPerson.name = newName;
//     objectPerson.age = newAge;

//     return objectPerson;

// } 
// const person = task8("Max", 33,"Kyiv");
// console.log(person);
// const updatePerson = task9(person, "Daniel", 34);
// console.log(updatePerson);
// // ---

// ```
// Напиши функцію, яка приймає об'єкт та нову властивість "email" (якщо її немає).
// Якщо в об'єкті вже є "email", нічого не роби.
// Поверни оновлений об'єкт.
// ```
// function task1(object, email){
//     const newObject = { email:email, ...object}
//     return newObject;
// }
// console.log(task1(defaultUser, "123gmail.com"))
// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює тип значення властивості "age" з числа на рядок.
// Поверни оновлений об'єкт.
// ```
// function task2(object){
//     object.age = object.age.toString()
//     return object;
// }
// console.log(task2(defaultUser));
// ---

// ```
// Напиши функцію, яка приймає об'єкт і змінює значення властивості "address", але тільки якщо ця властивість вже існує.
// Якщо її немає, поверни об'єкт без змін.
// ```


// function task3(object){
//     if("address" in object){
//         object.address = "newAddress"
//     } return object;
    
// }

// let object = { name: "John", };


// console.log(task3(object));

// // ---

// ```
// Напиши функцію, яка приймає об'єкт користувача з властивостями name та сity. Та повертає рядок "User {імя користувача} from {місто користувача}!"
// ```



// function task4(object){
//     return `User ${object.name} from ${object.city}!`;
   
// }
// let user = {name:"John", city:"Kyiv"};

// console.log(task4(user));
// ---

// ```
// Напиши функцію, яка приймає масив з ключами і значеннями (наприклад, [["name", "John"], ["age", 25], ["address", "123 Street"]]) і створює об'єкт з цих пар. 
// Поверни об'єкт.
// function task1(arr) {
//     const result = {}; 
//     for (let i = 0; i < arr.length; i++) {
//         const key = arr[i][0]; 
//         const value = arr[i][1]; 
//         result[key] = value;
//     }
//     return result; 
// }


// console.log(task1([["name", "John"], ["age", 25], ["address", "123 Street"]])); 

// ```


/////////////////////////////////////////////////
// function task5(arr){
// let result = {};
// for(let pair of arr){
//     let key = pair[0];
//     let value = pair[1];
//     result[key] = value;
// }
// return result;
// }

// let arr = [["name", "John"], ["age", 25], ["address", "123 Street"]];

// console.log(task5(arr)); 



// function task5(arr) {
//     return Object.fromEntries(arr);
// }
//////////////////////////////////////////////////////////////////////
// ---

// ```
// Напиши функцію, яка приймає масив об'єктів і змінює в кожному з них властивість "age", збільшуючи її на 1. Поверни оновлений масив об'єктів.
// ```


// function task6(arr){
//     for(let obj of arr){
//         obj.age += 1;
//     }
//     return arr;
// }

// console.log(task6([{name:"Vitalii", age:20}, {name:"Vasia", age:30}]));
// // ---



// ## ЗАДАЧІ №2

// ```
//1 Створіть об'єкт contactBook, який зберігатиме список контактів та надаватиме методи для додавання, видалення та пошуку контактів.

// const contactBook = {
//     contacts: {},
//     addContact(name, phone){
// if(this.contacts[name]){
//     return `${name} вже є в контактній книзі!`;
// }  this.contacts[name] = phone;
// return `Контакт ${name} успішно додано.`;
//     }, 
   

// }
// console.log(contactBook.addContact("Anna", "12345678"));
// ```

// ```
//2 Створіть об'єкт rectangle, який представлятиме прямокутник з методами для обчислення його площі та периметра. Об'єкт повинен приймати довжини двох сторін під час створення.
// ```

// ```
// 3Створіть об'єкт toDoList, який зберігатиме список задач та надаватиме методи для додавання нових завдань, позначки задачі як виконаної та виведення списку завдань.
// ```

// ```
// 4Створіть об'єкт bankAccount, який представлятиме банківський рахунок із методами для депозиту, зняття коштів та перевірки балансу. Врахуйте обробку можливих помилок (наприклад, недостатньо коштів).
// ```

// ```
// 5Створіть об'єкт libraryCatalog, який зберігатиме список книг у бібліотеці та надаватиме методи для додавання нових книг, пошуку книг за автором та ISBN, а також виведення списку всіх книг.
// ```

// ```
// 6Створіть об'єкт temperatureConverter, який матиме методи для конвертації температур між градусами Цельсія та Фаренгейта.
// ```

// ```
// 7Створіть об'єкт shoppingCart, який зберігатиме список товарів та надаватиме методи для додавання товарів, підрахунку загальної вартості та виведення списку товарів.
// ```

// ```
// 8Створіть об'єкт socialNetworkUser, який представляє користувача соціальної мережі з полями username, friends (список друзів) та методами для додавання та видалення друзів, а також виведення списку друзів.
// ```

// ```
// 9Створіть об'єкт musicPlayer, який зберігатиме список пісень та надаватиме методи для додавання нових пісень, відтворення, паузи та перемикання між піснями.
// ```

// ```
// 10Створіть об'єкт myString, який буде мати наступні методи: метод reverse(), який параметром приймає рядок, а повертає його в перевернутому вигляді; метод ucFirst(), який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру заголовною; і метод ucWords(), який приймає рядок і робить заголовною першу літеру кожного слова цього рядка.
// ```

// ```
// 11Створіть об'єкт validator, який перевірятиме рядки. Наприклад, у нього буде метод isEmail, що параметром приймає рядок і перевіряє, чи є він коректним емейлом чи ні. Якщо є – повертає true, якщо не є – то false. Крім того, об'єкт буде мати такі методи: метод isDomain для перевірки домену, метод isDate для перевірки дати і метод isPhone для перевірки телефону.
// ```




////////////////////////////////////////////////////////////////////////


// Створи об'єкт "Книга" з властивостями title, author, year, pages та методами read, getSummary, setAuthor. 
// Метод read повинен повертати текст, який повідомляє, що ти читаєш цю книгу. 
// Метод getSummary має повертати інформацію про книгу у вигляді одного речення, що включає її назву, автора та рік видання. 
// Метод setAuthor повинен дозволяти змінити автора книги на нове значення.


// const book = {
//     title: "Book one day",
//     author: "Jon",
//     year: 1905,
//     pages: 150,
//     read(){
//         return `I am reading ${this.title}`
//     },
//     getSummary(){
// return `${this.title} by ${this.author}, published in ${this.year}!`
//     },
//     setAuthor(newAuthor){
//         this.author = newAuthor;
//         return `New author ${this.author}`
//     },

// }
// console.log(book.read());
// console.log(book.getSummary());
// console.log(book.setAuthor("Jon Doe"));



// Створи об'єкт "Користувач" з властивостями firstName, lastName, age, isOnline та методами login, logout, getProfile, setAge. 
// Метод login має встановлювати isOnline в true та повертати повідомлення про те, що користувач увійшов у систему. 
// Метод logout повинен встановлювати isOnline в false і повідомляти, що користувач вийшов. 
// Метод getProfile має повертати інформацію про ім'я, прізвище та вік користувача. 
// Метод setAge повинен дозволяти змінити вік користувача.



// const user = {
//     firstName: "Anna",
//     lastName: "Kotenko",
//     age: 30,
//     isOnline: false,
// login(){
//     this.isOnline = true;
// return `${this.firstName} ${this.lastName} is now online`;
// },
// logout(){
//     this.isOnline = false;
//     return `${this.firstName} ${this.lastName} has logged out`;
// },
// getProfile(){
//     return ` Name: ${this.firstName} ${this.lastName}, age: ${this.age}`;
// },
// setAge(newAge){
//     this.age = newAge;
//     return ` ${this.firstName} ${this.lastName}, ${this.age}`;
// }
// }
// console.log(user.login());
// console.log(user.logout());
// console.log(user.getProfile());
// console.log(user.setAge(33));

// Створи об'єкт "Автомобіль" з властивостями brand, model, year, isRunning та методами start, stop, getCarInfo, setYear. 
// Метод start має встановлювати isRunning в true і повідомляти, що автомобіль завівся. 
// Метод stop повинен встановлювати isRunning в false і повідомляти, що автомобіль зупинився. 
// Метод getCarInfo має повертати інформацію про марку, модель і рік випуску автомобіля. 
// Метод setYear повинен дозволяти змінити рік випуску автомобіля.


// const car = {
//     brand: "BMW",
//     model: "X6",
//     year: 2012,
//     isRunning: false,
// start(){
//     this.isRunning = true;
//     return `${this.brand} started`;
// },
// stop(){
//     this.isRunning = false;
//     return `${this.brand} stopped`;
// },
// getCarInfo(){
//     return ` car ${this.brand} ${this.model} ${this.year}`;
// },
// setYear(newYear){
//     this.year = newYear;
//     return `${this.brand} ${this.year}`
// }
// }
// console.log(car.start());
// console.log(car.stop());
// console.log(car.getCarInfo());
// console.log(car.setYear(2022));

// Створи об'єкт "Кафе" з властивостями name, location, isOpen та методами open, close, getCafeInfo, setLocation. 
// Метод open повинен встановлювати isOpen в true і повідомляти, що кафе відкрилося. 
// Метод close має встановлювати isOpen в false і повідомляти, що кафе закрите. 
// Метод getCafeInfo повинен повертати інформацію про назву кафе та його розташування. Метод setLocation дозволяє змінити місцезнаходження кафе.



// const cafe = {
//     name: "Citadella",
//     location: "Praha",
//     isOpen: false,
//     open(){
//         this.isOpen = true;
//         return `${this.name} open`;
//     },
//     close(){
//         this.isOpen = false;
//         return `${this.name} close`;
//     },
//     getCafeInfo(){
//         return `cafe ${this.name} location ${this.location}`
//     },
//     setLocation(newLocation){
//         this.location = newLocation;
//         return `${this.name} location ${this.location}`
//     },
// } 

// console.log(cafe.open());
// console.log(cafe.close());
// console.log(cafe.getCafeInfo());
// console.log(cafe.setLocation("Kyiv"));


// Створи об'єкт "Рахунок" з властивостями accountNumber, balance, isActive та методами deposit, withdraw, getAccountInfo, closeAccount.
//  Метод deposit має збільшувати баланс на певну суму і повертати новий баланс. 
//  Метод withdraw повинен зменшувати баланс на задану суму, якщо це можливо, і повертати залишок. 
//  Метод getAccountInfo повинен повертати номер рахунку та його баланс. 
// Метод closeAccount встановлює isActive в false і повідомляє, що рахунок закритий.


// const score = {
//     accountNumber: 12345,
//     balance: 1000, 
//     isActive: true,
//     deposit(amount){
//         this.balance += amount;
//         return this.balance;
//     },
//     withdraw(amount){
//       if(this.balance >= amount){
//         this.balance -= amount
//         return this.balance;
//       } else 
//       return "Insufficient funds";
//     },
//     getAccountInfo(){
//         return   `Account nomber: ${this.accountNumber}, balance: ${this.balance}`;
//     },
//     closeAccount(){
//         this.isActive = false;
//         return "Account closed."
//     }
// }
// console.log(score.deposit(500));
// console.log(score.withdraw(300));
// console.log(score.getAccountInfo());
// console.log(score.closeAccount());









// Нові подібні задачі:
// Створи об'єкт "Телефон" з властивостями brand, model, batteryLevel, isOn та методами turnOn, turnOff, charge, getPhoneInfo. 
// Метод turnOn повинен встановлювати isOn в true і повідомляти, що телефон увімкнено. Метод turnOff повинен встановлювати isOn в false і повідомляти, що телефон вимкнено. 
// Метод charge має збільшувати рівень заряду батареї на певну величину, але не більше 100%.
//  Метод getPhoneInfo повинен повертати інформацію про марку, модель і рівень заряду батареї.


// const phone = {
//     brand: "Samsung",
//     model: "S24",
//     batteryLevel: 95,
//     isOn: false,
//     turnOn(){
//     if(!this.isOn){
//         this.isOn = true;
//         console.log("телефон увімкнено");
//     } else {
//         console.log("Телефон уже увімкнений");
//     }
// },
// turnOff(){
//     if(this.isOn){
//         this.isOn = false;
//         console.log("телефон вимкнено");
//     } else {
//         console.log("Телефон уже вимкнений");
//     }
// },
// charge(amount){
//     if(this.batteryLevel < 100){
//         this.batteryLevel += amount;
    
//     if(this.batteryLevel > 100){
//         this.batteryLevel = 100;
//     }
//     console.log(`Батарея заряджена до ${this.batteryLevel}%`);
// } else {
//     console.log("Батарея вже повністю заряджена");
// }
// },

// getPhoneInfo(){
//     return `Марка: ${this.brand}, Модель: ${this.model}, Рівень заряду: ${this.batteryLevel}%`;
// }

// };

// phone.turnOn();
// phone.charge(15);
// console.log(phone.getPhoneInfo());
// phone.turnOff();


// Створи об'єкт "Рюкзак" з властивостями brand, color, capacity, currentLoad та методами addItem, removeItem, getBackpackInfo, setCapacity. 
// Метод addItem повинен збільшувати поточне навантаження, якщо це можливо, і повідомляти про доданий предмет. 
// Метод removeItem повинен зменшувати поточне навантаження, якщо це можливо, і повідомляти про видалений предмет.
//  Метод getBackpackInfo повинен повертати інформацію про бренд, колір, загальну та поточну місткість.
//  Метод setCapacity дозволяє змінити загальну місткість рюкзака.



// const backpack = {
//     brand: "adidas",
//     color: "black",
//     capacity: 5,
//     currentLoad: 0,
//     addItem(weigth){
//         if(this.currentLoad + weigth <= this.capacity){
// this.currentLoad += weigth;
// console.log(`Предмет вагою ${weigth} кг додано. Поточне навантаження: ${this.currentLoad} кг.`);
//         } else {
//             console.log(`Не можна додати предмет вагою ${weigth} кг. Перевищено місткість рюкзака!`);
//     }
//     },
//     removeItem(weigth){
//         if(this.currentLoad - weigth >= 0 ){
//             this.currentLoad -= weigth;
//             console.log(`Предмет вагою ${weigth} кг видалено. Поточне навантаження: ${this.currentLoad} кг.`);
//         } else {
//             console.log(`Не можна видалити предмет вагою ${weigth} кг. У рюкзаку недостатньо предметів.`);
//         }
//     },
//     getBackpackInfo(){
//         return `Бренд: ${this.brand}, колір: ${this.color}, поточна кількість: ${this.currentLoad}, загальна кількість: ${this.capacity} кг.`;
//     },
//     setCapacity(newCapacity){
// if(newCapacity >= this.currentLoad){
//     this.capacity = newCapacity;
//     console.log(`Місткість рюкзака змінено на ${this.capacity} кг.`);
// } else {
//     console.log(`Нова місткість ${newCapacity} кг менша за поточне навантаження ${this.currentLoad} кг. Зміна неможлива.`);
// }
//     }

// };
// console.log(backpack.getBackpackInfo()); 

// backpack.addItem(3);
// backpack.addItem(4); 
// console.log(backpack.getBackpackInfo()); 

// backpack.removeItem(2); 
// backpack.removeItem(5); 
// console.log(backpack.getBackpackInfo()); 

// backpack.setCapacity(10); 
// backpack.addItem(5); 
// console.log(backpack.getBackpackInfo()); 



// Створи об'єкт "Квартира" з властивостями address, squareMeters, isAvailable, pricePerMonth та методами rent, freeUp, getApartmentInfo, setPrice. 
// Метод rent повинен встановлювати isAvailable в false і повідомляти, що квартира орендована. 
// Метод freeUp має встановлювати isAvailable в true і повідомляти, що квартира тепер доступна.
//  Метод getApartmentInfo повинен повертати інформацію про адресу, площу та статус доступності квартири. 
//  Метод setPrice дозволяє змінити ціну за місяць оренди.


// const apartment = {
//     address:"Kyiv",
//     squareMeters: 55,
//     isAvailable: true,
//     pricePerMonth: 1000,
//     rent(){
// if(this.isAvailable){
//     this.isAvailable = false;
// console.log("Квартира орендована");
// } else {
//     console.log("Квартира вже орендована");
// }
//     },
//     freeUp(){
// if(!this.isAvailable){
// this.isAvailable = true;
// console.log("Квартира доступна для оренди");
// } else {
//     console.log("Квартира вже доступна");
// }
//     },
//     getApartmentInfo(){
//         return `Адрес: ${this.address}, Площа: ${this.squareMeters} кв.м, Доступність: ${this.isAvailable ? "Доступна" : "Орендована"}`;
//     },
//     setPrice(newPrice){
// if(newPrice > 0){
//     this.pricePerMonth = newPrice;
// console.log(`Ціна за місяць змінена на ${this.pricePerMonth}`);
// } else {
//     console.log("Ціна за місяць повинна бути більше за 0");
// }
//     }
// };

// console.log(apartment.getApartmentInfo());
// apartment.rent();
// console.log(apartment.getApartmentInfo());
// apartment.freeUp();
// console.log(apartment.getApartmentInfo());
// apartment.setPrice(1200);
// console.log(apartment.getApartmentInfo());


// Створи об'єкт "Велосипед" з властивостями brand, type, isRented, rentPricePerHour та методами rent, returnBike, getBikeInfo, setRentPrice. 
// Метод rent повинен встановлювати isRented в true і повідомляти, що велосипед орендовано. 
// Метод returnBike повинен встановлювати isRented в false і повідомляти, що велосипед повернуто. 
// Метод getBikeInfo повинен повертати інформацію про бренд, тип і статус велосипеда. Метод setRentPrice дозволяє змінити ціну за годину оренди.


// const bike = {
//     brand: "Norco",
//     type:"e-Bikes",
//     isRented: false,
//     rentPricePerHour:150,
//     rent(){
//         if(!this.isRented){
//             this.isRented = true;
//             console.log("Велосипед орендовано");
//         } else {
//             console.log("Велосипед вже орендовано");
//         }
//     },
//     returnBike(){
//         if(this.isRented){
//             this.isRented = false;
//             console.log("Велосипед повернуто");
//         } else {
//             console.log("Велосипед вільний");
//         }
//     },
//     getBikeInfo(){
//         return `Велосипед, бренд: ${this.brand}, тип: ${this.type}, статус: ${this.isRented ? "Орендований"  : "Доступний"}`;
//     },
//     setRentPrice(newRentPrise){
//         if(newRentPrise > 0 ){
//             this.rentPricePerHour = newRentPrise;
//             console.log(`Ціна за оренду змінена ${this.rentPricePerHour}`);
//         } else {
//             console.log ("Ціна за оренду повинна бути більше за 0");
//         }
//     }
// };

// console.log(bike.getBikeInfo());
// bike.rent();
// console.log(bike.getBikeInfo());
// bike.returnBike();
// console.log(bike.getBikeInfo());
// bike.setRentPrice(200);
// console.log(bike.getBikeInfo());


// Створи об'єкт "Тренажер" з властивостями name, isOccupied, usageTime та методами startUsage, endUsage, getTrainerInfo, setName. 
// Метод startUsage повинен встановлювати isOccupied в true і збільшувати час використання на певну кількість хвилин. 
// Метод endUsage повинен встановлювати isOccupied в false і повідомляти, що тренажер вільний. 
// Метод getTrainerInfo повинен повертати інформацію про назву тренажера, його статус і час використання. Метод setName дозволяє змінити назву тренажера.

// const trainer = {
//     name: "Racetrack",
//     isOccupied: false,
//     usageTime: 90,
//     startUsage(minutes){
// if(!this.isOccupied){
//     this.isOccupied = true;
//     this.usageTime += minutes;
// console.log(`${this.name} використовується. Час ${minutes}`);
// } else { console.log(`${this.name} вже зайнятий`);
// }
//     },
//     endUsage(){
//         if(this.isOccupied){
//             this.isOccupied = false;
// console.log(`${this.name} вільний`);
//         } else {
//             console.log(`${this.name} вже вільний`);
//         }
//     },
//     getTrainerInfo(){
//         return ` Тренажер ${this.name}, статус: ${this.isOccupied ? "Зайнятий" : "Вільний"}, час використання: ${this.usageTime} хв`;
//     },
//     setName(newName){
//         if(!newName){
// console.log(`Назва тренажера не може бути порожньою`)
// return;
//         }
// if(newName !== this.name){
// this.name = newName
// console.log(`Новий тренажер ${this.name}`);
// } else {
//     console.log(`тренажер ${this.name} вже має таку назву`);
//     }
// }
// };
// console.log(trainer.getTrainerInfo());
// trainer.startUsage(30);
// console.log(trainer.getTrainerInfo());
// trainer.endUsage();
// console.log(trainer.getTrainerInfo());
// trainer.setName("track");
// console.log(trainer.getTrainerInfo());

// Створи об'єкт "Готель" з властивостями name, roomsAvailable, isFull та методами checkIn, checkOut, getHotelInfo, addRooms. 
// Метод checkIn повинен зменшувати кількість доступних кімнат, якщо це можливо, і повідомляти, що гість заселений. 
// Метод checkOut має збільшувати кількість доступних кімнат і повідомляти, що гість виселений. 
// Метод getHotelInfo повинен повертати інформацію про назву готелю, доступні кімнати та статус заповненості. 
// Метод addRooms дозволяє додати більше кімнат у готель.



// const hotel = {
//     name:"Hilton",
//     roomsAvailable: 7,
//     isFull:false,
//     checkIn(rooms){
//         if(this.roomsAvailable >= rooms){
//             this.roomsAvailable -= rooms;
//             console.log("Гість заселений");
//         } else { 
//             console.log("Немає достатньо доступних кімнат");
//             }
//     },
//     checkOut(rooms){
//             this.roomsAvailable += rooms;
//             console.log("Гість виселений");
//     },
//     getHotelInfo(){
//         return `${this.name}, ${this.roomsAvailable}, ${this.isFull}`;
//     },
//     addRooms(newRooms){
// this.roomsAvailable += newRooms;
//     }
   
// };
// hotel.checkIn(7);
// hotel.checkOut(1);
// hotel.getHotelInfo();
// hotel.addRooms(3);
// console.log(hotel);

// Створи об'єкт "Гаманець" з властивостями owner, balance та методами addMoney, spendMoney, getWalletInfo. 
// Метод addMoney повинен збільшувати баланс на певну суму і повідомляти про поповнення. 
// Метод spendMoney повинен зменшувати баланс на задану суму, якщо це можливо, і повідомляти про витрати. 
// Метод getWalletInfo повинен повертати інформацію про власника гаманця та баланс.



// const money = {
//     owner: "Michel",
//     balance: 0,
//     addMoney(sum){
// this.balance += sum
// console.log(`Баланс збільшено на ${sum}`);
//     },
//     spredMoney(newSum){
//         if(this.balance >= newSum){
// this.balance -= newSum;
// console.log(`З вашого рахунку знято ${newSum}`);
//         }
//     },
//     getWalletInfo(){
//         return `${this.owner}, ${this.balance}`
//     }
// };

// money.addMoney(400);
// money.spredMoney(200);
// money.getWalletInfo();
// console.log(money);







// Ось нові задачі, схожі за стилем і структурою:

// 1. Об'єкт "Магазин"
// Створи об'єкт з властивостями name, location, products, isOpen та методами open, close, addProduct, removeProduct, getStoreInfo. 
// Метод open має встановлювати isOpen в true і повідомляти, що магазин відкритий. 
// Метод close встановлює isOpen в false і повідомляє, що магазин закритий. 
// Метод addProduct додає новий продукт у список товарів. 
// Метод removeProduct видаляє продукт за його назвою. 
// Метод getStoreInfo повинен повертати інформацію про магазин та його місцезнаходження.

// const store = {
// name:"ATB",
// location: "Kyiv",
// products: [],
// isOpen: false,
// open(){
//    this.isOpen = true
//    console.log("Магазин відкритий"); 
// },
// close(){
//     this.isOpen = false
//     console.log("Магазин закритий");
// },
// addProduct(newProduct){
// this.products.push(newProduct);
// },
// removeProduct(name){
// this.products = this.products.filter(product => product.name !== name)
// },
// getStoreInfo(){
//     return `${this.name}, ${this.location}, `
// }
// };

// store.addProduct({name: "Apple", price: 20});
// store.addProduct({name: "Banana", price: 30});
// store.addProduct({name: "Ananas", price: 40});
// console.log(store);
// store.removeProduct("Apple");
// console.log(store);



// 2. Об'єкт "Бібліотека"
// Створи об'єкт з властивостями name, books, isOpen та методами openLibrary, closeLibrary, addBook, removeBook, getLibraryInfo. 
// Метод openLibrary має встановлювати isOpen в true і повідомляти, що бібліотека відкрита.
//  Метод closeLibrary встановлює isOpen в false і повідомляє, що бібліотека закрита. 
// Метод addBook додає нову книгу до списку книг.
//  Метод removeBook видаляє книгу за назвою. 
// Метод getLibraryInfo повинен повертати інформацію про бібліотеку та кількість книг у ній.




// 3. Об'єкт "Спортсмен"
// Створи об'єкт з властивостями name, age, sport, achievements та методами train, addAchievement, getProfile, setSport. 
// Метод train повинен повертати повідомлення про те, що спортсмен тренується. 
// Метод addAchievement додає нове досягнення до списку досягнень. 
// Метод getProfile повинен повертати інформацію про ім'я, вік і вид спорту.
//  Метод setSport дозволяє змінити вид спорту.

// const sportmen = {
//     name: "Adam",
//     age:23,
//     sport: "Run",
//     achievements: [],
//     train(){
//         return `${this.name} тренується`;
//     },
//     addAchievement(item){
//         this.achievements.push(item);
//     },
//     getProfile(){
//         return `${this.name}, ${this.age}, ${this.sport}`;
//     },
//     setSport(newSport){
// this.sport += newSport;
//     }
// }




// 4. Об'єкт "Ресторан"
// Створи об'єкт з властивостями name, cuisine, location, isOpen та методами open, close, getMenu, setCuisine. 
// Метод open має встановлювати isOpen в true і повідомляти, що ресторан відкритий. 
// Метод close встановлює isOpen в false і повідомляє, що ресторан закритий. 
// Метод getMenu повинен повертати меню ресторану у вигляді тексту. 
// Метод setCuisine дозволяє змінити тип кухні ресторану.

// 5. Об'єкт "Школа"
// Створи об'єкт з властивостями name, students, teachers, isOperating та методами startClasses, endClasses, addStudent, removeStudent, getSchoolInfo. 
// Метод startClasses має встановлювати isOperating в true і повідомляти, що заняття розпочалися.
//  Метод endClasses встановлює isOperating в false і повідомляє, що заняття закінчилися. 
//  Метод addStudent додає нового студента до списку студентів. Метод removeStudent видаляє студента за ім'ям.
//   Метод getSchoolInfo повинен повертати інформацію про школу та кількість учнів і вчителів.