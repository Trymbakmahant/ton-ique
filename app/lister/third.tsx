"use client";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { Checkbox } from "@/components/ui/checkbox";
import { ChevronsLeft } from "lucide-react";

type ThirdPageProps = {
  forwardTab: () => void;
  backTab: () => void;
};
export default function Third({ forwardTab, backTab }: ThirdPageProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white px-6 py-8">
      {/* Progress Indicator */}
      <ChevronsLeft
        size={32}
        color="gray"
        onClick={() => backTab()}
        className="cursor-pointer absolute  border-2 border-gray-300  rounded-full top-4 left-4"
      />
      <div className="text-gray-400 text-4xl font-medium">
        {"3"}
        <span className="text-gray-200">/3</span>
      </div>

      {/* Icon and Title */}
      <div className="flex flex-col items-center space-y-4">
        <Image src="/images/ballon.png" alt="" width={100} height={100} />
        <h1 className="text-2xl font-bold text-gray-800">What</h1>
      </div>

      {/* Input and Proceed Button */}
      <div className="w-full flex  flex-col justify-center max-w-md space-y-6">
        <div className="flex justify-center items-center gap-2">
          <Checkbox /> Candle Light Dinner
        </div>
        <div className="flex justify-center items-center gap-2">
          <Checkbox /> Candle Light Dinner
        </div>
        <div className="flex justify-center items-center gap-2">
          <Checkbox /> Candle Light Dinner
        </div>
      </div>

      {/* Recommendation and Icon */}
      <div className="w-full max-w-md text-center space-y-4">
        <Separator />
        <div>
          <div className="text-3xl">$ 2000</div>
          <div>+$100</div>
          <div>+$300</div>
        </div>
        <div className="text-gray-300 flex justify-center">
          <Image
            onClick={() => forwardTab()}
            src="/images/bottomstand.png"
            alt=""
            width={50}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
