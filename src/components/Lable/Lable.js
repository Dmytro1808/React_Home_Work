import React from "react";
function Lable(props) {
  return (
    <div>
      <label className="block mb-2 text-base font-medium text-gray-900 pt-3 pl-5">
        {props.title}
      </label>
      <input
        type={props.type}
        id={props.id}
        className="bg-gray-50 border-gray-300 text-gray-900 border-2 text-sm 
                rounded-lg block focus:outline-none w-[350px] ml-5 mr-5 p-2.5 "
      />
    </div>
  );
}

export default Lable;
