import React from "react";

const AnnounceResult = () => {
  const temp = [];
  const date = new Date();
  for (let i = 2022; i <= date.getFullYear(); i++) {
    temp.unshift(i);
  }

  const categories = [
    {
      name: "First quarterly",
      id: 1,
    },
    {
      name: "Second quarterly",
      id: 2,
    },
    {
      name: "Third quarterly",
      id: 3,
    },
  ];

  return (
    <div className="max-w-md m-auto bg-gray-50 rounded-md p-10 shadow-md">
      <div>
        <label className="block text-gray-700">SELECT A YEAR</label>
        <label>
          <select
            className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
            name="category"
            //onChange={changeHandler}
          >
            <option>Default</option>
            {temp.map((el) => (
              <option key={el}>{el}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5">
        <label className="block text-gray-700" for="grid-year">
          SELECT QUARTERLY
        </label>
        <label>
          <select
            className="py-3 px-4 w-full text-gray-600 relative bg-gray-200 rounded text-sm border border-gray-400 outline-none border-none focus:outline-none focus:bg-white focus:border-gray-500"
            name="category"
            //   onChange={changeHandler}
          >
            <option>Default</option>
            {categories.map((el) => (
              <option key={el._id}>{el.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-5 ">
        <button className="bg-red-600 text-white py-2 mt-5 w-full hover:bg-gray-900">
          ANNOUNCE RESULT
        </button>
      </div>
    </div>
  );
};

export default AnnounceResult;
