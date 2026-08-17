import { Order } from '@/types/order';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/orders`
  }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getOrders: builder.query<Order[], void>({
      query: () => '',
      providesTags: ['Order']
    }),
    getOrderById: builder.query<Order, number>({
      query: (id) => `/${id}`,
      providesTags: ['Order']
    }),
    deleteOrder: builder.mutation<void, number>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Order']
    })
  })
});

export const { useGetOrdersQuery, useGetOrderByIdQuery, useDeleteOrderMutation } = ordersApi;
