class ProductList {
// класс для инициализация списка товаров
constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this.#fetchGoods();
    this.#render();

    console.log(this.getSumPrice());
    }

    #fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500}
            ];
    }

    #render() {
        const block = document.querySelector(this.container);

        for(let product of this.goods) {
            const productObject = new ProductItem (product);

            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend',productObject.render());
        }
    }

    getSumPrice() {
        let sum = 0;
        this.goods.forEach(element => {
            sum += element.price;
        }); 
        return sum;
    }
}

class ProductItem {
// инициализация товар
constructor(product, img = 'http://placehold.it/250x250') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
}

render() {
    return `<div class="product-item" data-id="${this.id}">
    <a href=""><img src=${this.img} alt="product-img"></a>
    <h3><a href="#" class="product-link">${this.title}</a></h3>
    <p>Цена:${this.price}</p>
    <button class="by-btn">Добавить в корзину</button>
    </div>`;
    }
}


//Пустые классы для Корзины товаров и Элемента корзины товаров.

class CartList {
    constructor(container = '.cart-products') {
        this.container = container;
        this.cartGoods = [];
        this.allCartProducts = [];
        this.fetchCartGoods();
        this.render();
    }

    fetchCartGoods() {
    // занесение товаров в корзину
    }

    render() {
    // инициализация списка товаров в корзине
    }
}


class CartItem extends ProductItem {
constructor(product, img = 'http://placehold.it/250x250', amount) {
    super(product, img = 'http://placehold.it/250x250');
    this.amount = amount; //количество конкретного товара в корзине
    }

    render() {
        return ``;
    // рендер товара в корзине
    }
}



new  ProductList();
