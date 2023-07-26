class Product  {
    constructor(title, description, price, thumbnail, code, stock) {
    this.id = Date.now(); // Genera un id único basado en la fecha y hora actual
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    }
}

class ProductManager {
    constructor() {
    this.products = [];
    }

    getProducts() {
    return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
    // Comprobar si el código ya está en uso
    const isCodeRepeated = this.products.some(product => product.code === code);

    if (isCodeRepeated) {
        console.error('El código de producto ya está en uso.');
    }

    // Crear un nuevo producto y agregarlo al arreglo
    const newProduct = new Product(title, description, price, thumbnail, code, stock);
    this.products.push(newProduct);
    }

    getProductById(id) {
    const product = this.products.find(product => product.id === id);

    if (!product) {
        console.error('No se encontró el producto con el id proporcionado.');
    }

    return product;
    }
}

// Crear una instancia de la clase "ProductManager"
const productManager = new ProductManager();

// Llamar a "getProducts" recién creada la instancia, debe devolver un arreglo vacío []
const products = productManager.getProducts();
console.log(products); // []

// Llamar al método "addProduct" con los campos indicados
try {
    productManager.addProduct(
    "producto prueba",
    "Este es un producto prueba",
    200,
    "Sin imagen",
    "abc123",
    25
    );
    console.log("Producto agregado satisfactoriamente.");
} catch (error) {
  console.error(error.message); // En caso de error, imprimirá el mensaje de error
}

// Llamar al método "getProducts" nuevamente, debe aparecer el producto recién agregado
const productsAfterAdd = productManager.getProducts();
console.log(productsAfterAdd);

// Llamar al método "addProduct" con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
try {
    productManager.addProduct(
    "producto repetido",
    "Este es un producto repetido",
    150,
    "Sin imagen",
    "abc123",
    15
    );
    console.log("Producto agregado satisfactoriamente.");
} catch (error) {
    console.error(error.message);
}

// Probar el método "getProductById" con un id existente
const productId = productsAfterAdd[0].id;
const productById = productManager.getProductById(productId);
console.log(productById);

// Probar el método "getProductById" con un id inexistente
const nonExistingProductId = 0;
try {
    const nonExistingProduct = productManager.getProductById(nonExistingProductId);
    console.log(nonExistingProduct);
} catch (error) {
  console.error(error.message); // Debe mostrar "No se encontró el producto con el id proporcionado."
}