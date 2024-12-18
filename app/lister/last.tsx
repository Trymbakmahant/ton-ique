"use client";

import Image from "next/image";

export default function BudgetPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-10 items-center bg-white px-6 py-8">
      <Image
        src="/images/Bold.png"
        alt=""
        fill
        className="fixed left-0 top-0"
      />
    </div>
  );
}
