import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  title: "",
  email: "",
};
const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    handleInputChange: (state, { payload }) => {
      const { name, value } = payload;
      console.log(name, value);
    },
  },
});
export const { handleInputChange } = studentSlice.actions;
export default studentSlice.reducer;
