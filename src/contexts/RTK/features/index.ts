import rtkApi from "@/infra/@adapters/redux-toolkit/rtk.api";
import { combineSlices } from "@reduxjs/toolkit";
import userSliceReducer, { userSlice } from "./user/user.slice";

export const rootReducer = combineSlices({
  [rtkApi.reducerPath]: rtkApi.reducer,
  [userSlice.reducerPath]: userSliceReducer,
});
