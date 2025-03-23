const searchForm = document.querySelector('.js-form');
const searchUl = document.querySelector('.js-items')

searchForm.addEventListener('submit', handleFormSubmit);


 function handleFormSubmit(e){

e.preventDefault();

const formData = {
    userName:searchForm.elements['userName'].value,
    userLastName:searchForm.elements['userLastName'].value,
    userCity:searchForm.elements['userCity'].value,
    userCountry:searchForm.elements['userCountry'].value
}

const marcupForm = createMarcup(formData)
searchUl.insertAdjacentHTML('afterbegin', marcupForm);



}

function createMarcup(formData){
    return `<li class="box item hight">
          <h2>${formData.userName}</h2>
          <h2>${formData.userLastName}</h2>
          <h4>${formData.userCity}</h4>
          <h4>${formData.userCountry}</h4>
          <button class="form-control" data-type="delete">DELETE</button>
          </li>
          `

}


searchUl.addEventListener('click', deleteFormElements);


function deleteFormElements(e){
if(e.target.dataset.type !== "delete"){
    return;
    
}


const parentLi = e.target.closest('li');
if(parentLi){
    parentLi.remove();
}


}