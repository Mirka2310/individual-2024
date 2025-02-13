const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian',
    price: 8.99,
    rating: 4.8,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Classic',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Romance',
    price: 5.99,
    rating: 4.9,
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    price: 12.99,
    rating: 4.8,
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    price: 9.99,
    rating: 4.5,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    year: 1869,
    genre: 'Historical',
    price: 14.99,
    rating: 4.9,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    year: 1866,
    genre: 'Philosophical',
    price: 11.99,
    rating: 4.8,
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    year: 1880,
    genre: 'Philosophical',
    price: 13.99,
    rating: 4.9,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    genre: 'Dystopian',
    price: 9.99,
    rating: 4.7,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    year: 1847,
    genre: 'Romance',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    year: 1847,
    genre: 'Romance',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    year: 1890,
    genre: 'Gothic',
    price: 6.99,
    rating: 4.6,
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    year: 1818,
    genre: 'Science Fiction',
    price: 7.99,
    rating: 4.7,
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker',
    year: 1897,
    genre: 'Horror',
    price: 6.99,
    rating: 4.5,
  },
  {
    title: 'The Odyssey',
    author: 'Homer',
    year: -800,
    genre: 'Epic',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Iliad',
    author: 'Homer',
    year: -750,
    genre: 'Epic',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Les Misérables',
    author: 'Victor Hugo',
    year: 1862,
    genre: 'Historical',
    price: 11.99,
    rating: 4.9,
  },
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    year: 1844,
    genre: 'Adventure',
    price: 12.99,
    rating: 4.9,
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    year: 1939,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    year: 1937,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.6,
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    year: 1859,
    genre: 'Historical',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'Great Expectations',
    author: 'Charles Dickens',
    year: 1861,
    genre: 'Fiction',
    price: 8.99,
    rating: 4.7,
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    year: 1911,
    genre: 'Children',
    price: 6.99,
    rating: 4.7,
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott',
    year: 1868,
    genre: 'Fiction',
    price: 7.99,
    rating: 4.8,
  },
  {
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    year: 1877,
    genre: 'Romance',
    price: 10.99,
    rating: 4.9,
  },
  {
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    year: 1892,
    genre: 'Mystery',
    price: 9.99,
    rating: 4.8,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    price: 20.99,
    rating: 4.9,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    price: 10.99,
    rating: 4.8,
  },
];
//////////////////////////////////////////////////////////////////////////////
// find()- шукає і повертає один елемент
// filter() - шукає і повертає масив 
// map() - змінює і поветрає змінений масив
/// some() - перевіряє наявність одного елемента, повертає булеве значення  
///every() - перевіряє наявність кожного елемента повертає булеве значення

/////////////////////////////////////////////////////////////////////////////


// 1. Знайти всі книги жанру 'Fantasy'.

// function task1(arr){
//   const result = arr.filter((book,index,array)=>{
//     return book.genre === "Fantasy"
//   });
//    return result;
// }

// console.table(task1(books));

// 1. Знайти всі книги, видані після 2000 року.


// function task2(arr){

//   const result = arr.filter(book => book.year > 1000);

// return result;
// }

// console.table(task2(books));


// 1. Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.

// function task3(arr){
// const result = arr.filter(book => book.author === "F");
// return result;
// }
// // 1. Знайти всі книги з ціною меншою ніж 10 доларів.

// function task4(arr){
//   const result = arr.find(book => book.price < 10);
//   return result;
// }
// // 1. Знайти всі книги з рейтингом 4.8 і вище.

// function task5(arr, number){
//   const result = arr.filter(book => book.rating > number);
//   return result;
// }
// // 1. Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.

// function task6(arr){
//   const result = arr.filter(book => {
//     const x = book.genre === "Romance";
//     const y = book.price < 8;
//     return x && y;
//   })
//   return result;
// }
// 1. Знайти всі книги, видані до 1900 року.



// function task22(arr){
// const result = arr.filter((book)=> book.year < 1900);
// return result;
// }
// console.table(task22(books));

// 1. Знайти всі книги, що містять слово 'and' у назві.

// function task23(arr){
// const result = arr.filter((book)=> book.title.toLowerCase().includes('and'));
// return result;
// }

// console.table(task23(books));

// 1. Знайти всі книги, автором яких є 'J.R.R. Tolkien'.

// function task24(arr){
//   const result = arr.filter((book) => book.author === 'J.R.R. Tolkien');
//   return result;
// } 

// console.table(task24(books));
// 1. Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.



