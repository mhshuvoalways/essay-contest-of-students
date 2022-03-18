import React from "react";

const SubmitArticle = () => {
  const categoriesLanguages = [
    {
      name: "English",
      id: 1,
    },
    {
      name: "Hindi",
      id: 2,
    },
    {
      name: "Bangla",
      id: 3,
    },
  ];

  const categoriesArticle = [
    {
      name: "Story",
      id: 1,
    },
    {
      name: "Poem",
      id: 2,
    },
  ];

  return (
    <div className="mt-12 max-w-xl sm:p-6 lg:p-8 m-auto shadow-md p-10 rounded-md bg-gray-50">
      <form>
        <div className="mt-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Select a Language
          </label>
          <label>
            <select
              className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="category"
              //   onChange={changeHandler}
            >
              <option>Default</option>
              {categoriesLanguages.map((el) => (
                <option key={el._id}>{el.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-5">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Select type of Article
          </label>
          <label>
            <select
              className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
              name="typeofarticle"
              //   onChange={changeHandler}
            >
              <option>Default</option>
              {categoriesArticle.map((el) => (
                <option key={el._id}>{el.name}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="mt-5">
          <textarea
            className="appearance-none block w-full h-48 bg-gray-200 text-gray-700 border border-gray-200 rounded py-4 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter your article"
            name="description"
            // onChange={changeHandler}
          />
        </div>
        <div className="mt-5 ">
          <button className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
            PAY AND SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitArticle;
