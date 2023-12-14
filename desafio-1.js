class ProductMaganer {
    #products = [];
    #id = 0;

    getProducts = () => this.#products;

    getProductById = (id) => {
        const product = this.#products.find(p => p.id === id);
        if (!product) {
            throw new Error('Not found');
        }
        return product;
    }
    
    addProduct = (product) => {
        if (this.#products.find(p => p.code === product.code)) {
            throw new Error('No se puede agregar un producto con el mismo código');
        }
        this.#products.push({
            ...product,
            id: ++this.#id
        });
    }
}