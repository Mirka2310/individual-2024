const form = document.querySelector('.js-form');
const itemsContainer = document.querySelector('.js-items');

const newCart = [];
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    
    const data = {
        title: form.elements['input-value'].value,
        image: form.elements['image'].value,
        description: form.elements['description'].value,
        priority: form.elements['priority'].value
    };

    const markup = createCart(data);
    itemsContainer.insertAdjacentHTML("beforeend", markup);
    newCart.push(data);

 
    const lastItem = itemsContainer.lastElementChild;
    handleCartAction(lastItem);

    form.reset();
}


function handleCartAction(cart) {
    cart.querySelector('[data-type="delete"]').addEventListener('click', () => {
        cart.remove();
    });

    cart.querySelector('[data-type="show"]').addEventListener('click', () => {
        alert(cart.querySelector("p").textContent);
    });
}


function createCart(dataForm) {
    return `
      <li class="box item hight">
        <h3>${dataForm.title}</h3>
        <h5>${dataForm.priority.toUpperCase()}</h5>
        <div class="fb">
          <p class="item-desc">${dataForm.description}</p>
          <img src="${dataForm.image}" alt="Image" />
        </div>
        <button class="form-control" data-type="show">SHOW MORE</button>
        <button class="form-control" data-type="delete">DELETE</button>
      </li>`;
}