// function task25(arr, genreAll, ratingAll){
//   const result = arr.filter((book)=>{
// const genres = book.genre === genreAll;
// const ratings = book.rating > ratingAll;
// return genres && ratings;
//   })
//   return result;
// }
// console.table(task25(books, 'Historical', 4.7));
// ---
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Знайти першу книгу жанру 'Fantasy'.


// function task7(arr, genres){
//   const result = arr.find(book => book.genre === genres)
//   return result;
// }


// 1. Знайти першу книгу, видану після 2000 року.

// function task25(arr){
//   const result = arr.find(book=> book.year > 1900)
//   return result;
// }
// console.table(task25(books));


// 1. Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.




//function task1(arr){
//const result = arr.find((book)=> book.author === 'Fyodor Dostoevsky')
//return result;
//}

//console.log(task1(books));

// 1. Знайти першу книгу з ціною меншою ніж 10 доларів.

//function task2(arr){
  //const result = arr.find((book)=>book.price < 10)
  //return result;
//}

//console.log(task2(books));


// 1. Знайти першу книгу з рейтингом 4.8 і вище.

//function task3(arr){
  //const result = arr.find((book) => book.rating >= 4.8)
 // return result;
//}
// console.log(task3(books));


// 1. Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.

// function task8(arr){
//   const result = arr.find(book => {
//     const z = book.genre === "Romase";
//     const v = book.price < 8;
//     return z && v;
//   })
// //   return result;
// }
// 1. Знайти першу книгу, видану до 1900 року.


//function task5(arr){
  //const result = arr.find((book) => book.year < 1900)
  //return result;
//}

//console.log(task5(books));

// 1. Знайти першу книгу, що містить слово 'and' у назві. ???????????????????????????????????///



//function task6(arr){
//const result = arr.find((book) => book.title.includes('and'))
//return result;
//}

//console.log(task6(books));

// 1. Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.



//function task7(arr){
  //const result = arr.find((book)=> book.author === 'J.R.R. Tolkien')
  //return result;
//}

//console.log(task7(books));

// 1. Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.

//function task8(arr){
  //const result = arr.find((book)=> book.genre === 'Historical' && book.rating > 4.7)
  //return result;
//}

//console.log(task8(books));


///////////////////////////////////////////////////////////////////////////////////////////////////// ---

// 1. Чи є в масиві хоча б одна книга жанру 'Fantasy'?

// function task9(arr, str){
// return arr.some((book)=> book.genre === str);

// } 
// console.log(task9(books,'Fantasy'));


// 1. Чи є в масиві хоча б одна книга, видана після 2000 року?


// function task1(arr, years){
//   return arr.some((book)=> book.year > years);
// }
// console.log(task1(books));

// 1. Чи є в масиві хоча б одна книга, автором якої є 'Fyodor Dostoevsky'?


// function task2(arr){
//   return arr.some((book)=> book.author === 'Fyodor Dostoevsky');
// }
// console.log(task2(books));

// 1. Чи є в масиві хоча б одна книга з ціною меншою ніж 10 доларів?


// function task3(arr){
//   return arr.some((book)=>book.price < 10);

// }

// console.log(task3(books));

// 1. Чи є в масиві хоча б одна книга з рейтингом 4.8 і вище?

// function task4(arr){
//   return arr.some((book)=> book.rating >= 4.8);
// }
// console.log(task4(books));


// 1. Чи є в масиві хоча б одна книга жанру 'Romance' з ціною меншою ніж 8 доларів?

// function task10(arr){
// return arr.some((book)=> book.genre === 'Romance' && book.price < 8 );
// }
// console.log(task10(books));

// 1. Чи є в масиві хоча б одна книга, видана до 1900 року?

// function task5(arr){
// return arr.some((book)=> book.year < 1900);
// }

// console.log(task5(books));

// 1. Чи є в масиві хоча б одна книга, що містить слово 'and' у назві?

// function task6(arr){
//   return arr.some((book)=> book.title.includes('and'));
// }

// console.log(task6(books));
// 1. Чи є в масиві хоча б одна книга, автором якої є 'J.R.R. Tolkien'?


// function task7(arr){
//   return arr.some((book)=> book.author === 'J.R.R. Tolkien');
// }

// console.log(task7(books));

// 1. Чи є в масиві хоча б одна книга жанру 'Historical' з рейтингом вище 4.7?

// function task8(arr){
// return arr.some((book)=> book.genre === 'Historical' && book.rating > 4.7);

// }

// console.log(task8(books));


/////////////////////////////////////////////////////////////////////////////////////////////////////////// ---

