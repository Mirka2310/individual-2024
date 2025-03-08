// const books = [
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960,
//       genre: 'Fiction',
//       price: 10.99,
//       rating: 4.9,
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949,
//       genre: 'Dystopian',
//       price: 8.99,
//       rating: 4.8,
//     },
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925,
//       genre: 'Classic',
//       price: 7.99,
//       rating: 4.7,
//     },
//     {
//       title: 'The Catcher in the Rye',
//       author: 'J.D. Salinger',
//       year: 1951,
//       genre: 'Fiction',
//       price: 6.99,
//       rating: 4.6,
//     },
//     {
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//       year: 1813,
//       genre: 'Romance',
//       price: 5.99,
//       rating: 4.9,
//     },
//     {
//       title: 'The Hobbit',
//       author: 'J.R.R. Tolkien',
//       year: 1937,
//       genre: 'Fantasy',
//       price: 12.99,
//       rating: 4.8,
//     },
//     {
//       title: 'Moby Dick',
//       author: 'Herman Melville',
//       year: 1851,
//       genre: 'Adventure',
//       price: 9.99,
//       rating: 4.5,
//     },
//     {
//       title: 'War and Peace',
//       author: 'Leo Tolstoy',
//       year: 1869,
//       genre: 'Historical',
//       price: 14.99,
//       rating: 4.9,
//     },
//     {
//       title: 'Crime and Punishment',
//       author: 'Fyodor Dostoevsky',
//       year: 1866,
//       genre: 'Philosophical',
//       price: 11.99,
//       rating: 4.8,
//     },
//     {
//       title: 'The Brothers Karamazov',
//       author: 'Fyodor Dostoevsky',
//       year: 1880,
//       genre: 'Philosophical',
//       price: 13.99,
//       rating: 4.9,
//     },
//     {
//       title: 'Brave New World',
//       author: 'Aldous Huxley',
//       year: 1932,
//       genre: 'Dystopian',
//       price: 9.99,
//       rating: 4.7,
//     },
//     {
//       title: 'Jane Eyre',
//       author: 'Charlotte Brontë',
//       year: 1847,
//       genre: 'Romance',
//       price: 7.99,
//       rating: 4.8,
//     },
//     {
//       title: 'Wuthering Heights',
//       author: 'Emily Brontë',
//       year: 1847,
//       genre: 'Romance',
//       price: 8.99,
//       rating: 4.7,
//     },
//     {
//       title: 'The Picture of Dorian Gray',
//       author: 'Oscar Wilde',
//       year: 1890,
//       genre: 'Gothic',
//       price: 6.99,
//       rating: 4.6,
//     },
//     {
//       title: 'Frankenstein',
//       author: 'Mary Shelley',
//       year: 1818,
//       genre: 'Science Fiction',
//       price: 7.99,
//       rating: 4.7,
//     },
//     {
//       title: 'Dracula',
//       author: 'Bram Stoker',
//       year: 1897,
//       genre: 'Horror',
//       price: 6.99,
//       rating: 4.5,
//     },
//     {
//       title: 'The Odyssey',
//       author: 'Homer',
//       year: -800,
//       genre: 'Epic',
//       price: 10.99,
//       rating: 4.9,
//     },
//     {
//       title: 'The Iliad',
//       author: 'Homer',
//       year: -750,
//       genre: 'Epic',
//       price: 9.99,
//       rating: 4.8,
//     },
//     {
//       title: 'Les Misérables',
//       author: 'Victor Hugo',
//       year: 1862,
//       genre: 'Historical',
//       price: 11.99,
//       rating: 4.9,
//     },
//     {
//       title: 'The Count of Monte Cristo',
//       author: 'Alexandre Dumas',
//       year: 1844,
//       genre: 'Adventure',
//       price: 12.99,
//       rating: 4.9,
//     },
//     {
//       title: 'The Grapes of Wrath',
//       author: 'John Steinbeck',
//       year: 1939,
//       genre: 'Fiction',
//       price: 8.99,
//       rating: 4.7,
//     },
//     {
//       title: 'Of Mice and Men',
//       author: 'John Steinbeck',
//       year: 1937,
//       genre: 'Fiction',
//       price: 7.99,
//       rating: 4.6,
//     },
//     {
//       title: 'A Tale of Two Cities',
//       author: 'Charles Dickens',
//       year: 1859,
//       genre: 'Historical',
//       price: 9.99,
//       rating: 4.8,
//     },
//     {
//       title: 'Great Expectations',
//       author: 'Charles Dickens',
//       year: 1861,
//       genre: 'Fiction',
//       price: 8.99,
//       rating: 4.7,
//     },
//     {
//       title: 'The Secret Garden',
//       author: 'Frances Hodgson Burnett',
//       year: 1911,
//       genre: 'Children',
//       price: 6.99,
//       rating: 4.7,
//     },
//     {
//       title: 'Little Women',
//       author: 'Louisa May Alcott',
//       year: 1868,
//       genre: 'Fiction',
//       price: 7.99,
//       rating: 4.8,
//     },
//     {
//       title: 'Anna Karenina',
//       author: 'Leo Tolstoy',
//       year: 1877,
//       genre: 'Romance',
//       price: 10.99,
//       rating: 4.9,
//     },
//     {
//       title: 'The Adventures of Sherlock Holmes',
//       author: 'Arthur Conan Doyle',
//       year: 1892,
//       genre: 'Mystery',
//       price: 9.99,
//       rating: 4.8,
//     },
//     {
//       title: 'The Lord of the Rings',
//       author: 'J.R.R. Tolkien',
//       year: 1954,
//       genre: 'Fantasy',
//       price: 20.99,
//       rating: 4.9,
//     },
//     {
//       title: "Harry Potter and the Sorcerer's Stone",
//       author: 'J.K. Rowling',
//       year: 1997,
//       genre: 'Fantasy',
//       price: 10.99,
//       rating: 4.8,
//     },
//   ];

  
  
