const formElem = document.querySelector(".js-form");
const infoElem = document.querySelector(".js-items");
const filterInput = document.querySelector(".js-filter");

const arrForm = [];

formElem.addEventListener("submit", handelFormInfo);

function handelFormInfo(e) {
  e.preventDefault();

  const dataForm = {
    id: Date.now(),
    area: formElem.elements["area"].value,
    room: formElem.elements["room"].value,
    floor: formElem.elements["floor"].value,
    price: formElem.elements["price"].value,
    address: formElem.elements["address"].value,
    phone: formElem.elements["phone"].value,
  };

  const markupForm = createFormInfo(dataForm);
  infoElem.insertAdjacentHTML("beforeend", markupForm);

  arrForm.push(dataForm);

  formElem.reset();
}

function createFormInfo(data) {
  return `<li class="box item hight" data-id="${data.id}">
<h3>${data.address} </h3>

<p>price: ${data.price}</p>
<p> ${data.phone}</p>
<button class="button">Show More</button>
 </li>
      `;
}

/////////////////////////////////////////////

// filterInput.addEventListener('input', handelFilter);

//  function handelFilter(e){
// const serch = filterInput.value

// const markup = arrForm.filter((item)=>{
//     return item.address.includes(serch)
// }).map(createFormInfo).join(" ");

// infoElem.innerHTML = markup;
// }

// filterInput.addEventListener('input', handlelFilterInput);

// function handlelFilterInput(e){
// const searchPrice = filterInput.value

// const markup = arrForm.filter((i)=>{
//     return i.price === +searchPrice}).map(createFormInfo).join(" ");

//     infoElem.innerHTML = markup;

// }

infoElem.addEventListener("click", handelClickButton);

function handelClickButton(e) {
  if (e.target.textContent !== "Show More") {
    return;
  }

  const eElemLi = e.target.closest(".item");
  const id = eElemLi.dataset.id;
  const muElem = arrForm.find((obj) => {
    return obj.id === +id;
  });

//   console.log(muElem);
}
