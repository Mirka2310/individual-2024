
const searchUl = document.querySelector('.js-items');


searchUl.addEventListener('click', handelEnterText);


function handelEnterText(e){

if(e.target.nodeName === 'LI'){
   const newText = prompt('Введіть текст', e.target.textContent);

   if(newText !== null && newText !== ''){
    e.target.textContent = newText;
    }
    
}


}











