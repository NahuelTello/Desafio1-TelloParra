class Product  {
    constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = Product.autoincrement();
    }

    static autoincrement(){
        // Existe esta prop
        if (this.id) {
            this.id ++
        } else {
            //Si no existe le asigna 1
            this.id = 1
        }
        return this.id
    }
}

class ProductManager {

    constructor() {
        this.products = [];
    }

    
    addProduct(product) {
    // Comprobar si el código ya está en uso
        const code = this.products.find(prod => prod.code === product.code);

        if (code) {
            console.error('Producto ya agregado');
        } else{
            // Crear un nuevo producto y agregarlo al arreglo
            this.products.push(product);
        }

        
    }
        
    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            console.log(product);
        } else{
            console.error('No existe ese ID')
        }

        return product;
    }
}

// Crear una instancia de la clase "ProductManager"
const productManager = new ProductManager();

const producto1 = productManager.addProduct("Iphone","14 Pro",2000,[],"P0001",25)
const producto2 = productManager.addProduct("Samsung", "13 Pro", 1000, [], "P0002", 5)
const producto3 = productManager.addProduct("Lg", "12 Pro", 500, [], "P0003", 15)

