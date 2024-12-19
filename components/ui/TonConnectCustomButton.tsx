"use client";

import { useTonWallet, useTonConnectUI } from "@tonconnect/ui-react";
import { useCallback } from "react";

interface TonConnectCustomButtonProps {
  className?: string;
  connectText?: string;
  disconnectText?: string;
  loading?: boolean;
}

export function TonConnectCustomButton({
  className = "",
  connectText = "Connect Wallet",
  disconnectText = "Disconnect",
  loading = false,
}: TonConnectCustomButtonProps) {
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  const handleClick = useCallback(() => {
    if (wallet) {
      tonConnectUI.disconnect();
    } else {
      tonConnectUI.connectWallet();
    }
  }, [wallet, tonConnectUI]);

  const buttonText = wallet ? disconnectText : connectText;
  const defaultClassName =
    "px-6 py-2.5 rounded-lg font-medium bg-blue-500 text-white transition-colors";
  const buttonClassName = wallet
    ? `bg-red-50 text-red-600 hover:bg-red-100 ${defaultClassName} ${className}`
    : `bg-black text-white hover:bg-gray-800 ${defaultClassName} ${className}`;

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={buttonClassName}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      ) : (
        <div className="flex items-center  justify-center space-x-2">
          {wallet && (
            <span className="text-sm truncate max-w-[100px]">
              {wallet.account.address.slice(0, 4)}...
              {wallet.account.address.slice(-4)}
            </span>
          )}
          <span>{buttonText}</span>
        </div>
      )}
    </button>
  );
}