// 1. Чи всі книги в масиві мають рейтинг 4.5 і вище?


// function task1(arr){
// return arr.every(book => book.rating >= 4.5);
 
// }

// console.log(task1(books));

// 1. Чи всі книги в масиві коштують менше 20 доларів?

// function task1(arr){
// return arr.every((book)=> book.price < 20);

// }
// console.log(task1(books));

// 1. Чи всі книги в масиві видані після 1950 року?

// function task2(arr){
//   return arr.every((book)=> book.year > 1950);
// }

// console.log(task2(books));

// 1. Чи всі книги в масиві є жанру 'Fiction'?

// function task3(arr, str ){
//   return arr.every((book)=> book.genre === str);
// }

// console.log(task3(books, 'Fiction'));


// 1. Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?

// function task4(arr){
//   return arr.every(book=> book.author.startsWith('J'));
// }

// console.log(task4(books));

// 1. Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів? 

// function task2(arr){
//   return arr.every(book => book.genre === 'Romance' && book.price < 15);
// }
// console.log(task2(books));

// 1. Чи всі книги в масиві жанру 'Romance' з ціною меншою ніж 15 доларів? 

// function task2(arr){
//   const romanceBooks = arr.filter(book => book.genre === 'Romance');
//   return romanceBooks.every(book => book.price < 15);
// }
// console.log(task2(books));

// 1. Чи всі книги в масиві видані до 2000 року?


// function task5(arr){
//   return arr.every(book => book.year < 2000);
// }

// console.log(task5(books));

// 1. Чи всі книги в масиві мають слово 'the' у назві?

// function task6(arr){
//   return arr.every( book => book.title.toLowerCase().includes('the'));
// }

// console.log(task6(books));

// 1. Чи всі книги в масиві мають рейтинг вище 4.0?


// function task7(arr, num){
//   return arr.every(book => book.rating > num);
// }

// console.log(task7(books, 4.0));

// 1. Чи всі книги в масиві є жанру 'Adventure'?

// function task8(arr){
//   return arr.every(book => book.genre === 'Adventure' );
// }

// console.log(task8(books));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////// ---


// 1. Отримати масив жанрів всіх книжок у верхньому регістрі. >>>>>>>>>>>>>>>>>>>>>>

// function task99(arr){
// const result = arr.map(book => {
//   return book.genre.toUpperCase();
// })
// return result;
// }

// console.table(task99(books));

// 1. Отримати масив назв всіх книжок.

// function task10(arr){
// const result = arr.map(book => {
//   return book.title;
// })
// return result;
// }
// // 1. Отримати масив авторів всіх книжок.

// function task11(arr){
//   const result = arr.map(book => book.author);
//   return result;
// }
// // 1. Створити масив об'єктів, які містять лише назву та автора кожної книжки.

// function task12(arr){
// const result = arr.map((book, i) =>{
//   return {title:book.title,
//    author:book.author,
//    index: i
//   }
// });
//  return result;
// } console.table(task12(books));

// 1. Створити масив цін всіх книжок з подвоєною вартістю.



// function task13(arr){
// const result = arr.map(book => book.price * 2
 
// );
// return result;
// }
// 1. Створити масив років видання всіх книжок з доданими 5 роками до кожного.


// function task14(arr){
//   const result = arr.map(book => book.year + 5);
// return result;
  
// }
// // 1. Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках
// //    (помножений на 10).

// function task15(arr){
//   const result = arr.map(book => {
//     const myBook = {title:book.title,
//       rating:book.rating * 10
//     };
//     return myBook;
//   })
//    return result;
// }
// 1. Створити масив об'єктів, де назва книжки буде в верхньому регістрі.

// function task16(arr){
// const result = arr.map(book => {
//   const copy = {...book}
//   copy.title = book.title.toUpperCase();
//   return copy;
// });
// return result;
// }
// 1. Створити масив рядків, що містять інформацію про кожну книжку в форматі
//    "назва - автор".


// function task17(arr){
//   const result = arr.map(book => {
//     const string = `${book.title} - ${book.author}`;
//     return string;
//   });
//   return result;
// }
// console.log(task17(books));
// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `discountPrice`,
//    що дорівнює ціні зі знижкою 10%.


// function task18(arr){
//   const result = arr.map(book => {
//     const newObject = {
//       ...book,
//       discountPrice:book.price * 0.9
//     }; 
//     return newObject;
//   });
//   return result;
// }
// console.table(task18(books));


