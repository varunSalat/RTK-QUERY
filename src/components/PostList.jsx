import { useState } from "react";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
} from "../store/apis/studentsAPI";

const PostList = () => {
  const res = useGetStudentsQuery();
  const { error, data, isLoading } = res;
  const [deleteStudentAPI, deleteRes] = useDeleteStudentMutation();
  const [clickedBtnIndex, setClickedBtnIndex] = useState(null);

  const handleDeleteStudent = async (id) => {
    setClickedBtnIndex(id);
    await deleteStudentAPI(id);
    setClickedBtnIndex(null);
  };
  return (
    <div className="bt-2 mt-12 flex flex-col justify-center">
      <h1 className="border-b-2 pb-2 text-2xl">POSTS</h1>
      <table className="mt-4 table rounded-lg bg-white p-4 shadow">
        <thead>
          <tr>
            <th className="dark:border-dark-5 flex whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              #
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Name
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Email Address
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && !error && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
          {error && !isLoading && (
            <tr>
              <td>We have an error</td>
            </tr>
          )}
          {!isLoading &&
            !error &&
            data &&
            data.map((item) => (
              <tr className="text-gray-700" key={item.id}>
                <td className="dark:border-dark-5 border-b-2 p-4">{item.id}</td>
                <td className="dark:border-dark-5 border-b-2 p-4 text-center">
                  {item.name}
                </td>
                <td className="dark:border-dark-5 border-b-2 p-4 text-center">
                  {item.email}
                </td>
                <td className="dark:border-dark-5 border-b-2 p-4 text-center">
                  <button
                    onClick={() => handleDeleteStudent(item.id)}
                    className="rounded-md border-2 px-1 py-1 transition-all duration-300 hover:bg-red-400"
                  >
                    {clickedBtnIndex === item.id &&
                    (deleteRes.isLoading || res.isFetching)
                      ? "Deleting"
                      : "Delete"}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
