import { useGetProductsQuery } from "../app/services/dummyData";

const AllProducts = () => {
    const { data, isError, isLoading } = useGetProductsQuery();

    if (isError) {
        return <div>Error fetching products</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

  return (
    <div>
        {data.products.map((product) => (
            <div key={product.id} className="product">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                {/* , <img src={product.image} alt={product.title} /> */}
            </div>
        ))}
    </div>
  )
}

export default AllProducts