// 1. Створити масив об'єктів, що містять назву книжки та її ціну з доданим
//    податком 15%.


// function task19(arr){
// const result = arr.map((book)=>{
//   const newObj = {
//     title:book.title,
//     price:(book.price * 1.15).toFixed(2) 
//   };
//   return newObj;
// });
// return result;
// }

// console.table(task19(books));

// 1. Створити масив назв книжок, які видані після 2000 року.


// function task1(arr){
// const result = arr.filter((book)=> book.year > 1000).map((book)=> book.title);
// return result;
// }
// console.table(task1(books));


// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `isClassic`, що
//    дорівнює `true`, якщо книжка видана до 1950 року.


// function task2(arr, newYears){
//   const result = arr.map((book)=>{
//     const copy = {...book,
//       isClassic: book.year < newYears
     
//     };
//      return copy;
//   }); 
//   return result;
// }

// console.table(task2(books, 1950)); 



// 1. Створити масив назв книжок, де всі слова в назві починаються з великої
//    літери.

// function task3(arr){
//   const result = arr.map((book)=> book.title.split(" ").map((string)=>{
//     const firstLetter = string[0].toUpperCase();
//     const word = string.slice(1).toLowerCase();
//     return firstLetter + word;
//   }).join(" "));
//   return result;
// }

// console.log(task3(books));


// 1. Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.


// function task1(arr){
//   const result = arr.map((book)=> {
//     const newObj = {
//       author:book.author,
//       year: book.year
//     }
//     return newObj;
//   });
//   return result;
// }

// console.log(task1(books));

// 1. Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар =
//    0.85 євро).

// function task2(arr){
//   const result = arr.map((book) => (book.price * 0.85).toFixed(2));
//   return result;
// }

// console.table(task2(books));


// 1. Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".


// function task3(arr){
//   const result = arr.map((book)=> `${book.title} (Special Edition)`);
//   return result;
// }

// console.table(task3(books));

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `shortTitle`, що
//    містить тільки перше слово з назви.


// function task4(arr){
//   const result = arr.map((book)=> {
//    const copy = {
//     ...book,
//     shortTitle:book.title.split(" ")[0]
//    }
//    return copy;
//   });
//   return result;
// }
// console.table(task4(books));

// 1. Створити масив об'єктів, де кожна книжка буде мати нове поле `description`,
//    що містить рядок "Ця книга від автора [author] була видана у [year] році".



// function task5(arr){
//   const result = arr.map((book)=> {
//     const copy = {
//       ...book,
//       description:`Ця книга від автора ${book.author} була видана у ${book.year} році.`
//     }
//     return copy;
//   })
//   return result;
// }

// console.log(task5(books));

// 1. Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр
//    записаний у нижньому регістрі.

// function task6(arr){
//   return arr.map (book => ({
//     title: book.title, 
//     genre: book.genre.toLowerCase()
//   }));
// }
// console.log(task6(books));


//////////////////////////////////////////////////////////////////////////////////////////
// books.toSorted((book1, book2)=>{
//   return book1.year - book2.year
// })



// 1. Відсортувати книги за роком видання від найдавнішого до найновішого.


// function task4(arr){
// const result = arr.toSorted((book1, book2)=>{
//     return book1.year - book2.year
//    });
//    return result;
// }

// console.table(task4(books));

// 1. Відсортувати книги за ціною від найнижчої до найвищої.

// function task5(arr){
//   const result = arr.toSorted((book2, book1)=>{
//     return book1.price - book2.price
//   });
//   return result;
// }

// console.table(task5(books));

// 1. Відсортувати книги за рейтингом від найнижчого до найвищого.


// function task6(arr){
//   const result = arr.toSorted((book1, book2)=>{
// return book1.rating - book2.rating
//   });
//   return result;
// }

// console.table(task6(books));

// 1. Відсортувати книги за назвою у алфавітному порядку (від А до Я).



// function task7(arr){
//   const result = arr.toSorted((book1, book2) =>{
// return book1.title.localeCompare(book2.title)
//   });
//   return result;
// }
// console.table(task7(books));

// 1. Відсортувати книги за автором у зворотньому алфавітному порядку (від Z до A).


// function task8(arr){
// const result = arr.toSorted((book2, book1)=>{
// return book1.author.localeCompare(book2.author)
// });
// return result;
// }
// console.table(task8(books));


// const str1 = "b";
// const str2 = "a";
// console.log(str1.localeCompare(str2));

// 1. Відсортувати книги за назвою у алфавітному порядку, але книги з однаковою
//    назвою за автором у зворотньому алфавітному порядку.


