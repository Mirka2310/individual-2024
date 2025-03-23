const jsForm = document.querySelector('.js-form');
const jsItemUl = document.querySelector('.js-items');


jsForm.addEventListener('submit', handelFormElem);


jsItemUl.addEventListener('click', handelNewForm);

function handelNewForm(e){
if(e.target.nodeName !== "BUTTON"){
    return;
}

const elemLi = e.target.closest('li');
const color = e.target.dataset.type;

elemLi.style.backgroundColor = color;
console.log(e.target.dataset.type);
}



function handelFormElem(e){
    e.preventDefault();



    const marcup = createMarcup();
    jsItemUl.insertAdjacentHTML('beforeend', marcup);
}


function createMarcup(){
    return `<li class="box item hight">
            <button class="form-control" data-type="blue">BLUE</button>
            <button class="form-control" data-type="red">RED</button>
            <button class="form-control" data-type="green">GREEN</button>
          </li>`
}