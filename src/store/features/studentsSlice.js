import { createSlice } from "@reduxjs/toolkit";
const formData = { name: "", email: "" };
const initialState = {
  formData,
};
const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    handleInputChange: (state, { payload }) => {
      const { name, value } = payload;
      const formData = { ...state.formData };
      const updatedFormData = { ...formData, [name]: value };
      state.formData = updatedFormData;
    },
    clearAllInputs: (state) => {
      state.formData = formData;
    },
  },
});
export const { handleInputChange, clearAllInputs } = studentSlice.actions;
export default studentSlice.reducer;
