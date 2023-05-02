import { configureStore } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import dataSlice from "../features/Data/dataSlice";

const reducers = combineReducers({
  dataStore: dataSlice,
});

const persistConfig = {
  key: "root",
  storage,
  // transforms: [
  //   encryptTransform({
  //     secretKey: "7090030506",
  //     onError: function (error) {
  //       // Handle the error.
  //     },
  //   }),
  // ],
};

const pReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: pReducer,
  // devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
