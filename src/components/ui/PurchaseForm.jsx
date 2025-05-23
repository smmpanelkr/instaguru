import React, { useState } from "react";
import COLOR_VARIANTS from "../../utils/colorVariants";

const PurchaseForm = ({ color = "green", serviceData = {}, filter = "Followers", onSubmit }) => {
  const variant = COLOR_VARIANTS[color] || COLOR_VARIANTS.red;
  const [profileLink, setProfileLink] = useState("");

  // Check if serviceData is valid and has required fields
  if (!serviceData || !serviceData.label || !serviceData.placeholder || !serviceData.logo || !serviceData.filters) {
    return (
      <div className="text-center p-4">
        <p className="text-red-600 font-semibold">Invalid service data. Please select a valid service.</p>
      </div>
    );
  }

  const config = serviceData;
  const filterConfig = config.filters?.[filter] || {
    label: config.label,
    placeholder: config.placeholder,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(profileLink);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 p-4 rounded-lg ${variant.cardBg} max-w-full w-full mx-auto my-4 box-border sm:p-6`}
    >
      <label
        htmlFor="profileLink"
        className="text-gray-800 font-semibold flex items-center gap-2"
      >
        <img
          src={config.logo}
          className="w-8 h-8 bg-cover rounded"
          alt={`${config.name} icon`}
        />
        {filterConfig.label}
      </label>
      <input
        id="profileLink"
        type="url"
        placeholder={filterConfig.placeholder}
        value={profileLink}
        onChange={(e) => setProfileLink(e.target.value)}
        required
        className={`px-3 py-2 rounded border-[1.5px] ${variant.borderColor} focus:outline-none text-sm w-full box-border`}
      />
      <button
        type="submit"
        className={`text-center text-white w-full text-sm px-6 py-2 rounded-full gap-2 ${variant.buttonBg} ${variant.buttonHover}`}
      >
        Continue
      </button>
    </form>
  );
};

export default PurchaseForm;