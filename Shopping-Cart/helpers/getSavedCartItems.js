const getSavedCartItems = () => {
  const result = [];
  const subTotalSave = localStorage.getItem('subTotal');
  const cart = localStorage.getItem('cartItems');
  result.push(cart, subTotalSave);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
