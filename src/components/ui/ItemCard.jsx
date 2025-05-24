import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { LazyLoadImage } from "react-lazy-load-image-component";
import COLOR_VARIANTS from "../../utils/colorVariants";
import Skeleton from "./Skeleton";

const ItemCard = ({ logo, name, description, slug, color = "red" }) => {
  const variant = COLOR_VARIANTS[color] || COLOR_VARIANTS.red;
  const [imgError, setImgError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={slug}
      className={`flex items-center ${variant.cardBg} m-4 h-20 rounded-lg p-4 transition hover:brightness-95 no-underline`}
    >
      <div className="relative w-12 h-12">
        {!imageLoaded && !imgError && (
          <Skeleton className="absolute inset-0 rounded-full" />
        )}
        {imgError || !logo ? (
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <PhotoIcon className="w-8 h-8 text-gray-500" />
          </div>
        ) : (
          <LazyLoadImage
            src={logo}
            alt={`${name} Logo`}
            onError={() => setImgError(true)}
            afterLoad={() => setImageLoaded(true)}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col ml-4 max-w-[60%]">
        <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
        <p className="text-xs text-gray-600 mt-1 truncate">{description}</p>
      </div>

      <div
        className={`ml-auto text-white text-sm px-4 py-2 rounded-full flex items-center gap-1 ${variant.buttonBg} ${variant.buttonHover}`}
      >
        Plans
        <ArrowRightIcon className="w-4 h-4" />
      </div>
    </Link>
  );
};

export default ItemCard;