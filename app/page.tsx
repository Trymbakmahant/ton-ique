"use client";
import React, { useState, useEffect } from "react";
import { mockLocalInitData, TelegramInitData } from "../utils/mockTelegramData";

export default function TelegramInitDataPage() {
  const [initData, setInitData] = useState<TelegramInitData | null>(null);
  const [environment, setEnvironment] = useState<"local" | "telegram">("local");

  useEffect(() => {
    const extractTelegramInitData = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tgWebApp = (window as any).Telegram?.WebApp;
      if (tgWebApp && tgWebApp.initData) {
        // Parse actual Telegram init data
        try {
          const parsedData = JSON.parse(tgWebApp.initData);
          setInitData(parsedData);
          setEnvironment("telegram");
        } catch (error) {
          console.error("Error parsing Telegram init data", error);
        }
      } else {
        // Fall back to mock data
        setInitData(mockLocalInitData);
        setEnvironment("local");
      }
    };

    extractTelegramInitData();
  }, []);

  const toggleEnvironment = () => {
    setEnvironment((prev) => (prev === "local" ? "telegram" : "local"));

    // Switch between mock and actual data (if available)
    setInitData((prev) =>
      prev === mockLocalInitData
        ? null // This will trigger re-detection in useEffect
        : mockLocalInitData
    );
  };

  return (
    <div className="min-h-screen bg-telegram-blue flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Telegram Init Data</h1>
          <button
            onClick={toggleEnvironment}
            className={`
              px-4 py-2 rounded transition-colors
              ${
                environment === "local"
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
              }
            `}
          >
            {environment === "local" ? "Local" : "Telegram"}
          </button>
        </div>

        {initData ? (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-bold mb-2">User Details:</h2>
              <pre>{JSON.stringify(initData.user, null, 2)}</pre>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h2 className="font-bold mb-2">Full Init Data:</h2>
              <pre>{JSON.stringify(initData, null, 2)}</pre>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No init data available</p>
        )}
      </div>
    </div>
  );
}
