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
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toEqual('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails('Alchool', 'Mascara')).toEqual('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alchool', 'Mascara').length).toEqual(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('Alchool', 'Mascara')[0]).toEqual('object');
    expect(typeof productDetails('Alchool', 'Mascara')[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool', 'Mascara')[0]).not.toBe(productDetails('Alcool', 'Mascara')[1]);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alchool', 'Mascara')[0].details.productId.endsWith('123')).toBe(true); // endsWith verifica se productId termina com determinados caracteres.
  });
});

// Neste requisito o site a seguir foi pesquisado para entendimento do comendo endsWith: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
