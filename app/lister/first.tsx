"use client";

import Image from "next/image";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

interface FirstPage {
  changeTab: () => void;
}

type FirstPageProps = {
  updateTab: (tab: number) => void;
};

export const FirstPage: React.FC<FirstPageProps> = ({ updateTab }) => {
  const [amount, setAmount] = useState("");

  const handleProceed = () => {
    alert(`Budget set to: ${amount}`);
    updateTab(2);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white px-6 py-8">
      {/* Progress Indicator */}
      <div className="text-gray-400 text-4xl font-medium">
        {"1"}
        <span className="text-gray-200">/3</span>
      </div>

      {/* Icon and Title */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/images/menFirst.png" alt="" width={100} height={100} />
        <h1 className="text-2xl font-bold text-gray-800">Budget</h1>
      </div>

      {/* Input and Proceed Button */}
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Enter amount e.g. $ 10,000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 border rounded-md text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <button
          onClick={handleProceed}
          disabled={!amount}
          className={`w-full py-3 rounded-md font-medium shadow-sm ${
            amount
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Proceed
        </button>
      </div>

      {/* Recommendation and Icon */}
      <div className="w-full max-w-md text-center space-y-4">
        <div className="flex items-start text-sm text-gray-500">
          <span className="mr-2 text-yellow-400 text-lg">
            <CiCircleInfo color="#C8A82A" size={20} />
          </span>
          <p>
            We recommend budget not exceeding INR 10k when using the app for the
            first time.
          </p>
        </div>
        <div className="text-gray-300 flex justify-center">
          <Image src="/images/bottomstand.png" alt="" width={50} height={100} />
        </div>
      </div>
    </div>
  );
};
