const elemUl = document.querySelector(".js-items");

elemUl.addEventListener("click", handelElemClick);

// function handelElemClick(e){
// const elem = e.target

// // if(elem.textContent !== "DELETE"){
// // return;
// // }
// // if(elem.dataset.type !== "delete"){
// // return;
// // }

// // if(elem.nodeName !== "LI"){
// // return;
// // }
// // if(!elem.classList.contains("item")){
// // return;
// // }
// // console.log(elem.dataset.type)
// // console.log(elem.nodeName);
// // console.log(e.target.dataset);
// }

function handelElemClick(e) {
  if (e.target.dataset.type !== "delete") {
    return;
  }
 const liElem = e.target.closest('.item');
 liElem.remove();

}
