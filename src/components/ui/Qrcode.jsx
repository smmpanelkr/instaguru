import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { ArrowLeft } from "lucide-react";
import RazorpayLogo from "./Razorpaylogo";
import Timer from "./Timer";

const UPI_ID = "insta999guru@ibl";

export default function Qrcode() {
  const { amount } = useParams();
  const [amountError, setAmountError] = useState("");
  const [validatedAmount, setValidatedAmount] = useState("");
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (amount && /^\d+$/.test(amount)) {
      const parsedAmount = parseInt(amount, 10);
      if (parsedAmount >= 50) {
        setValidatedAmount(amount);
      } else {
        setAmountError("Amount must be at least ₹50");
      }
    } else {
      setAmountError("Invalid or missing amount in URL");
    }
  }, [amount]);

  const paymentLink = `upi://pay?pa=${UPI_ID}&pn=Instawala&am=${validatedAmount}&cu=INR&tn=ORD4575224455`;

  const handleBack = () => {
    navigate("/addfund");
  };

  const handleCancel = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    navigate("/wallet");
  };

  if (amountError || !validatedAmount) {
    return (
      <div className="bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full space-y-6 relative">
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 text-gray-600 hover:text-blue-600 transition focus:outline-none"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex justify-center mb-4">
            <RazorpayLogo />
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">Error</h2>
            <p
              className="text-red-600 bg-red-50 p-2 rounded-md mt-2 text-sm"
              aria-live="polite"
            >
              {amountError || "Loading amount..."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full space-y-6 relative">
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-600 hover:text-blue-600 transition focus:outline-none"
          aria-label="Go back"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <div className="flex justify-center mb-4">
          <RazorpayLogo />
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Scan to Pay ₹{validatedAmount}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Use any UPI app to scan and pay
          </p>
          <div className="flex-col flex items-center justify-center bg-blue-50 p-6 rounded-lg">
            <QRCode
              value={paymentLink}
              size={180}
              bgColor="#F0F5FF"
              fgColor="#000000"
              level="H"
            />
            <div className="flex justify-center items-center gap-4 mt-4">
              <img src="/ic/gpay.svg" alt="Google Pay" className="h-4" />
              <img src="/ic/phonepe.svg" alt="PhonePe" className="h-4" />
              <img src="/ic/paytm.svg" alt="Paytm" className="h-3" />
              <img src="/ic/upi.svg" alt="UPI" className="h-3" />
            </div>
          </div>

          <Timer />
          <p className="text-sm text-gray-500">
            Your payment will be processed automatically.
          </p>
          <button
            onClick={handleCancel}
            className="w-full bg-gray-600 text-white mt-3 font-semibold py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Cancel
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-4">
          Powered by <span className="font-semibold text-blue-600">Razorpay</span>
        </p>
      </div>

      {/* Cancel Confirmation Popup */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Cancel Payment?
            </h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to cancel this payment?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelConfirm(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                No, Continue
              </button>
              <button
                onClick={confirmCancel}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}