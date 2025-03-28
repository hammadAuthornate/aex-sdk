import dotenv from "dotenv";
import { RestClientV5 } from "bybit-api";

dotenv.config();

const bybitApiKey = process.env.BYBIT_API_KEY;
const bybitApiSecret = process.env.BYBIT_API_SECRET;

if (!bybitApiKey || !bybitApiSecret) {
  throw new Error("Bybit API Keys or secrets are missing in .env file");
}

const bybitClient = new RestClientV5({
  key: bybitApiKey,
  secret: bybitApiSecret,
});

export async function getBybitTicker(symbol: string) {
  try {
    const result = await bybitClient.getTickers({ symbol, category: "spot" });
    return result;
  } catch (error) {
    console.error("Error fetching Bybit ticker:", error);
    throw error;
  }
}

export async function getBybitMarketDepth(symbol: string, limit: number = 10) {
  try {
    const result = await bybitClient.getOrderbook({
      symbol,
      category: "spot",
      limit,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bybit market depth:", error);
    throw error;
  }
}

export async function getBybitAccount() {
  try {
    const result = await bybitClient.getAccountInfo();
    return result;
  } catch (error) {
    console.error("Error fetching Bybit account:", error);
    throw error;
  }
}
