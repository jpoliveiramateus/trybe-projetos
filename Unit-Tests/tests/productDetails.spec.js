const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('Mouse', 'Telcado'))).toBe(true);
    expect(productDetails('Mouse', 'Telcado').length).toBe(2);
    expect(typeof productDetails('mouse', 'teclado')[0]).toBe('object');
    expect(typeof productDetails('mouse', 'teclado')[1]).toBe('object');
    const test = productDetails('mouse', 'computer');
    expect(JSON.stringify(test[0]) === JSON.stringify(test[1])).toBe(false);
    const one = test[0].details.productId;
    const two = test[1].details.productId;
    expect(one.endsWith('123') && two.endsWith('123')).toBe(true);
  });
});

// Referências usadas:
// https://danvitoriano.medium.com/igualdade-entre-objetos-9e1104bd23ea
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
