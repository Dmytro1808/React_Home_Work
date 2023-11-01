import { useState, useEffect } from "react";

function Lable(props) {
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);
  useEffect(() => {
    if (props.isError) {
      setIsErrorMessageVisible(true);
      setTimeout(() => {
        setIsErrorMessageVisible(false);
      }, 1000);
    }
  }, [props.isError]);
  return (
    <div className="relative">
      <label className="block mb-2 text-base font-medium text-gray-900 pt-3 pl-5">
        {props.title}
      </label>
      <div className="relative">
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className={`bg-gray-50 border-gray-300 text-gray-900 border-2 text-sm rounded-lg block focus:outline-none w-[350px] ml-5 mr-5 p-2 ${props.className}`}
        />
        {isErrorMessageVisible && (
          <span className="absolute top-0 left-10 mt-2 mr-3 text-red-500 text-sm">
            This field is required
          </span>
        )}
      </div>
    </div>
  );
}

export default Lable;
