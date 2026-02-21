"use client";

import { useState, useEffect } from "react";

interface AmountStepProps {
  selectedAmount: number | null;
  setSelectedAmount: (amount: number | null) => void;
}

const predefinedAmounts = [500, 1000, 2000, 5000, 10000, 20000];

export default function AmountStep({
  selectedAmount,
  setSelectedAmount,
}: AmountStepProps) {
  const [customAmount, setCustomAmount] = useState<string>("");

  // If user types custom amount → update selectedAmount
  useEffect(() => {
    if (customAmount !== "") {
      const value = Number(customAmount);
      if (!isNaN(value) && value > 0) {
        setSelectedAmount(value);
      }
    }
  }, [customAmount, setSelectedAmount]);

  const handlePredefinedClick = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount(""); // clear custom input
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1e293b]">
        Choose Your Donation Amount
      </h2>

      {/* Predefined Amount Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {predefinedAmounts.map((amt) => (
          <button
            key={amt}
            onClick={() => handlePredefinedClick(amt)}
            className={`h-20 rounded-xl border text-lg font-semibold transition
              ${
                selectedAmount === amt
                  ? "border-green-600 bg-green-50 text-green-700"
                  : "border-gray-200 hover:border-green-500 hover:text-green-600"
              }`}
          >
            ₹{amt.toLocaleString("en-IN")}
          </button>
        ))}
      </div>

      {/* Custom Amount Input */}
      <div className="mt-8">
        <label className="block text-lg font-medium mb-2">
          Enter Custom Amount
        </label>
        <input
          type="number"
          min="1"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="w-full h-14 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
    </div>
  );
}
