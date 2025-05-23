import React, { useState } from "react";
import COLOR_VARIANTS from "../../utils/colorVariants";

const PurchaseForm = ({ color = "red", onSubmit }) => {
  const variant = COLOR_VARIANTS[color] || COLOR_VARIANTS.red;
  const [profileLink, setProfileLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(profileLink);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 p-4 rounded-lg ${variant.cardBg} max-w-md w-full`}
    >
      <label
        htmlFor="profileLink"
        className="text-gray-800 font-semibold text-sm"
      >
        Enter your profile link
      </label>
      <input
        id="profileLink"
        type="url"
        placeholder="https://yourprofilelink.com"
        value={profileLink}
        onChange={(e) => setProfileLink(e.target.value)}
        required
        className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 text-sm"
      />
      <button
        type="submit"
        className={`self-start text-white text-sm px-6 py-2 rounded-full flex items-center gap-2 ${variant.buttonBg} ${variant.buttonHover}`}
      >
        Continue
      </button>
    </form>
  );
};

export default PurchaseForm;
