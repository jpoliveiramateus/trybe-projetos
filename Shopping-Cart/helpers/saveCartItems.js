const saveCartItems = (cartItems, subTotal) => {
  // seu código aqui
  localStorage.setItem('cartItems', cartItems);
  localStorage.setItem('subTotal', subTotal);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
