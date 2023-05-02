import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: "",
  productId: "",
  wishListData: [],
  cartData: [],
  userLogged: false,
};

export const dataSlice = createSlice({
  name: "dataStore",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
    setProductId: (state, action) => {
      state.productId = action.payload;
    },
    setWishListData: (state, action) => {
      state.wishListData = action.payload;
    },
    setCartData: (state, action) => {
      state.cartData = action.payload;
      console.log("state", state);
      console.log("action", action);
    },
    setUserLogged: (state, action) => {
      state.userLogged = action.payload;
    },
  },
});

// this is for dispatch
export const {
  setCategoryData,
  setWishListData,
  setCartData,
  setProductId,
  setUserLogged,
} = dataSlice.actions;

export const selectCategoryData = (state) => state.dataStore.categoryData;
export const selectProductId = (state) => state.dataStore.productId;
export const selectWishListData = (state) => state.dataStore.wishListData;
export const selectCartData = (state) => state.dataStore.cartData;
export const selectUserLogged = (state) => state.dataStore.userLogged;

// this is for configureStore
export default dataSlice.reducer;
