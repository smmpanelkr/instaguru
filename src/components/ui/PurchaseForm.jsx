import React, { useState } from "react";
import COLOR_VARIANTS from "../../utils/colorVariants";
import Popup from "../ui/Popup";

const PurchaseForm = ({
  color = "green",
  serviceData = {},
  filter = "Followers",
  onSubmit,
}) => {
  const variant = COLOR_VARIANTS[color] || COLOR_VARIANTS.red;
  const [profileLink, setProfileLink] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  if (
    !serviceData ||
    !serviceData.label ||
    !serviceData.placeholder ||
    !serviceData.logo ||
    !serviceData.filters
  ) {
    return (
      <div className="text-center p-4">
        <p className="text-red-600 font-semibold">
          Invalid service data. Please select a valid service.
        </p>
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
    if (profileLink) {
      const hasSufficientBalance = false; // Replace with actual balance check logic
      if (!hasSufficientBalance) {
        setShowPopup(true); // Show popup on every submit if balance is insufficient
      } else if (onSubmit) {
        onSubmit(profileLink);
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close popup
  };

  return (
    <>
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
            className="w-8 h-8 rounded-full bg-cover"
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
          className={`px-3 py-2 rounded border-[1.5px] ${variant.borderColor} focus:outline-none w-full box-border`}
        />
        <button
          type="submit"
          className={`text-center text-white w-full px-6 py-2 rounded-full gap-2 ${variant.buttonBg} ${variant.buttonHover}`}
        >
          Continue
        </button>
      </form>
      <Popup isVisible={showPopup} onClose={handleClosePopup} />
    </>
  );
};

export default PurchaseForm;