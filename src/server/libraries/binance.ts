import dotenv from "dotenv";
import { MainClient } from "binance";

dotenv.config();

// const binanceApiKey = process.env.BINANCE_API_KEY;
// const binanceApiSecret = process.env.BINANCE_API_SECRET;

// console.log("keys ", binanceApiKey, binanceApiSecret);
// if (!binanceApiKey || !binanceApiSecret) {
//   throw new Error("Binance API Keys or secrets are missing in .env file");
// }

// const binanceClient = new MainClient({
//   api_key: binanceApiKey,
//   api_secret: binanceApiSecret,
// });

async function fetchClient() {
  const binanceApiKey = process.env.BINANCE_TESTNET_API_KEY || process.env.BINANCE_API_KEY;
  const binanceApiSecret = process.env.BINANCE_TESTNET_API_SECRET || process.env.BINANCE_API_SECRET;

  console.log('keys ', binanceApiKey, binanceApiSecret)
  if (!binanceApiKey || !binanceApiSecret) {
    throw new Error("Binance API Keys or secrets are missing in .env file");
  }
  const client = new MainClient({
    useTestnet: true,
    api_key: binanceApiKey,
    api_secret: binanceApiSecret,
    baseUrl: "https://testnet.binance.vision",

    // api_key: process.env.BINANCE_API_KEY,
    // api_secret: process.env.BINANCE_API_SECRET,
    recvWindow: 20000,
  });
  // console.log("binance client ", client);
  return client;
}

export async function getSymbolList() {
  try {
    const binanceClient = await fetchClient();
    const result = await binanceClient.getExchangeInfo();
    return result;
  } catch (error) {
    console.error("Error fetching symbols list:", error);
    throw error;
  }
}

export async function getBinanceTicker(symbol: string) {
  try {
    const binanceClient = await fetchClient();
    const result = await binanceClient.getSymbolPriceTicker({ symbol });
    return result;
  } catch (error) {
    console.error("Error fetching Binance ticker:", error);
    throw error;
  }
}

export async function getBinanceMarketDepth(
  symbol: string,
  limit: number = 10
) {
  try {
    const binanceClient = await fetchClient();
    const result = await binanceClient.getOrderBook({
      symbol,
      limit: limit as any,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Binance market depth:", error);
    throw error;
  }
}

export async function getBinanceAccount() {
  try {
    const binanceClient = await fetchClient();
    const result = await binanceClient.getAccountInfo();
    return result;
  } catch (error) {
    console.error("Error fetching Binance account:", error);
    throw error;
  }
}
