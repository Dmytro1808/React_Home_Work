import React, { useState } from "react";

function WindowDelete({ closeModal, onClick }) {
  const [modalOpen] = useState(true);
  const [productToDelete, setProductToDelete] = useState(null);

  return (
    <>
      {modalOpen && (
        <div
          id="modalId"
          className="flex flex-col items-center fixed top-0 z-20 left-0 right-0 
          w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md h-full flex items-center mt-[100px] ml-[80px]">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-5 border-b rounded-t">
                <h3 className="text-xl font-medium text-gray-900 ">
                  Removing an item
                </h3>
                <button
                  type="button"
                  id="modal"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
                  rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
                  data-modal-hide="cencel"
                  onClick={() => closeModal()}
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

              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 ">
                  Are u sure you want to delete this product?
                </p>
              </div>

              <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                <button
                  data-modal-hide="small-accept"
                  type="button"
                  onClick={() => closeModal()}
                  className="text-white bg-[#7b68ee] hover:bg-blue-900 focus:ring-4 focus:outline-none
                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    "
                >
                  Cancel
                </button>
                <button
                  id="button-delete"
                  onClick={() => onClick(productToDelete)}
                  data-modal-hide="small-decline"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg 
                  border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 focus:bg-red-500 focus:text-white
                   "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WindowDelete;
