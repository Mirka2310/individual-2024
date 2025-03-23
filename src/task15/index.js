const jsForm = document.querySelector('.js-form');
const jsUl = document.querySelector('.js-items');

jsForm.addEventListener('submit', handelFormSubmit);

function handelFormSubmit(e) {
    e.preventDefault();

    const user = {
        name: jsForm.elements['one1'].value,
        firstName: jsForm.elements['one2'].value,
        lastName:jsForm.elements['one3'].value,
        secondName:jsForm.elements['one4'].value
    }



   const marcup = createMarcup(user);
   jsUl.insertAdjacentHTML('beforeend', marcup);
}


function createMarcup(user){

    return `<li class="box item hight">
            <h3 class="">${user.name}</h3>
            <h4 class="">${user.firstName}</h4>
            <h4 class="">${user.lastName}</h4>
            <h5 class="">${user.secondName}</h5>
            <button class="form-control" data-type ="show">Change Color</button>
         
          </li>`
}

jsUl.addEventListener('click', handelElClick);


function handelElClick(e){
if(e.target.dataset.type !== "show"){
    return;
}
const liElem = e.target.closest('li');
liElem.classList.toggle('hight');


    console.log("hello");
}





// Завдання 5: Динамічна зміна стилю
//  Додати випадаючий список <select> із кольорами.
//  При виборі кольору всі елементи списку змінюють колір фону на вибраний.


// Додай <select> у форму.
// Відстежуй подію change на <select>.
// Міняй backgroundColor у всіх <li> через querySelectorAll.
