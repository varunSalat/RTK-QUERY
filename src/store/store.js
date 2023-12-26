import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./features/studentsSlice";
import studentsAPI from "./apis/studentsAPI";

const store = configureStore({
  reducer: {
    [studentsAPI.reducerPath]: studentsAPI.reducer,
    students: studentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentsAPI.middleware),
});

export default store;
