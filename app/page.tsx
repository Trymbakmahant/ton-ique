/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { mockLocalInitData, TelegramInitData } from "../utils/mockTelegramData";

export default function TelegramInitDataPage() {
  const [initData, setInitData] = useState<TelegramInitData | null>(null);
  const [debugInfo, setDebugInfo] = useState<{
    telegramWebAppExists: boolean;
    windowObjectExists: boolean;
    scriptLoaded: boolean;
    webAppReady: boolean;
    initDataAvailable: boolean;
  }>({
    telegramWebAppExists: false,
    windowObjectExists: false,
    scriptLoaded: false,
    webAppReady: false,
    initDataAvailable: false,
  });

  useEffect(() => {
    // Debug: Check window and Telegram availability
    const checkTelegramAvailability = () => {
      const updatedDebugInfo = {
        windowObjectExists: typeof window !== "undefined",
        telegramWebAppExists: !!(window as any).Telegram,
        scriptLoaded: !!document.querySelector(
          'script[src*="telegram-web-app"]'
        ),
        webAppReady: false,
        initDataAvailable: false,
      };

      // Load Telegram Web App script dynamically if not present
      if (!updatedDebugInfo.scriptLoaded) {
        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-web-app.js";
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          console.log("Telegram WebApp script loaded");
          initializeTelegramWebApp();
        };
      } else {
        initializeTelegramWebApp();
      }

      setDebugInfo((prev) => ({ ...prev, ...updatedDebugInfo }));
    };

    const initializeTelegramWebApp = () => {
      try {
        const tgWebApp = (window as any).Telegram?.WebApp;

        if (tgWebApp) {
          // Explicitly call ready method
          tgWebApp.ready();

          // Update debug info
          setDebugInfo((prev) => ({
            ...prev,
            webAppReady: true,
            initDataAvailable: !!tgWebApp.initData,
          }));

          // Extract and set init data
          if (tgWebApp.initData) {
            console.log("Raw Telegram Init Data:", tgWebApp.initData);

            try {
              // Try parsing if it's a JSON string
              const parsedInitData =
                typeof tgWebApp.initData === "string"
                  ? JSON.parse(tgWebApp.initData)
                  : tgWebApp.initData;

              setInitData(parsedInitData);
            } catch (parseError) {
              console.error("Error parsing init data:", parseError);
              setInitData(mockLocalInitData);
            }
          } else {
            console.warn("No init data available, using mock data");
            setInitData(mockLocalInitData);
          }
        }
      } catch (error) {
        console.error("Error initializing Telegram WebApp:", error);
        setInitData(mockLocalInitData);
      }
    };

    // Initial check
    checkTelegramAvailability();
  }, []);

  return (
    <div className="min-h-screen bg-telegram-blue flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4">
          Telegram Init Data Diagnostics
        </h1>

        {/* Debug Information */}
        <div className="bg-gray-100 p-4 rounded mb-4">
          <h2 className="font-bold mb-2">Debug Information:</h2>
          <pre className="text-xs">{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>

        {/* Init Data Display */}
        {initData ? (
          <div className="space-y-4">
            <div className="bg-green-100 p-4 rounded">
              <h2 className="font-bold mb-2">Parsed Init Data:</h2>
              <pre className="text-xs">{JSON.stringify(initData, null, 2)}</pre>
            </div>
          </div>
        ) : (
          <div className="bg-red-100 p-4 rounded">
            <p className="text-red-800">No Telegram Init Data Available</p>
          </div>
        )}

        {/* Troubleshooting Instructions */}
        <div className="mt-4 bg-yellow-100 p-4 rounded">
          <h2 className="font-bold mb-2">Troubleshooting Tips:</h2>
          <ul className="list-disc list-inside text-sm">
            <li>
              Ensure you&apos;re running this in a Telegram Mini App context
            </li>
            <li>Verify Telegram WebApp script is loaded correctly</li>
            <li>Check browser console for any errors</li>
            <li>Confirm your bot is configured correctly in BotFather</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
