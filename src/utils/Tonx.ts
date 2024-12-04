import { TonClient, Address } from "ton";
import axios from "axios";

const client = new TonClient({
    endpoint: process.env.TONX_API_BASE_URL || "",
    apiKey: process.env.TONX_API_KEY, 
})

const API_BASE_URL = process.env.TONX_API_BASE_URL || "";
const API_KEY =  process.env.TONX_API_KEY; 

export const createTransaction = async (fromWallet: string, toWallet: string, amount: number) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/transfer`,
            {
                from: fromWallet,
                to: toWallet,
                value: amount,
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );
        return response.data
    } catch (error) {
        console.error("Transaction failed:", error);
        throw error;
    }
};

export const getWalletBalance = async (walletAddress: string) => {
    try {
        const address = Address.parse(walletAddress);
        const balance = await client.getBalance(address);
        return balance;
    } catch (error) {
        console.error("Failed to fetch wallet balance:", error);
        throw error;
    }
};
