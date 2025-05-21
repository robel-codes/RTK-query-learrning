import { useUpdateProductMutation } from "../app/services/dummyData"

const UpdateProduct = () => {
    const [updateProduct, { isLoading, isError }] = useUpdateProductMutation();
    const handleUpdate = async () => {
        try {
            const updatedProduct = await updateProduct({
                id: 1,
                title: "Updated Product",
                price: 100,
                description: "Updated Description",
                category: "Updated Category",
                image: "https://example.com/updated-image.jpg",
                stock: 50,
            }).unwrap();
            console.log("Product updated successfully:", updatedProduct);
        } catch (error) {
            console.error("Failed to update product:", error);
        }
    };

  return (
    <div>
        <h1>Update Product</h1>
        <button onClick={handleUpdate}>Update Product</button>
        {isLoading && <p>Updating...</p>}
        {isError && <p>Error updating product</p>}
    </div>
  )
}

export default UpdateProduct