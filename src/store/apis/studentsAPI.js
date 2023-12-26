import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3500";
const studentsAPI = createApi({
  reducerPath: "studentsAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/students",
      providesTags: ["getStudents"],
      transformResponse: (response) => {
        return response.reverse();
      },
    }),
    addStudents: builder.mutation({
      query: (studentData) => ({
        url: "/students",
        method: "POST",
        body: studentData,
      }),
      invalidatesTags: ["getStudents"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getStudents"],
    }),
  }),
});
export const {
  useGetStudentsQuery,
  useAddStudentsMutation,
  useDeleteStudentMutation,
} = studentsAPI;
export default studentsAPI;
