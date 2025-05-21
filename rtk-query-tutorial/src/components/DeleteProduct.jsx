import { useDeleteProductMutation } from "../app/services/dummyData"

const DeleteProduct = () => {
    const [deleteProduct, { isLoading, isError }] = useDeleteProductMutation()
    const handleDelete = async () => {
        try {
            const deletedProduct = await deleteProduct(1).unwrap();
            console.log("Product deleted successfully:", deletedProduct);
        } catch (error) {
            console.error("Failed to delete product:", error);
        }
    };

  return (
    <div>
        <h1>Delete Product</h1>
        <button onClick={handleDelete}>Delete Product</button>
        {isLoading && <p>Deleting...</p>}
        {isError && <p>Error deleting product</p>}
    </div>
  )
}

export default DeleteProduct