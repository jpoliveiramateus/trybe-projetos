const items = document.getElementsByClassName('items')[0];
const cartItems = document.getElementsByClassName('cart__items')[0];
const clearButton = document.getElementsByClassName('empty-cart')[0];
const subTotal = document.getElementsByClassName('total-price')[0];
const search = document.getElementById('inputSearch');

const convertReal = (val) => val.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

const convertValue = (num) => {
  let result = num.replace('.', '');
  result = result.replace(',', '.');
  return parseFloat(result);
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function cartItemClickListener(event) {
  const element = event.target;
  const fatherElement = element.parentNode;
  let price = '';
  if (element.tagName === 'LI') {
    cartItems.removeChild(element);
    const [, priceElement] = element.textContent.split('PRICE: R$');
    price = priceElement;
  } else {
    cartItems.removeChild(fatherElement);
    const [, priceElement] = fatherElement.textContent.split('PRICE: R$');
    price = priceElement;
  }
  const total = convertValue(subTotal.textContent) - convertValue(price);
  subTotal.innerHTML = total.toLocaleString('pt-br');
  if (subTotal.innerHTML === '0') subTotal.innerHTML = '0,00';
  saveCartItems(cartItems.innerHTML, subTotal.innerHTML);
}

function createCartItemElement({ sku, name, salePrice, src }) {
  const img = document.createElement('img');
  img.src = src;
  img.style.width = '50px';
  img.style.height = '50px';
  img.style.borderRadius = '50%';
  const li = document.createElement('li');
  li.className = 'cart__item';
  const priceText = salePrice.toLocaleString('pt-br');
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: R$${priceText}`;
  li.appendChild(img);
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addCart = async (receivedID) => {
  const response = await fetchItem(receivedID);
  const { id, title, price, thumbnail } = response;
  const total = convertValue(subTotal.textContent) + price;
  subTotal.innerHTML = total.toLocaleString('pt-br');
  const obj = { sku: id, name: title, salePrice: price, src: thumbnail };
  const li = createCartItemElement(obj);
  cartItems.appendChild(li);
  saveCartItems(cartItems.innerHTML, subTotal.innerHTML);
};

const productIdClicked = (event) => {
  const result = event.target.parentNode;
  const id = result.childNodes[0].textContent;
  addCart(id);
};

function createProductItemElement({ sku, name, image, price }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'price', convertReal(price)));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

const productList = async (product) => {
  items.innerHTML = '';
  const p = document.createElement('p');
  p.innerText = 'Carregando...';
  p.className = 'loading';
  items.appendChild(p);
  const products = await fetchProducts(product);
  items.removeChild(p);
  const { results } = products;
  results.forEach((value) => {
    const { id, title, thumbnail, price } = value;
    const obj = { sku: id, name: title, image: thumbnail, price };
    const section = createProductItemElement(obj);
    items.appendChild(section);
  });
};

const clickButtonAddCart = () => {
  const button = document.querySelectorAll('.item__add');
  button.forEach((value) => {
    value.addEventListener('click', productIdClicked);
  });
};

const clearCart = () => {
  cartItems.innerHTML = '';
  subTotal.innerHTML = '0,00';
  saveCartItems(cartItems.innerHTML, subTotal.innerHTML);
};

const itemsLocalStorage = () => {
  const li = document.querySelectorAll('.cart__item');
  li.forEach((value) => {
    value.addEventListener('click', () => {
      cartItems.removeChild(value);
      const price = value.textContent.split('PRICE: R$')[1];
      const total = convertValue(subTotal.textContent) - convertValue(price);
      subTotal.innerHTML = total.toLocaleString('pt-br');
      if (subTotal.innerHTML === '0') subTotal.innerHTML = '0,00';
      saveCartItems(cartItems.innerHTML, subTotal.innerHTML);
    });
  });
};

const saveSubTotalLocalStorage = (totalSave) => {
  if (totalSave === null) subTotal.innerHTML = '0,00';
  else subTotal.innerHTML = totalSave;
};

search.addEventListener('keypress', async (e) => {
  if (e.code === 'Enter') {
    await productList(search.value);
    const saved = getSavedCartItems();
    const [cartItem, total] = saved;
    cartItems.innerHTML = cartItem;
    saveSubTotalLocalStorage(total);
    itemsLocalStorage();
    clickButtonAddCart();
    clearButton.addEventListener('click', clearCart);
  }
});

window.onload = async () => {
  await productList('computador');
  const saved = getSavedCartItems();
  const [cartItem, total] = saved;
  cartItems.innerHTML = cartItem;
  saveSubTotalLocalStorage(total);
  itemsLocalStorage();
  clickButtonAddCart();
  clearButton.addEventListener('click', clearCart);
};

/* Used documents: 

  https://eslint.org/docs/rules/radix *line 37

  https://metring.com.br/arredondar-numero-em-javascript#:~:text=Para%20arredondar%20um%20n%C3%BAmero%20decimal,n%C3%A3o%20%C3%A9%20um%20m%C3%A9todo%20confi%C3%A1vel. *line 40 and 24.

*/
