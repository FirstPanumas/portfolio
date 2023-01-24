import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  list: 1,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    selectedList: (state, action) => {
      state.list = action.payload;
    //   console.log(current(state));
    },
  },
});

export const { selectedList } = listSlice.actions;
export default listSlice.reducer;
