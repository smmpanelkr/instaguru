import { X, AlertTriangle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import SITE_CONFIG from "../../config/siteConfig";

const Popup = ({ isVisible, onClose }) => {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              id="popupCloseButton"
              className="absolute top-2 right-2 text-gray-300 text-2xl"
              onClick={onClose}
            >
              <X />
            </button>
            <div className="text-4xl text-center ">
              <AlertTriangle className="text-red-600 mx-auto" />
            </div>
            <h3 className="text-2xl text-red-600 font-bold text-center mt-4">
              Insufficient Balance
            </h3>
            <p className="text-lg mt-2 text-center text-gray-700">
              Your balance is currently{" "}
              <strong className="text-green-500">₹{SITE_CONFIG.welcomeBonus}</strong>.
            </p>
            <p className="text-sm mt-2 text-center text-gray-400">
              आपके पास पर्याप्त शेष नहीं है। कृपया पहले फंड जोड़ें।
            </p>
            <Link
              to="/addfund"
              className="mt-4 text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg mx-auto block text-center"
            >
              <CreditCard className="inline mr-2" /> Add Funds / फंड जोड़ें
            </Link>
            <Link to="/refer" className="text-center">
              <p className="text-green-600 mt-3 text-sm font-semibold">
                🤑 Refer & Earn! Click Here
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;