import BackButton from "@/components/backbutton";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BackButton />
      <h1 className="text-2xl font-bold">Shopper Page</h1>
    </div>
  );
};

export default page;
