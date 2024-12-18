"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronsLeft } from "lucide-react";

type BookTablePageProps = {
  backTab: () => void;
  forwardTab: () => void;
};
export default function BudgetPage({
  backTab,
  forwardTab,
}: BookTablePageProps) {
  const [amount, setAmount] = useState("");

  const handleProceed = () => {
    alert(`Budget set to: ${amount}`);
    forwardTab();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center gap-10 items-center bg-white px-6 py-8">
      {/* Icon and Title */}
      <ChevronsLeft
        size={32}
        color="gray"
        onClick={() => backTab()}
        className="cursor-pointer absolute  border-2 border-gray-300  rounded-full top-4 left-4"
      />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Excellent choice , Sir !
        </h1>
      </div>

      {/* Input and Proceed Button */}
      <div className="w-full flex flex-col gap-4 items-center max-w-md space-y-4">
        <input
          type="text"
          placeholder="Brief description about the date ..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-4 py-3 border rounded-md text-gray-800 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <Button onClick={handleProceed} className="w-fit" disabled={!amount}>
          BOOK Table
        </Button>
      </div>

      <Image
        src="/images/bottomleft.png"
        alt=""
        width={100}
        height={100}
        className="fixed left-0 bottom-0"
      />
    </div>
  );
}
