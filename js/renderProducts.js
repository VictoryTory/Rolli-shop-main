const productsContainer = document.querySelector('#products-container');
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const productCounter = document.querySelector('[data-counter]');

getProducts();
async function getProducts() {
   const response = await fetch('./js/products.json');

    const productsArray = await response.json();

    renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-6">
\t\t\t\t\t\t<div class="card mb-4" data-id="${item.id}">
\t\t\t\t\t\t\t<img class="product-img" src="img/roll/${item.imgSrc}" alt="">
\t\t\t\t\t\t\t<div class="card-body text-center">
\t\t\t\t\t\t\t\t<h4 class="item-title">${item.title}</h4>
\t\t\t\t\t\t\t\t<p><small data-items-in-box class="text-muted">${item.itemsInBox} p.</small></p>

\t\t\t\t\t\t\t\t<div class="details-wrapper">
\t\t\t\t\t\t\t\t\t<div class="items counter-wrapper">
\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter>1</div>
\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
\t\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t\t<div class="price">
\t\t\t\t\t\t\t\t\t\t<div class="price__weight">${item.weight}g.</div>
\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${item.price} ₴</div>
\t\t\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t\t\t</div>

\t\t\t\t\t\t\t\t<button data-cart type="button" class="btn btn-block btn-outline-warning">+ to basket</button>

\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}

// let counter = 0;
//
// btnMinus.addEventListener('click', function() {
//     console.log('minus click');
//     counter-=1;
//     if(counter > 1) {
//         productCounter.innerHTML = counter;
//     }
// });
//
// btnPlus.addEventListener('click', function() {
//     console.log('plus click');
//     counter+=1;
//     productCounter.innerHTML = counter;
// });

window.addEventListener('click', function (event) {

    let counter;

    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus') {
        const counterWrapper = event.target.closest('.counter-wrapper');

        counter = counterWrapper.querySelector('[data-counter]');
    }

    if(event.target.dataset.action === 'plus') {
        counter.innerText = Number(++counter.innerText);
    }

    if(event.target.dataset.action === 'minus') {

        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (parseInt(counter.innerText) === 1) {
            counter.innerText = 1;
        }
    }



});