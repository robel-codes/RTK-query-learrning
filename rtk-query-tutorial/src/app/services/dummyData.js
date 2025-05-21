import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyDataApi = createApi({
    reducerPath: 'dummyDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        /// Fetch all products
        getProducts: builder.query({
            query: () => '/products',
        }),
        /// Fetch a single product by ID
        getProductById: builder.query({
            query: (id) => `/products/${id}`,
        }),
        /// Add a new product
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: '/products/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: newProduct,
            }),
        }),

        /// Update an existing product
        updateProduct: builder.mutation({
            query: ({ id, ...updatedProduct }) => ({
                url: `/products/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: updatedProduct,
            }),
        }),

        /// Delete a product
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { 
    useGetProductsQuery, 
    useGetProductByIdQuery, 
    useAddProductMutation, 
    useUpdateProductMutation,
    useDeleteProductMutation
} = dummyDataApi;