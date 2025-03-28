import dotenv from "dotenv";
import { RestClientV2 } from "bitget-api";

dotenv.config();

const bitgetApiKey = process.env.BITGET_API_KEY;
const bitgetApiSecret = process.env.BITGET_API_SECRET;

if (!bitgetApiKey || !bitgetApiSecret) {
  throw new Error("Bitget API Keys or secrets are missing in .env file");
}

const bitgetClient = new RestClientV2({
  apiKey: bitgetApiKey,
  apiSecret: bitgetApiSecret,
});

export async function getBitgetTicker(symbol: string) {
  try {
    const result = await bitgetClient.getSpotTicker({ symbol });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget ticker:", error);
    throw error;
  }
}

export async function getBitgetMarketDepth(symbol: string, limit: number = 10) {
  try {
    const result = await bitgetClient.getSpotOrderBookDepth({
      symbol,
      limit: limit.toString(),
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget market depth:", error);
    throw error;
  }
}

export async function getBitgetAccount() {
  try {
    const result = await bitgetClient.getSpotAccount();
    return result;
  } catch (error) {
    console.error("Error fetching Bitget account:", error);
    throw error;
  }
}
