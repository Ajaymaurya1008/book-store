import React from "react";
import { FaHeart } from "react-icons/fa";
import { MdRemoveCircle } from "react-icons/md";

const BookCard = ({ title, editionCount, onClick, btnName, heart }) => {
  return (
    <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-bold tracking-tight text-slate-900">
            {title}
          </h5>
        </a>
        <div className="mb-5 mt-2 flex items-center justify-between">
          <p>
            <span className="text-md font-medium text-slate-900">
              Edition Count :
            </span>
            <span className="text-sm text-slate-900">{" " + editionCount}</span>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={onClick}
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {heart ? (
              <FaHeart className="h-6x mr-2 w-6" />
            ) : (
              <MdRemoveCircle className="mr-2 h-6 w-6" />
            )}
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
