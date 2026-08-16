import { Product } from '@/types/product';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ProductFilters = {
  type?: string;
  specification?: string;
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
        if (filters.specification) {
          params.specification = filters.specification;
        }

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
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation } = productsApi;
