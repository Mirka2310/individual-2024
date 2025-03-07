const formElem = document.querySelector('.js-form');
const formUl = document.querySelector('.js-items');


formElem.addEventListener('submit', handleSubmitElem);



function handleSubmitElem(e){
    e.preventDefault();

    const formCondition = {
        condition:formElem.elements['condition'].value,
        result:formElem.elements['result'].value,
        class:formElem.elements['class'].value,
        date:formElem.elements['date'].value,
        color:formElem.elements['color'].value

    }

    console.log(formCondition);


    const markup = createMarkup(formCondition);
    formUl.insertAdjacentHTML('beforeend', markup);

    formElem.reset();
}




function createMarkup(data){
return `<li class="box item hight">
           <h2 style="color: ${data.color};"> ${data.class}-${data.date}</h2>      
            <p>${data.condition}</p>
            <p>${data.result}</p>
            
          </li>`
}