// 1. Знайти всі книги жанру 'Fantasy'.


// function task1() {
// const result = []
// for(let i = 0; i < books.length; i++){
//    if(books[i].genre === "Fantasy"){
//     result.push(books[i])
//    } 
// }

//  return result;
// }
// const x1 = task1();

// console.log(x1);
// 1. Знайти всі книги, видані після 2000 року.

// function task2 (years){
// const result = [];
// for(const book of books){
//     if(book.year > years){
//         result.push(book)~'
//     }
// }  return result;
// }

// const x2 = task2(1900);
// console.table(x2);

// 1. Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.


// function task3(author){
//     const result = [];
//     for(const book of books){
//         if(book.author === author){
//             result.push(book)
//         }
//     } return result;
// }

// const x3 = task3('Arthur Conan Doyle');
// console.log(x3);

// 1. Знайти всі книги з ціною меншою ніж 10 доларів.

// function task4(prices){
//   const result = [];
//   for(const book of books){
//     if(book.price < prices){
//       result.push(book)
//     }
//   } return result;
// }

// const x4 = task4(10);
// console.log(x4);

// 1. Знайти всі книги з рейтингом 4.8 і вище.
 
// function task5(ratinge){
//   const result = [];
//   for(const book of books){
//     if(book.rating >= ratinge ){
//       result.push(book)
//     }
//   } return result;
// } 
// const x5 = task5(4.8);
// console.log(x5);

// 1. Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.


// function task6(string, number){
//   const result = [];
//   for( const book of books){
//     if(book.genre === string && book.price < number){
//       result.push(book)
//     }
//   } return result;
// }
// const x6 = task6('Romance', 8);
// console.log(x6);

// 1. Знайти всі книги, видані до 1900 року.


// function task7(years){
//   const result = [];
//   for(const book of books){
// if(book.year < years){
//   result.push(book)
// }
//   } return result;
// }

// const x7 = task7(1990);
// console.log(x7);

// 1. Знайти всі книги, що містять слово 'and' у назві.



// function task8(string){
//   const result = [];
//   for(const book of books){
// if(book.title.toLowerCase().includes(string)){
//   result.push(book)
// }
//   } return result;
// }

// const x8 = task8('and');
// console.log(x8);


// 1. Знайти всі книги, автором яких є 'J.R.R. Tolkien'.

// function task9(string){
//   const result = [];
//   for( const book of books){
//     if(book.author === string){
//       result.push(book)
//     }
//   } return result;
// } 

// const x9 = task9('J.R.R. Tolkien');

// console.log(x9);

// 1. Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.


// function task10(string, number){
//   const result = [];
//   for(const book of books){
//     if(book.genre === string && book.rating > number){
//       result.push(book)
//     }
//   } return result;
// }

// const x10 = task10('Historical', 4.7);
// console.log(x10);
// ---

