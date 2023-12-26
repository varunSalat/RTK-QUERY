import { useDispatch } from "react-redux";
import { handleInputChange } from "../store/features/studentsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto flex w-full max-w-sm space-x-3"
        method="POST"
      >
        <div className="m-auto mt-10 w-full max-w-2xl rounded-lg bg-white px-5 py-10 shadow dark:bg-gray-800">
          <div className="mb-6 text-center text-3xl font-light text-gray-800 dark:text-white">
            Add Post !
          </div>
          <div className="m-auto flex flex-col gap-4">
            <div className="col-span-1">
              <div className=" relative ">
                <input
                  onChange={(e) =>
                    dispatch(
                      handleInputChange({
                        value: e.target.value,
                        name: e.target.name,
                      }),
                    )
                  }
                  type="text"
                  id="contact-form-name"
                  className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="title"
                  name="title"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className=" relative ">
                <input
                  onChange={(e) =>
                    dispatch(
                      handleInputChange({
                        value: e.target.value,
                        name: e.target.name,
                      }),
                    )
                  }
                  type="email"
                  id="contact-form-name"
                  className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="title"
                  name="email"
                />
              </div>
            </div>

            <div className="col-span-2 text-right">
              <button
                type="submit"
                className="w-full rounded-lg  bg-indigo-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
