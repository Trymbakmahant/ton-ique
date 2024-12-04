"use client"
import { useState } from "react";
import { createTransaction, getWalletBalance } from "../../utils/Tonx"

const Transfer = () => {
    const [fromWallet, setFromWallet] = useState("");
    const [toWallet, setToWallet] = useState("");
    const [amount, setAmount] = useState<number | "">("");
    const [balance, setBalance] = useState<string | null>(null);

    const handleTransfer = async () => {
        try {
            const result = await createTransaction(fromWallet, toWallet, Number(amount));
            alert(`Transaction successful: ${result.transactionId}`);
        } catch (error) {
            alert("Error during transaction");
        }
    };

    const fetchBalance = async () => {
        try {
            const walletBalance = await getWalletBalance(fromWallet);
            setBalance(walletBalance.toString());
        } catch (error) {
            alert("Failed to fetch balance");
        }
    };

    return (
        <div>
            <h1>TONX Money Transfer</h1>
            <div>
                <label>From Wallet:</label>
                <input type="text" value={fromWallet} onChange={(e) => setFromWallet(e.target.value)} />
            </div>
            <div>
                <label>To Wallet:</label>
                <input type="text" value={toWallet} onChange={(e) => setToWallet(e.target.value)} />
            </div>
            <div>
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                />
            </div>
            <button onClick={handleTransfer}>Transfer</button>
            <button onClick={fetchBalance}>Check Balance</button>
            {balance && <p>Balance: {balance} TON</p>}
        </div>
    );
};

export default Transfer;
