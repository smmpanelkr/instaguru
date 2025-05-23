import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline"; // fallback icon
import COLOR_VARIANTS from "../../utils/colorVariants"; // Adjust the path as needed

const ItemCard = ({ logo, name, description, slug, color = "red" }) => {
  const variant = COLOR_VARIANTS[color] || COLOR_VARIANTS.red;
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`flex items-center ${variant.cardBg} m-4 h-20 rounded-lg p-4`}
    >
      {imgError || !logo ? (
        <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
          <PhotoIcon className="w-8 h-8 text-gray-500" />
        </div>
      ) : (
        <img
          src={logo}
          alt={`${name} Logo`}
          onError={() => setImgError(true)}
          className="w-12 h-12 rounded-full object-cover"
        />
      )}

      <div className="flex flex-col ml-4 max-w-[60%]">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-600 mt-1 truncate">{description}</p>
      </div>
      <Link
        to={slug}
        className={`ml-auto text-white text-sm px-4 py-2 rounded-full flex items-center gap-1 ${variant.buttonBg} ${variant.buttonHover}`}
      >
        Plans
        <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default ItemCard;
