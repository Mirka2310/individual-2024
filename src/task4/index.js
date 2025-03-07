const formElem = document.querySelector('.js-form');
const infoElem = document.querySelector('.js-items');


formElem.addEventListener('submit', handelFormInfo);


function handelFormInfo(e){
e.preventDefault();



const dataForm = {
area:formElem.elements['area'].value,
room:formElem.elements['room'].value,
floor:formElem.elements['floor'].value,
price:formElem.elements['price'].value,
address:formElem.elements['address'].value,
phone:formElem.elements['phone'].value
}

const markupForm = createFormInfo(dataForm);
infoElem.insertAdjacentHTML('beforeend', markupForm);

formElem.reset();

}




function createFormInfo(data){
return `<li class="box item hight">
<h3>${data.address} </h3>
<p> rooms: ${data.room}</p>
<p> floor: ${data.floor}</p>
<p> area: ${data.area}</p>
<p>price: ${data.price}</p>
<p> ${data.phone}</p>
<button class="form-control" data-type="delete">DELETE</button>
 </li>
      `
}

//////////////////////////////////////////////////////////////////////

infoElem.addEventListener('click', handelElemClick);

function handelElemClick(e){
if(e.target.dataset.type !== "delete"){
      return;
}
const eElemLi = e.target.closest('.item');
eElemLi.remove();
}





