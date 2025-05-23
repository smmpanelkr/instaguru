import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import COLOR_VARIANTS from "../../utils/colorVariants";
import { Link } from "react-router-dom";

const PackCard = ({ color = "red", title, description, price, link }) => {
  const variant = COLOR_VARIANTS[color] || COLOR_VARIANTS.red;

  return (
    <div
      className={`flex items-center ${variant.cardBg} mt-4 rounded-lg p-4 w-full`}
    >
      <div className="flex flex-col flex-grow pr-4 min-w-0">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mt-1 truncate">{description}</p>
      </div>

      <Link
        to={link}
        className={`flex-shrink-0 text-white text-sm px-4 py-2 rounded-full flex items-center gap-1 ${variant.buttonBg} ${variant.buttonHover}`}
      >
        ₹{price}
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default PackCard;
