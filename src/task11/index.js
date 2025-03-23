const jsForm = document.querySelector('.js-form');
const jsUlItems = document.querySelector('.js-items');


jsForm.addEventListener('submit', handelFormSubmit);



function handelFormSubmit(e){
    e.preventDefault();



    const marcup = createMarcup();
    jsUlItems.insertAdjacentHTML('beforeend', marcup);
}



function createMarcup(){
    return `<li class="box item hight">
            <input type="color" />
           
            <button class="form-control" data-type="delete">DELETE</button>
          </li>`
}


jsUlItems.addEventListener('input', handelChangeColor);

function handelChangeColor(e){
    if(e.target.nodeName !== 'INPUT'){
        return;
    }
 const color = e.target.value;
 const newLi = e.target.closest('li');
 newLi.style.backgroundColor = color;

    console.log(e.target.value);
}