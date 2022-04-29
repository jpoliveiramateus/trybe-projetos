require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  // implemente seus testes aqui
  it('Check if fecthItem is a function', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Check if fetch is called', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Test if the endpoint is called with the correct url', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Test if data structure is equal to item object', async () => {
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });

  it('Test if function is called without parameters returns error (You must provide an url)', async () => {
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });

});
