const cartWrapper = document.querySelector('.cart-wrapper');

cartWrapper.addEventListener('click', function (event) {
    const elementId = document.querySelector('[data-id]');
    const cartProducts = getCartProducts();
    if(event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus') {
        const cartItem = event.target.closest('.cart-item');
        const id = cartItem.dataset.id;
        const result = cartProducts.map(function(cartProduct) {
            if (cartProduct.id === id) {

                let changeCounter;

                if (event.target.dataset.action === 'minus') {
                    changeCounter = cartProduct.counter-1;
                }
                if (event.target.dataset.action === 'plus') {
                    changeCounter = cartProduct.counter+1;
                }

                return {
                    ...cartProduct,
                    counter: changeCounter
                }
            }
            return cartProduct;
        }).filter(function (cartProduct) {
            return cartProduct.counter > 0;
        });

        localStorage.setItem('cart', JSON.stringify(result));

        handleCartUpdate();
    }
});

function handleCartCounterChange(event) {
    let counter;


}
