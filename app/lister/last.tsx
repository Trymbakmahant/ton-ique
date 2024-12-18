"use client";

import BackButton from "@/components/backbutton";

import Image from "next/image";

export default function BudgetPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-10 items-center bg-white px-6 py-8">
      <div className="flex flex-col items-center pt-[170px] h-screen bg-white px-4">
        {/* Trophy and Bold move */}
        <div className="flex  items-center space-x-2 mb-4">
          <div className="flex flex-col  items-end space-x-2 ">
            <h1 className="text-4xl font-bold text-black">Bold</h1>
            <h1 className="text-4xl font-bold text-black">move!</h1>
          </div>
          <Image src="/images/trophy.jpg" alt="Trophy" width={80} height={80} />
        </div>

        <hr className="w-full border-t border-gray-300 mb-[60px]" />

        {/* Congratulations */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-[#432252]mb-2">
            Congratulations 🎉
          </h2>
          <p className="text-[#747474] text-sm">
            Watch out for notifications when you receive a like from a special
            someone!
          </p>
        </div>
      </div>
      <BackButton />
    </div>
  );
}
