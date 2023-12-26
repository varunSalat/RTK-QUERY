import { useDispatch, useSelector } from "react-redux";
import {
  clearAllInputs,
  handleInputChange,
} from "../store/features/studentsSlice";
import { useAddStudentsMutation } from "../store/apis/studentsAPI";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const { formData } = useSelector((state) => state.students);
  const [addStudentAPI, addStudentRes] = useAddStudentsMutation();
  const { isLoading } = addStudentRes;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudentAPI(formData);
    dispatch(clearAllInputs());
  };

  console.log(isLoading);

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
                  required
                  value={formData.name}
                  type="text"
                  id="contact-form-name"
                  className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Name"
                  name="name"
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
                  required
                  value={formData.email}
                  type="email"
                  id="contact-form-name"
                  className=" w-full flex-1 appearance-none rounded-lg border border-gray-300 border-transparent bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
            </div>

            <div className="col-span-2 text-right">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full rounded-lg ${
                  isLoading ? "bg-gray-600" : "bg-indigo-600"
                } px-4 py-2 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-${
                  isLoading ? "" : "indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200`}
              >
                {isLoading ? "Sending" : "Send"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
