

const formAuto = document.querySelector('.js-form');
const itemAutoContainer = document.querySelector('.js-items');


formAuto.addEventListener('submit', handleSubmit);


const newFormAuto = [];


function handleSubmit(e){
    e.preventDefault();


    const dataAuto = {
brand:formAuto.elements['js-form-car-brand'].value,
model:formAuto.elements['js-form-car-model'].value,
image:formAuto.elements['js-form-car-image'].value,
description:formAuto.elements['js-form-car-info'].value
    };

if(!dataAuto.brand || !dataAuto.model || !dataAuto.image || !dataAuto.description){
    alert ("Будь ласка, заповніть всі поля!");
    return;
}

const markup = createCartAuto(dataAuto);
itemAutoContainer.insertAdjacentHTML("beforeend", markup);
newFormAuto.push(dataAuto);
    


const  newCartAuto = itemAutoContainer.lastElementChild;
handleCartAction(newCartAuto);


formAuto.reset();
}





function createCartAuto(dataFormAuto){
return `<li class="box item hight">
            <h3>${dataFormAuto.brand}</h3>
            <h5>${dataFormAuto.model}</h5>
            <div class="fb">
              <p class="item-desc">
                ${dataFormAuto.description}
              </p>
              <img
                src="${dataFormAuto.image}"
                alt="Image"
                />
            </div>
            <div class="buttons">
                <button class="form-control" data-type="show">SHOW MORE</button>
                <button class="form-control" data-type="delete">DELETE</button>
              </div>
          </li> `;
}


function handleCartAction(card){
    const showMoreButton = card.querySelector('[data-type="show"]');
    showMoreButton.addEventListener('click', ()=> {
        alert(card.querySelector("p").textContent);
    });

    const deleteButton = card.querySelector('[data-type="delete"]');
    deleteButton.addEventListener('click', ()=>{
        card.remove();
    });
}