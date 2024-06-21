import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: { token: null | string; likes: Record<string, boolean> } = {
  token: localStorage.getItem('auth'),
  likes: JSON.parse(localStorage.getItem('likes') ?? '{}'),
}

export const signUpSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      const token = btoa(action.payload.email + ':' + action.payload.password)

      state.token = token
      localStorage.setItem('auth', token)
    },
    signOut: (state) => {
      state.token = null
      localStorage.removeItem('auth')
    },
    toggleLike: (state, action: PayloadAction<number | string>) => {
      const id = action.payload.toString()

      state.likes[id] == true
        ? delete state.likes[id]
        : (state.likes[id] = true)
    },
  },
})

export const { signIn, signOut, toggleLike } = signUpSlice.actions

export const authReducer = signUpSlice.reducer
