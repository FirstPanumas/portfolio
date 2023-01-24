import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./ListSlice";

export default configureStore({
  reducer: {
    list: listSlice,
  },
});
