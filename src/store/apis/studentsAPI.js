import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500";
const studentsAPI = createApi({
  reducerPath: "studentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
    }),
  }),
});

export const { useGetStudentsQuery } = studentsAPI;
export default studentsAPI;