// function task8(arr){
//   return arr.toSorted((book1, book2)=> {
// const titleCompare = book1.title.localeCompare(book2.title);
// if(titleCompare !== 0 ){
//   return titleCompare;
// }
// return book2.author.localeCompare(book1.author);
//   });
// }
// const sortedBooks = task8(books);
// console.table(sortedBooks);



// 1. Відсортувати книги за жанром у алфавітному порядку, але книги одного жанру за
//    назвою у зворотньому алфавітному порядку.
// 1. Відсортувати книги за ціною, але спочатку розташувати ті, які коштують менше
//    10 доларів, потім решту.
// 1. Відсортувати книги за рейтингом, але спочатку розташувати ті, які мають
//    рейтинг 4.8 і вище, потім решту.
// 1. Відсортувати книги спочатку за жанром, а потім за роком видання.



// 1. Отримати всі книги, видані після 2000 року та відсортувати їх за рейтингом
//    від найвищого до найнижчого, повернути лише назви.


// function task8(arr){
//   const result = arr.filter((book)=> book.year > 1500).toSorted((book1, book2)=> book1.rating - book2.rating).map((book)=> book.title)
//   return result;
// }
// console.table(task8(books));
// 1. Отримати всі книги, автором яких є 'Fyodor Dostoevsky', відсортувати їх за
//    роком видання від найдавнішого до найновішого та вивести перші 5 книг.


// function task9(arr){
//   const result = arr.filter((book)=> book.author === 'Fyodor Dostoevsky').toSorted((book1,book2)=> book1.year - book2.year).slice(0,5)
//   return result;
// }
// console.table(task9(books));
// 1. Отримати всі книги з ціною меншою ніж 10 доларів, відсортувати їх за ціною
//    від найнижчої до найвищої та вивести назви книг.

// function task10(arr){
//   const result = arr.filter((book)=> book.price < 10).toSorted((book1, book2) => book1.price - book2.price).map((book)=>book.title)
//   return result;
// }
// console.table(task10(books));

// 1. Отримати всі книги з рейтингом 4.8 і вище, відсортувати їх за автором у
//    зворотньому алфавітному порядку та вивести авторів унікальних книг.

// function task10(arr){
//   const result = arr.filter((book)=> book.rating >= 4.8).map((book)=> book.author).filter((author, i, arr)=> {
// const indexAuthor = arr.indexOf(author);
// return indexAuthor === i
//   }).toSorted((author2, author1)=> author1.localeCompare(author2));
// return result;
// }
// console.table(task10(books));

// 1. Отримати всі книги жанру 'Romance' з ціною меншою ніж 8 доларів та
//    відсортувати їх за рейтингом від найвищого до найнижчого.


// function task11(arr){
//   const result = arr.filter((book)=> book.genre === 'Romance' && book.price < 8).toSorted((book1, book2)=> book1.rating - book2.rating)
//   return result; 
// }
// console.table(task11(books));


// 1. Отримати всі книги, видані до 1900 року, відсортувати їх за рейтингом від
//    найвищого до найнижчого та вивести першу книгу.

// function task12(arr){
//   const result = arr.filter((book)=> book.year < 1900).toSorted((book1, book2)=> book1.rating - book2.rating)[0]
//   return result;
// }
// console.table(task12(books));

// 1. Отримати всі книги, що містять слово 'and' у назві, відсортувати їх за роком
//    видання від найдавнішого до найновішого та вивести останню книгу. ?///////////////////

// function task3(arr){
//   const result = arr
//   .filter((book)=> book.title.toLowerCase().includes('and'))
//   .toSorted((book1, book2)=> book1.year - book2.year);
//   return result[result.length - 1];
// }
// console.table(task3(books));


// 1. Отримати всі книги, автором яких є 'J.R.R. Tolkien', відсортувати їх за
//    рейтингом від найвищого до найнижчого та вивести середній рейтинг. ////////////////////

// function task4(arr){
//   const result = arr.filter((book)=> book.author === 'J.R.R. Tolkien').toSorted((book1,book2)=> book2.rating - book1.rating);
//   const ratings = result.map((book)=> book.rating);
//   const averageRating = ratings.reduce((sum, rating) => sum + rating, 0 ) / ratings.length;
//   return averageRating;
// }

// console.table(task4(books));

// 1. Отримати всі книги жанру 'Historical' з рейтингом вище 4.7, відсортувати їх
//    за роком видання від найдавнішого до найновішого та вивести останні 3 книги.