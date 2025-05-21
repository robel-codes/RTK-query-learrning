import { useAddProductMutation } from '../app/services/dummyData';

const AddProducts = () => {
    const [addProduct, { isLoading, error, data }] = useAddProductMutation();

    if (error) {
        return <div>Error adding product</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleAddProduct = async () => {
        const newProduct = {
            title: 'New Product',
            description: 'This is a new product',
            price: 100,
            discountPercentage: 10,
            rating: 4.5,
            stock: 50,
            brand: 'Brand Name',
            category: 'Category Name',
            thumbnail: 'https://example.com/image.jpg',
        };

        try {
            const result = await addProduct(newProduct).unwrap();
            console.log('Product added successfully:', result);
        } catch (err) {
            console.error('Failed to add product:', err);
        }
    };

  return (
    <div>
        <h1>Add New Product</h1>
        <button onClick={handleAddProduct}>Add Product</button>
        {data && <div>Product added: {JSON.stringify(data)}</div>}
        {error && <div>Error: {JSON.stringify(error)}</div>}
    </div>
  )
}

export default AddProducts