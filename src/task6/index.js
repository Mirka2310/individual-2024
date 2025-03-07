
const formElements = document.querySelector('.js-form');
const infoElements = document.querySelector('.js-items');
const filterInput = document.querySelector('.js-filter');



const arrFormBoxer = [];

formElements.addEventListener('submit', handleFormInfo);


function handleFormInfo(e){
e.preventDefault();



const formData = {
    name:formElements.elements['name'].value,
    firstName:formElements.elements['firstName'].value,
    year:formElements.elements['year'].value,
    country:formElements.elements['country'].value,
    title:formElements.elements['title'].value,
    age:formElements.elements['age'].value
}

const markupForm = createFormInfo(formData);
infoElements.insertAdjacentHTML('beforeend', markupForm);

arrFormBoxer.push(formData);
formElements.reset();


}

function createFormInfo(data){
return `<li class="box item hight">
            <h3> ${data.name}</h3>
            <h4>${data.firstName}</h4>
            <p>${data.title}</p>
            <p>${data.country}</p>
            <p>${data.year}</p>
            <p>${data.age}</p>
            </li>`
}


filterInput.addEventListener('input', handleFilterBoxer);


// function handleFilterBoxer(e){
// const serchBoxer = filterInput.value;



// const markup = arrFormBoxer.filter((item)=>{
// return item.firstName.toLowerCase().includes(serchBoxer)
// }).map(createFormInfo).join(" ");


// infoElements.innerHTML = markup;

// }

function handleFilterBoxer(e){
    const serchBoxer = filterInput.value;



    const markup = arrFormBoxer.filter((item)=>{
return item.age === +serchBoxer
    }).map(createFormInfo).join(" ");



    infoElements.innerHTML = markup;
}