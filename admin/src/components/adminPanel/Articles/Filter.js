import React from "react";

const Filter = () => {
  const language = [
    {
      name: "All",
    },
    {
      name: "English",
    },
    {
      name: "Hindi",
    },
    {
      name: "Bangla",
    },
  ];

  return (
    <div className="flex justify-between flex-wrap">
      <div className="p-3 border flex gap-2 mb-2 flex-wrap">
        <label>Language:</label>
        <select className="bg-gray-50 border border-gray-300 rounded-lg w-28">
          {language.map((el) => (
            <option>{el.name}</option>
          ))}
        </select>
      </div>
      <div className="p-3 border flex gap-2 mb-2 flex-wrap sm:flex-nowrap">
        <label className="">Search:</label>
        <input
          type="text"
          placeholder="Search with email"
          className="px-2 rounded-lg w-full bg-gray-50 border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Filter;
