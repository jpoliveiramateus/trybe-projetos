const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
