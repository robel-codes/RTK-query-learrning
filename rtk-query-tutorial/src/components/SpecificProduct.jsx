import { useGetProductByIdQuery } from '../app/services/dummyData';

const SpecificProduct = () => {
    const { data, isError, isLoading } = useGetProductByIdQuery(2);

    if (isError) {
        return <div>Error fetching product</div>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }

  return (
    <div>
    <h1>{data?.brand}</h1>
    <h2>{data?.title}</h2>
    <p>{data?.description}</p>
    <p>Price: ${data?.price}</p>
    <p>Discount: {data?.discountPercentage}%</p>
    <p>Rating: {data?.rating}</p>
    <p>Stock: {data?.stock}</p>
    <p>Category: {data?.category}</p>
    <p>Thumbnail: <img src={data?.thumbnail} alt={data?.title} /></p>
    </div>
  )
}

export default SpecificProduct