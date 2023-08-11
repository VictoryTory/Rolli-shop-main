window.addEventListener('click', function (event) {
    let result;

    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.card');
        const cartProducts = getCartProducts();

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: parseInt(card.querySelector('.price__currency').innerText),
            counter: card.querySelector('[data-counter]').innerText,
        }

        if(!cartProducts.find((cartProduct) => cartProduct.id === productInfo.id) ) {
            cartProducts.push(productInfo);
            result = cartProducts;
        } else {
            result = cartProducts.map(function(cartProduct) {
                if (cartProduct.id === productInfo.id) {
                    return {
                        ...productInfo,
                        counter: parseInt(cartProduct.counter) + parseInt(productInfo.counter)
                    }
                }
                return cartProduct;
            });
        }

        card.querySelector('[data-counter]').innerText = '1';

        localStorage.setItem('cart', JSON.stringify(result));

        handleCartUpdate();
    }
})
