// console.log(document);
// console.log(document.body.textContent);
// document.body.textContent = "Hello";
// const muUl = document.body.querySelector(".js-list-1");
// muUl.textContent = "Hello world"
// muUl.style.color = "blue";
// muUl.style.fontSize = "24px";
// muUl.style.backgroundColor = "red";
// console.log(muUl);


// const muUl2 = document.body.querySelector(".js-list-2");
// console.log(muUl2);

// muUl2.children
// console.log(muUl2.children);
// for(const forLi of muUl2.children){
//     forLi.style.color = "red";
// }

// for(let i = 0; i < muUl2.children.length; i++ ){
//     muUl2.children[i].style.color = "green" 
//     muUl2.children[i].textContent = i + 1
// }


// const liElems = muUl2.querySelectorAll("li")
// console.log(liElems);


// const liArr = [...liElems]
// console.log(liArr);


// const muImage = document.querySelector('.js-input[name="image"]')
// console.log(muImage);

// muImage.value = "Hello world";
// muImage.remove()


const muul2 = document.querySelector('.js-list-2');
muul2.classList.add("listItems") 

const muUl1 = document.querySelector('.js-list-1');
muUl1.classList.add("low")


const muBox = document.querySelector('.js-tasks');

function gethello(name){
    return `<h1>Hello ${name}</h1>`
}
const str = gethello("Max");
muBox.insertAdjacentHTML('beforeend', str);

muBox.insertAdjacentHTML('afterbegin', gethello("Bohdan"));

/*
-textContent
-innerHTML
-style
-classList
-children
-value

-insertAjuncentHTML()
-querySelecor()
-quearySelectorAll()
*/                                            
