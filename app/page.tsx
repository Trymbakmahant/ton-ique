/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { mockLocalInitData, TelegramInitData } from "../utils/mockTelegramData";
import UserTypeSelection from "../components/ui/Landing/Tabs";

export default function TelegramInitDataPage() {
  const [initData, setInitData] = useState<TelegramInitData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
  console.log(initData, debugInfo);
  const authenticateUser = async (data: TelegramInitData) => {
    try {
      const response = await fetch("/api/auth/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          initData: data,
        }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const authResult = await response.json();
      setIsAuthenticated(true);
      // You might want to store the token or user data
      return authResult;
    } catch (error) {
      console.error("Authentication error:", error);
      setIsAuthenticated(false);
      // Handle authentication error (maybe show a message to user)
    }
  };

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
          tgWebApp.ready();
          setDebugInfo((prev) => ({
            ...prev,
            webAppReady: true,
            initDataAvailable: !!tgWebApp.initData,
          }));

          if (tgWebApp.initData) {
            try {
              const searchParams = new URLSearchParams(tgWebApp.initData);
              const parsedData: Record<string, any> = {};
              searchParams.forEach((value, key) => {
                try {
                  parsedData[key] = JSON.parse(decodeURIComponent(value));
                } catch {
                  parsedData[key] = decodeURIComponent(value);
                }
              });

              setInitData(parsedData);
              // Call authentication immediately after parsing initData
              authenticateUser(parsedData);
            } catch (error) {
              console.error("Error parsing init data:", error);
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
    <>
      {!isAuthenticated ? <UserTypeSelection /> : <div>Authenticating...</div>}
    </>
  );
}
