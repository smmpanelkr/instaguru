import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PayInfo from "./PayInfo";
import { Loader2 } from "lucide-react";
import SITE_CONFIG from "../../config/siteConfig";

export default function PaymentForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(SITE_CONFIG.minimumAmount.toString());
  const [errors, setErrors] = useState({ name: "", amount: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setAmount(value);
      setErrors((prev) => ({ ...prev, amount: "" }));
    }
  };

  const handleSuggestedAmount = (suggestedAmount) => {
    setAmount(suggestedAmount.toString());
    setErrors((prev) => ({ ...prev, amount: "" }));
  };

  const generatePaymentToken = (amount) => {
    // Simple token generation - in production use a more secure method
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(7);
    return btoa(`${amount}-${timestamp}-${randomStr}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = { name: "", amount: "" };
    let valid = true;

    if (!name) {
      newErrors.name = "Name is required";
      valid = false;
    }

    const parsedAmount = parseInt(amount, 10);
    if (!amount || parsedAmount < SITE_CONFIG.minimumAmount || parsedAmount > SITE_CONFIG.maximumAmount) {
      newErrors.amount = `Amount must be between ₹${SITE_CONFIG.minimumAmount} and ₹${SITE_CONFIG.maximumAmount}`;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setIsLoading(true);
      const paymentToken = generatePaymentToken(amount);
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigate(`/payment/${paymentToken}`);
      setIsLoading(false);
    }
  };

  // Suggested amounts based on minimum amount
  const suggestedAmounts = [
    SITE_CONFIG.minimumAmount,
    SITE_CONFIG.minimumAmount + 25,
    SITE_CONFIG.minimumAmount + 50,
    SITE_CONFIG.minimumAmount + 200
  ];

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-green-50 rounded-xl p-6 space-y-4 mx-auto"
      >
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: "" }));
            }}
            className="w-full p-2 rounded-md bg-green-100 text-black focus:outline-none disabled:opacity-50"
            placeholder="Enter your name"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-red-500 p-3 rounded-md text-sm" aria-live="polite">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Amount</label>
          <div className="flex items-center bg-green-100 rounded-md">
            <span className="px-3 text-gray-500">₹</span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              className="w-full p-2 bg-transparent text-black focus:outline-none disabled:opacity-50"
              placeholder={`Enter amount (${SITE_CONFIG.minimumAmount} - ${SITE_CONFIG.maximumAmount})`}
              disabled={isLoading}
            />
          </div>
          {errors.amount && (
            <p className="text-red-500 p-3 rounded-md text-sm" aria-live="polite">
              {errors.amount}
            </p>
          )}
        </div>

        <div className="flex justify-center gap-4">
          {suggestedAmounts.map((suggestedAmount) => (
            <button
              key={suggestedAmount}
              type="button"
              onClick={() => handleSuggestedAmount(suggestedAmount)}
              className="px-4 py-2 bg-green-100 text-green-600 font-semibold rounded-lg hover:bg-green-200 transition disabled:opacity-50"
              disabled={isLoading}
            >
              ₹{suggestedAmount}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className={`w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition flex items-center justify-center ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Processing...
            </>
          ) : (
            "Proceed to Pay"
          )}
        </button>
        <PayInfo />
      </form>
    </div>
  );
}