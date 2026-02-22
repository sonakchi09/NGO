"use client";
import axios from "axios";

import { useState } from "react";
import { LuLock, LuShieldCheck, LuCreditCard, LuFileText } from "react-icons/lu";
import AmountStep from "./AmountStep";
import InfoStep from "./InfoStep";

export default function DonatePage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  // ✅ Store donor details here (parent)
  const [donorInfo, setDonorInfo] = useState({
  name: "",
  email: "",
  phone: "",
  aadhaar: "",
  address: "",
});


  // ✅ This is where you will send data to backend

const handlePayment = async () => {
  if (!selectedAmount) {
    alert("Please select donation amount");
    return;
  }

  if (!donorInfo.name || !donorInfo.email || !donorInfo.phone || !donorInfo.aadhaar || !donorInfo.address) {
    alert("Please fill all fields");
    return;
  }

  try {
    const payload = {
      amount: selectedAmount,
      ...donorInfo,
    };

    const response = await axios.post(
      "https://ngobackend-ashen.vercel.app/api/donation",
      payload
    );

    alert(response.data.message);
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Something went wrong");
  }
};


  return (
    <section className="min-h-screen bg-[#f3f4f6] flex items-start justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">

        {/* LEFT BOX */}
        <div className="bg-orange-600 text-white rounded-xl p-8 shadow-lg h-[520px]">
          <h1 className="text-3xl font-bold leading-snug">
            <span className="text-black">Give Hope.</span> <br />
            Change Lives.
          </h1>

          <p className="mt-4 text-sm text-orange-100">
            Your contribution supports food, education and emergency relief
            for families in need.
          </p>

          <div className="mt-6 space-y-4 text-xs text-orange-100">
            <div className="flex items-center gap-2">
              <LuLock className="text-base text-[#2E8B57]" />
              <span>100% Secure Payments</span>
            </div>

            <div className="flex items-center gap-2">
              <LuShieldCheck className="text-base text-[#2E8B57]" />
              <span>Fully Encrypted Transactions</span>
            </div>

            <div className="flex items-center gap-2">
              <LuCreditCard className="text-base text-[#2E8B57]" />
              <span>Trusted Payment Gateway</span>
            </div>

            <div className="flex items-center gap-2">
              <LuFileText className="text-base text-[#2E8B57]" />
              <span>Instant Donation Receipt</span>
            </div>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="bg-[#f8f5f0] rounded-xl p-8 shadow-lg h-[520px] overflow-y-auto">
          <div className="max-w-md mx-auto">

            {!showForm ? (
              <AmountStep
                selectedAmount={selectedAmount}
                setSelectedAmount={setSelectedAmount}
              />
            ) : (
              <InfoStep
                donorInfo={donorInfo}
                setDonorInfo={setDonorInfo}
                selectedAmount={selectedAmount}
                handlePayment={handlePayment}
              />
            )}

            <div className="mt-6">
              {!showForm ? (
                <button
                  onClick={() => setShowForm(true)}
                  disabled={!selectedAmount}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 text-sm rounded-md font-medium disabled:opacity-40"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={() => setShowForm(false)}
                  className="w-full border border-gray-300 py-2.5 text-sm rounded-md text-gray-600"
                >
                  Back
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
