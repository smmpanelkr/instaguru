import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faLink,
  faCommentSms,
  faCheck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SITE_CONFIG from "../config/siteConfig";

const Refer = () => {
  const { referralId } = useParams(); // Extract referral ID from URL (e.g., JW2-TLZ-0VT)
  const navigate = useNavigate();
  const [referralCode, setReferralCode] = useState("");
  const [copied, setCopied] = useState(false);
  const [referralCount] = useState(0); // Default to 0 referrals

  // Generate referral code like: abc-def-ghi (3 blocks of 3 lowercase letters/numbers)
  const generateReferralCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < 9; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code.match(/.{1,3}/g).join("-"); // e.g. abc-def-ghi
  };

  useEffect(() => {
    // Handle referral ID from URL
    if (referralId) {
      // Store referral ID in localStorage (or send to backend)
      localStorage.setItem("referredBy", referralId);
      // Redirect to home page
      navigate("/");
    } else {
      // Existing logic for generating/storing referral code
      const savedCode = localStorage.getItem("referralCode");
      if (savedCode) {
        setReferralCode(savedCode);
      } else {
        const newCode = generateReferralCode();
        localStorage.setItem("referralCode", newCode);
        setReferralCode(newCode);
      }
    }
  }, [referralId, navigate]);

  const referralLink = `${window.location.origin}/refer/${referralCode}`;
  const shareMessage = SITE_CONFIG.referralMessage(referralLink);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = shareMessage;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareToWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`,
      "_blank"
    );
  };

  const shareToSMS = () => {
    const smsUrl = `sms:?body=${encodeURIComponent(shareMessage)}`;
    window.open(smsUrl, "_blank");
  };

  return (
    <>
      <Header />
      <div className="flex mt-20 items-center justify-center px-4">
        <div className="bg-green-50 rounded-lg p-5 w-full">
          <h2 className="text-xl font-bold text-green-700 mb-3 text-center">
            Refer & Earn
          </h2>
          <p className="text-sm text-gray-700 mb-4 text-center">
            Share your referral link and earn{" "}
            <span className="text-green-600 font-semibold">₹{SITE_CONFIG.referralBonus}</span>!
          </p>

          {/* Share Buttons */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={handleCopy}
              className="bg-gray-200 h-12 w-12 rounded-full flex items-center justify-center hover:bg-gray-300"
              title={copied ? "Copied!" : "Copy Link"}
            >
              <FontAwesomeIcon icon={copied ? faCheck : faLink} size="lg" />
            </button>
            <button
              onClick={shareToWhatsApp}
              className="bg-[#25D366] h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#20B85A]"
              title="Share to WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" color="white" />
            </button>
            <button
              onClick={shareToSMS}
              className="bg-[#00A1D6] h-12 w-12 rounded-full flex items-center justify-center hover:bg-[#0090C0]"
              title="Share via SMS"
            >
              <FontAwesomeIcon icon={faCommentSms} size="lg" color="white" />
            </button>
          </div>
          <p className="text-xs text-center text-gray-500 mt-2 mb-6">
            Share this link with your friends to earn rewards.
          </p>

          {/* Referral Count Section */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <div className="flex items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faUsers}
                size="lg"
                className="text-green-600"
              />
              <p className="text-sm text-gray-700">
                Your Referrals:{" "}
                <span className="font-semibold">{referralCount}</span>
              </p>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <h3 className="text-base font-semibold text-green-700 mb-2 text-center">
              How It Works
            </h3>
            <ul className="text-sm text-gray-600 list-disc list-inside space-y-2">
              <li>Share your referral link via Copy, WhatsApp, or SMS.</li>
              <li>Your friends join using your referral link.</li>
              <li>Earn ₹{SITE_CONFIG.referralBonus} for each friend who signs up successfully.</li>
              <li>Track your referrals above and watch your rewards grow!</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Refer;