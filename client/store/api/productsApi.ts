import { ProductFormValues } from '@/lib/validators/productSchema';
import { Product } from '@/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ProductFilters = {
  type?: string;
};


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/products`,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductFilters>({
      query: (filters = {}) => {
        const params: Record<string, string> = {};
        if (filters.type) params.type = filters.type;
        return { url: '', params };
      },
      providesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Product'],
    }),
      createProduct: builder.mutation<Product, ProductFormValues>({
        query: (data) => ({
          url: '',
          method: 'POST',
          body: data,
        }),
        invalidatesTags: ['Product'],
      })
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation, useCreateProductMutation } = productsApi;
