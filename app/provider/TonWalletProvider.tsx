"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export function TonWalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl="https://apricot-electoral-herring-290.mypinata.cloud/ipfs/bafkreidnfrkybfycdw2trplfzhqko3biapdqds2tiz7v5spizefcsmoccu">
      {children}
    </TonConnectUIProvider>
  );
}
