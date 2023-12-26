import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./features/studentsSlice";
import studentsAPI from "./apis/studentsAPI";
const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(studentsAPI.middleware),
});

export default store;
