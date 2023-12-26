const PostList = () => {
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
              Title
            </th>
            <th className="dark:border-dark-5 whitespace-nowrap border-b-2 p-4 font-normal text-gray-900">
              Description
            </th>
          </tr>
        </thead>
        {/* <tbody>
          <tr className="text-gray-700" key={item.id}>
            <td className="dark:border-dark-5 border-b-2 p-4">{item.id}</td>
            <td className="dark:border-dark-5 border-b-2 p-4 text-center">
              {item.title}
            </td>
            <td className="dark:border-dark-5 border-b-2 p-4 text-center">
              {item.description}
            </td>
          </tr>
        </tbody> */}
      </table>
    </div>
  );
};

export default PostList;
