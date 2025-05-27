import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Header from "../components/Header";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);

  const walletAmount = transactions.reduce((sum, txn) => {
    return txn.type === "credit" ? sum + txn.amount : sum - txn.amount;
  }, 0);

  useEffect(() => {
    const baseTransactions = [
    
    ];

    const welcomeBonusTxn = localStorage.getItem("welcomeBonusTxn");
    const welcomeBonus = welcomeBonusTxn ? JSON.parse(welcomeBonusTxn) : null;

    const allTxns = welcomeBonus
      ? [welcomeBonus, ...baseTransactions]
      : baseTransactions;

    // 🔽 Sort transactions by latest date first
    const sortedTxns = allTxns.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    setTransactions(sortedTxns);
  }, []);

  // New function for relative time formatting
  const formatRelativeTime = (isoString) => {
    const now = new Date();
    const dateObj = new Date(isoString);
    const diffMs = now - dateObj;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const isToday = dateObj.toDateString() === now.toDateString();

    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = dateObj.toDateString() === yesterday.toDateString();

    if (seconds < 5) return "Just now";
    if (seconds < 60) return `${seconds} sec ago`;
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 5) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

    if (isToday) {
      return dateObj.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    if (isYesterday) {
      return `Yesterday, ${dateObj.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }

    return dateObj.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <Header />
      <div className="mt-20"></div>
      <div className="p-4 w-full mx-auto">
        <div className="bg-green-50 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-green-700 mb-2">Wallet</h2>
              <p className="text-3xl font-bold text-gray-800">
                ₹{walletAmount.toFixed(2)}
              </p>
            </div>
            <Link
              to="/addfund"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <PlusCircleIcon className="w-5 h-5" /> Add Funds
            </Link>
          </div>
        </div>

        <div className="bg-green-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Transaction History
          </h3>
          <ul className="space-y-4">
            {transactions.length === 0 ? (
              <li className="text-gray-500">No transactions yet.</li>
            ) : (
              transactions.map((txn) => (
                <li
                  key={txn.id}
                  className="flex items-center justify-between bg-green-100 rounded-lg p-4"
                >
                  <div className="flex items-center gap-3">
                    <ArrowRightIcon
                      className={`w-5 h-5 ${
                        txn.type === "credit"
                          ? "text-green-600 rotate-[135deg]"
                          : "text-red-500 -rotate-45"
                      }`}
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {txn.description}
                      </p>
                      <p className="text-xs text-gray-600">
                        {formatRelativeTime(txn.date)}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`text-sm font-bold ${
                      txn.type === "credit" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {txn.type === "credit" ? "+" : "-"}₹{txn.amount}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Wallet;
