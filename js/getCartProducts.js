function getCartProducts() {
    if (localStorage.getItem('cart')) {
        return JSON.parse(localStorage.getItem('cart'));
    }
    return [];
}