require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Check if fecthProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Check if fetch is called', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Test if the endpoint is called with the correct url', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Test if data structure is equal to computadorSearch object', async () => {
    const response = await fetchProducts('computador')
    expect(response).toEqual(computadorSearch);
  });

  it('Test if function is called without parameters returns error (You must provide an url)', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  });

});
