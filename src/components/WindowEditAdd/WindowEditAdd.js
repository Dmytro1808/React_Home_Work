import "./WindowEditAdd";
import Lable from "../Lable/Lable";

import React, { useState } from "react";

function WindowEditAdd({ closeModal, title }) {
  const [text, setText] = useState("");
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleTextChange = (event) => {
    const textarea = event.target;
    setText(textarea.value);
    setTextareaHeight("auto");
    setTextareaHeight(`${textarea.scrollHeight}px`);
  };

  return (
    <>
      <div
        id="modalId"
        className="flex flex-col items-center fixed top-0 z-20 left-0 right-0 
          w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md h-full flex items-center mt-[20px] ml-[80px]">
          <div className=" bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-3 border-b rounded-t">
              <h3 className="text-xl font-medium text-gray">{title}</h3>
              <button
                type="button"
                id="modal-add"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                data-modal-hide="cancel"
                onClick={() => {
                  closeModal();
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <Lable title="Name" id="name" type="text" />
            <Lable title="Category" id="category" type="text" />
            <Lable title="Quantity" id="quantity" type="text" />
            <Lable title="Price" id="price" type="text" />
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 pt-3 pl-5"
              >
                Description
              </label>
              <textarea
                value={text}
                style={{ height: textareaHeight }}
                onChange={handleTextChange}
                id="subject"
                name="subject"
                className="resize-y overflow-hidden bg-gray-50 border-gray-300 text-gray-900 border-2 text-sm rounded-lg block focus:outline-none w-[350px] ml-5 mr-5 p-2.5"
              ></textarea>
            </div>
            <div className="flex justify-end items-center p-4 mt-5 space-x-2 border-t border-gray-200 rounded-b ">
              <button
                data-modal-hide="small-accept"
                type="button"
                id="cancel-add"
                onClick={() => closeModal()}
                className="text-white bg-[#7b68ee] hover:bg-blue-900 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    "
              >
                Cancel
              </button>
              <button
                id="button-delete"
                data-modal-hide="small-decline"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg 
                  border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 focus:bg-red-500 focus:text-white
                   "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WindowEditAdd;
