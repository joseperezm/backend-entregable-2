const ProductManager = require('./ProductManager'); // Asegúrate de que la ruta sea correcta

// Crear una instancia de ProductManager con el archivo donde se guardan los productos
const filePath = 'productos.json';
const productManager = new ProductManager(filePath);

// Añadir productos (usando un objeto para representar un producto)
(async () => {
    try {
        const productId1 = await productManager.addProduct({
            name: 'Producto 1',
            description: 'Descripción 1',
            price: 5000,
            image: 'imagen1.jpg',
            code: 'P001',
            quantity: 50
        });

        const productId2 = await productManager.addProduct({
            name: 'Producto 2',
            description: 'Descripción 2',
            price: 6000,
            image: 'imagen2.jpg',
            code: 'P002',
            quantity: 30
        });

        const productId3 = await productManager.addProduct({
            name: 'Producto 3',
            description: 'Descripción 3',
            price: 6000,
            image: 'imagen3.jpg',
            code: 'P003',
            quantity: 10
        });
        // Obtener todos los productos
        const allProducts = await productManager.getProducts();
        console.log('Todos los productos:', allProducts);

        // Obtener un producto por ID
        const productById = await productManager.getProductById(productId2);
        console.log('Producto encontrado por ID:', productById);

        // Actualizar el nombre del producto con ID 2 a "Nombre actualizado"
        const updated = await productManager.updateProduct(productId2, { name: 'Nombre actualizado' });
        if (updated) {
            console.log(`Nombre del producto con ID ${productId2} actualizado.`);
        } else {
            console.log(`No se pudo actualizar el nombre del producto con ID ${productId2}.`);
        }

        // Eliminar el producto con ID 1
        const deleted = await productManager.deleteProduct(1);
        if (deleted) {
            console.log('Producto con ID 1 eliminado correctamente.');
        } else {
            console.log('No se encontró el producto con ID 1.');
        }

        // Obtener todos los productos después de la eliminación
        const allProductsAfterDeletion = await productManager.getProducts();
        console.log('Todos los productos después de la eliminación:', allProductsAfterDeletion);

        } catch (error) {
        console.error(error.message);
        }
})();