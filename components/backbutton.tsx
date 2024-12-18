"use client";
import React from "react";

import { useRouter } from "next/navigation";

import { ChevronsLeft } from "lucide-react";
const BackButton = () => {
  const router = useRouter();
  return (
    <div className="absolute top-4 left-4">
      <ChevronsLeft
        size={32}
        color="gray"
        onClick={() => router.back()}
        className="cursor-pointer absolute  border-2 border-gray-300  rounded-full top-4 left-4"
      />
    </div>
  );
};

export default BackButton;