// 1. Знайти першу книгу жанру 'Fantasy'.


// function task11(string){
//   for(const book of books){
// if (book.genre.toLowerCase() === string.toLowerCase()){
// return book;
// }
//   } return null;
// }

// const x11 = task11('fantasy');
// console.log(x11);
        /////////////////////
// 1. Знайти першу книгу, видану після 2000 року.


// function task22(number){
// for(const book of books){
//   if(book.year > number){
// return book;
//   }
// }
// return null;
// }

// const x22 = task22(-2000);
// console.log(x22);

///////////////

// 1. Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.
// 1. Знайти першу книгу з ціною меншою ніж 10 доларів.

       ///////////////////


// 1. Знайти першу книгу з рейтингом 4.8 і вище.

// function task4(rating){
//     for(const book of books){
//        if(book.rating >= rating){
//         return book;
//        }
//     }
// }
// const x4 = task4(4.8);
// console.log(x4);


// 1. Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.

// function task5(string, number){
//     for(const book of books){
// if(book.genre === string && book.price < number){
//     return book;
// }
//     }
// }
// const x5 = task5('Romance', 8);
// console.log(x5);

// 1. Знайти першу книгу, видану до 1900 року.
// 1. Знайти першу книгу, що містить слово 'and' у назві.


// function task6(){
//     for(const book of books){
//         if(book.title.includes('and')){
//             return book;
//         }
//     }
// }
// const x6 = task6();
// console.log(x6);



// 1. Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// 1. Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

// ---

// 1. Чи є в масиві хоча б одна книга жанру 'Fantasy'?

// function task12(){
//   for(const book of books){
//     if(book.genre === 'Fantasy'){
//       return true;
//     }
//   }
//   return false;
// }
// console.log(task12());

// 1. Чи є в масиві хоча б одна книга, видана після 2000 року?

// function task13(){
//   for(const book of books){
//     if(book.year > 2000){
//       return true;
//     }
//   }
//   return false;
// }

// console.log(task13());


// 1. Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?

// function task14(){
//   for(const book of books){
//     if(book.author ===  'Fyodor Dostoevsky'){
//       return true;
//     }   
//   }
//   return false;
// }
// console.log(task14());


// 1. Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?
// 1. Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?
// 1. Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?
// 1. Чи є в масиві хоча б одна книга, видана до 1900 року?
// 1. Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?
// 1. Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?
// 1. Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

// ---

// 1. Чи всі книги в масиві мають рейтинг 4.5 і вище?

// function task15(){
//   for(const book of books ){
//     if(book.rating < 4.5 ){
//       return false;
//     }
//   }
//   return true;
// } 

// console.log(task15());


// 1. Чи всі книги в масиві коштують менше 20 доларів?

// function task13(price){
// for(const book of books){
//   if(book.price > price){
//     return false;
//   }
// }
// return true;
// }

// console.log(task13(20));

// 1. Чи всі книги в масиві видані після 1950 року?

// function task14(){
//   for(const book of books){
// if( book.year < 1950)
//   {
//   return false;
// }
//   }
//   return true;
// } 
// console.log(task14());

// 1. Чи всі книги в масиві є жанру 'Fiction'?


// 1. Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function task16(string){
//   for(const book of books){
//    if(!book.author.toLowerCase().startsWith(string.toLowerCase())){
// return false;
//    }
//   }
//   return true;
// }
// console.log(task16('J'));

// 1. Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// 1. Чи всі книги в масиві видані до 2000 року?
// 1. Чи всі книги в масиві мають слово 'the' у назві?

// function task15(){
//   for(const book of books){
// if(!book.title.toLowerCase().includes('the')){
// return false;
// }
//   }
//   return true;
// }
// console.log(task15());
// 1. Чи всі книги в масиві мають рейтинг вище 4.0?
// 1. Чи всі книги в масиві є жанру 'Adventure'?

// ---

// 1. Отримати масив назв всіх книжок.


// function task7(){
//     const array = [];
//     for(const book of books){
//         array.push(book.title)
//     }
//     return array;
// }
// const x7 = task7();
// console.log(x7);


// 1. Отримати масив авторів всіх книжок.
// 1. Створити масив об'єктів, які містять лише назву та автора кожної книжки.

// function task8(){
//     const array = [];
//     for(const book of books){
//         const newBooks = {
//             title:book.title,
//             author:book.author
//         };
//          array.push(newBooks);
//     } return array;
// }

