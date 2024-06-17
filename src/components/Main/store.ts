import { configureStore } from '@reduxjs/toolkit'
import { pageReducer, usersApi } from '../UsersList/userListSlice'
import { authReducer } from '../auth/signUpSlice'

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
    page: pageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
