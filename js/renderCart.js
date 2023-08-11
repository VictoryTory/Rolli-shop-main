handleCartUpdate();

function handleCartUpdate() {
    const products = getCartProducts();
    renderCart(products);
    calcCartPriceAndDelivery();
}

function renderCart(products) {
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');

    if (products.length > 0) {
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }

    const cartWrapper = document.querySelector('.cart-wrapper');
    cartWrapper.innerHTML = '';

    products.forEach(productInfo => {
        const cardItemHTML = `
            <div class="cart-item" data-id="${productInfo.id}">
    \t\t\t\t\t\t\t\t<div class="cart-item__top">
    \t\t\t\t\t\t\t\t\t<div class="cart-item__img">
    \t\t\t\t\t\t\t\t\t\t<img src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">
    \t\t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t\t\t<div class="cart-item__desc">
    \t\t\t\t\t\t\t\t\t\t<div class="cart-item__title">${productInfo.title}</div>
    \t\t\t\t\t\t\t\t\t\t<div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
    
    \t\t\t\t\t\t\t\t\t\t<!-- cart-item__details -->
    \t\t\t\t\t\t\t\t\t\t<div class="cart-item__details">
    
    \t\t\t\t\t\t\t\t\t\t\t<div class="items items--small counter-wrapper">
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="minus">-</div>
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__current" data-counter="">${productInfo.counter}</div>
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="items__control" data-action="plus">+</div>
    \t\t\t\t\t\t\t\t\t\t\t</div>
    
    \t\t\t\t\t\t\t\t\t\t\t<div class="price">
    \t\t\t\t\t\t\t\t\t\t\t\t<div class="price__currency">${productInfo.price}</div>
    \t\t\t\t\t\t\t\t\t\t\t</div>
    
    \t\t\t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t\t\t\t<!-- // cart-item__details -->
    
    \t\t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t\t</div>
    \t\t\t\t\t\t\t</div>`;


        cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
    });

}