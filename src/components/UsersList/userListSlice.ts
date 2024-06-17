import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users' }),
  endpoints: (builder) => ({
    getUsersByPage: builder.query<UsersPagedQueryResponse, number | string>({
      query: (page) => `?page=${page}`,
    }),
    getUserById: builder.query<UserResponse, number | string>({
      query: (id) => `/${id}`,
    }),
  }),
})

export const { useGetUsersByPageQuery, useGetUserByIdQuery } = usersApi

export const pageNumberSlice = createSlice({
  name: 'currentPage',
  initialState: 1,
  reducers: {
    setPage: (_state, action: PayloadAction<number>) => {
      return action.payload
    },
  },
})

export const { setPage } = pageNumberSlice.actions

export const pageReducer = pageNumberSlice.reducer

export type User = {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

type UsersPagedQueryResponse = {
  data: User[]
}

type UserResponse = {
  data: User
}