// const x8 = task8();
// console.log(x8);


// 1. Створити масив цін всіх книжок з подвоєною вартістю.

  // function task9(){
//   const array = [];
//   for(const book of books ){
//     const newBooks = {
//       price:book.price * 2
//     };
//     array.push(newBooks);
//   } return array;
// }

// const x9 = task9();
// console.log(x9);
// 1. Створити масив років видання всіх книжок з доданими 5 роками до кожного.

// function task10(){
//   const result = [];
//   for(const book of books){
// const newBooks = {
//   year:book.year + 5 };
//   result.push(newBooks);
//   } return result;
// }

// const x10 = task10();
// console.log(x10);


// 1. Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках
//    (помножений на 10).

// function task11(){
//   const result = [];
//   for(const book of books){
//     const newBooks = {
//       title:book.title,
//       rating:book.rating * 10 + "%"
//     }; 
//     result.push(newBooks); 
//   } return result;
// }

// const x11 = task11();
// console.log(x11);


// 1. Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

// function task12(){
//   const result = [];
//   for(const book of books){
//     result.push({
//       ...book,
//       title:book.title.toUpperCase()
//     }); 

// } return result;
// }
// const x12 = task12();
// console.log(x12);

// 1. Створити масив рядків, що містять інформацію про кожну книжку в форматі
//    "назва - автор".


// function task13(){
//   const array = [];
//   for(const book of books){
// const bookInfo = `${book.title} - ${book.author}`;
// array.push(bookInfo);
  
// } 
//   return array;
// }
// const x13 = task13();
// console.log(x13);


// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `discountPrice`,
//    що дорівнює ціні зі знижкою 10%.


// function task22(){
//   const arr = [];
//   for( const book of books){
//     arr.push({
//       ...book,
//       discountPrice:book.price * 0.9
//     });
//     }
//     return arr;
//   }

//   const discountedBooks = task22();
//   console.log(discountedBooks);

// 1. Створити масив об'єктів, що містять назву книжки та її ціну з доданим
//    податком 15%.


// function task33(){
//   const array = [];
//   for( const book of books){
// array.push({
//   title:book.title,
//   price:book.price * 1.15
// });
//   } 
//   return array;
// }

// const newBooks = task33();
// console.log(newBooks);

// 1. Створити масив назв книжок, які видані після 2000 року.
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `isClassic`, що
//    дорівнює `true`, якщо книжка видана до 1950 року.
// 1. Отримати масив жанрів всіх книжок у верхньому регістрі.
// 1. Створити масив назв книжок, де всі слова в назві починаються з великої
//    літери.
// 1. Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
// 1. Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар =
//    0.85 євро).
// 1. Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `shortTitle`, що
//    містить тільки перше слово з назви.
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `description`,
//    що містить рядок "Ця книга від автора [author] була видана у [year] році".
// 1. Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр
//    записаний у нижньому регістрі.

// ---



// 1. Відсортувати книги за роком видання від найдавнішого до найновішого.
// 1. Відсортувати книги за ціною від найнижчої до найвищої.
// 1. Відсортувати книги за рейтингом від найнижчого до найвищого.
// 1. Відсортувати книги за назвою у алфавітному порядку (від А до Я).
// 1. Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).
// 1. Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за
//    назвою у зворотньому алфавітному порядку.
// 1. Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою
//    назвою за автором у зворотньому алфавітному порядку.
// 1. Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше
//    10 доларів, потім решту.
// 1. Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають
//    рейтинг 4.8 і вище, потім решту.
// 1. Відсортувати книги спочатку за жанром, а потім за роком видання.

// ---

// 1. Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом
//    від найвищого до найнижчого, повернути лише назви.
// 1. Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за
//    роком видання від найдавнішого до найновішого та вивести перші 5 книг.
// 1. Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною
//    від найнижчої до найвищої та вивести назви книг.
// 1. Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у
//    зворотньому алфавітному порядку та вивести авторів унікальних книг.
// 1. Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та
//    відсортувати їх за рейтингом від найвищого до найнижчого.
// 1. Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від
//    найвищого до найнижчого та вивести першу книгу.
// 1. Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком
//    видання від найдавнішого до найновішого та вивести останню книгу.
// 1. Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за
//    рейтингом від найвищого до найнижчого та вивести середній рейтинг.
// 1. Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх
//    за роком видання від найдавнішого до найновішого та вивести останні 3 книги.