import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCreateUser, fetchLoginUser, refreshUser } from './operation';

const loginInitialState = {
  user: {
    name: '',
    email: '',
  },
  authorizationToken: null,
  isRegestered: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const registerSlise = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    logOut(state) {
      state.authorizationToken = null;
      state.user = { name: '', email: '' };
      state.isLoggedIn = false;
      state.isRegestered = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.authorizationToken = action.payload.token;
        state.user = action.payload.user;
        state.isRegestered = true;
        state.authorizationToken = true;
        toast.success('registration was successful');
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        console.log(action);
        toast.error('Check the correctness of the data');
      })
      .addCase(fetchLoginUser.fulfilled, (state, action) => {
        state.authorizationToken = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRegestered = true;
      })
      .addCase(fetchLoginUser.rejected, () => {
        toast.error('Invalid email or password');
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isRegestered = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const { logOut } = registerSlise.actions;
export const userReduser = registerSlise.reducer;
