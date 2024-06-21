import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/users' }),
  endpoints: (builder) => ({
    getUsersByPage: builder.query<UsersPagedQueryResponse, number | string>({
      query: (page) => `?page=${page}`,
      async onQueryStarted(_id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled

        dispatch(setIsLastPage(data.page == data.total_pages))
      },
    }),
    getUserById: builder.query<UserResponse, number | string>({
      query: (id) => `/${id}`,
    }),
  }),
})

export const { useGetUsersByPageQuery, useGetUserByIdQuery } = usersApi

export const pageNumberSlice = createSlice({
  name: 'currentPage',
  initialState: { currentPage: 1, isLastPage: false },
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setIsLastPage: (state, action: PayloadAction<boolean>) => {
      state.isLastPage = action.payload
    },
  },
})

export const { setPage } = pageNumberSlice.actions

const { setIsLastPage } = pageNumberSlice.actions

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
  page: number
  total_pages: number
}

type UserResponse = {
  data: User
}
