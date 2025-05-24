import React from "react";

const SkeletonLoader = ({ type = "card" }) => {
  if (type === "banner") {
    return (
      <div className="animate-pulse">
        <div className="w-full h-[120px] bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className="animate-pulse flex items-center m-4 h-20 rounded-lg bg-gray-100 p-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 ml-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2 mt-2"></div>
        </div>
        <div className="w-20 h-8 bg-gray-200 rounded-full"></div>
      </div>
    );
  }
};

export default SkeletonLoader;