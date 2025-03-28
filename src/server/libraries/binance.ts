import dotenv from "dotenv";
import { CancelReplaceMode, MainClient, OrderSide, OrderType } from "binance";

dotenv.config();

async function fetchClient({ testnet = false }: { testnet?: boolean }) {
  const binanceApiKey = testnet
    ? process.env.BINANCE_TESTNET_API_KEY
    : process.env.BINANCE_API_KEY;
  const binanceApiSecret = testnet
    ? process.env.BINANCE_TESTNET_API_SECRET
    : process.env.BINANCE_API_SECRET;

  console.log("keys ", binanceApiKey, binanceApiSecret);
  if (!binanceApiKey || !binanceApiSecret) {
    throw new Error("Binance API Keys or secrets are missing in .env file");
  }
  const client = new MainClient({
    useTestnet: testnet,
    api_key: binanceApiKey,
    api_secret: binanceApiSecret,
    baseUrl: testnet ? "https://testnet.binance.vision" : undefined, // https://api.binance.com
    recvWindow: 20000,
  });
  return client;
}

export async function getSymbolList() {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getExchangeInfo();
    return result;
  } catch (error) {
    console.error("Error fetching symbols list:", error);
    throw error;
  }
}

export async function getBinanceTicker(symbol: string) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getSymbolPriceTicker({ symbol });
    return result;
  } catch (error) {
    console.error("Error fetching Binance ticker:", error);
    throw error;
  }
}

export async function getBinanceTradingDayTicker(
  symbol: string,
  type?: "FULL" | "MINI"
) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getTradingDayTicker({ symbol, type });
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
    const binanceClient = await fetchClient({ testnet: true });
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
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getAccountInfo();
    return result;
  } catch (error) {
    console.error("Error fetching Binance account:", error);
    throw error;
  }
}

export async function getBinanceDepositAddress(coin: string) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getDepositAddress({ coin });
    return result;
  } catch (error) {
    console.error("Error fetching Binance Deposit Address:", error);
    throw error;
  }
}

export async function getBinanceWithdrawHistory(
  coin: string,
  limit: number = 10
) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getWithdrawHistory({ coin, limit });
    return result;
  } catch (error) {
    console.error("Error fetching Binance Withdraw History:", error);
    throw error;
  }
}

export async function getBinanceOpenOrders(symbol?: string) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getOpenOrders({ symbol });
    return result;
  } catch (error) {
    console.error("Error fetching Binance Open Orders:", error);
    throw error;
  }
}

export async function getBinanceTradeHistory(
  symbol: string,
  limit: number = 10
) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getHistoricalTrades({ symbol, limit });
    return result;
  } catch (error) {
    console.error("Error fetching Binance Trade History:", error);
    throw error;
  }
}

export async function createBinanceOrder({
  side,
  symbol,
  type,
  price,
  quantity,
}: {
  side: OrderSide;
  symbol: string;
  type: OrderType;
  price?: number;
  quantity?: number;
}) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.testNewOrder({
      side: side,
      symbol,
      type,
      price,
      quantity,
    });
    return result;
  } catch (error) {
    console.error("Error creating Binance order:", error);
    throw error;
  }
}

export async function createBinanceAmendOrder({
  side,
  symbol,
  type,
  cancelReplaceMode,
  price,
  quantity,
}: {
  side: OrderSide;
  symbol: string;
  type: OrderType;
  cancelReplaceMode: CancelReplaceMode;
  price?: number;
  quantity?: number;
}) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.replaceOrder({
      symbol,
      side,
      type,
      cancelReplaceMode,
      price,
      quantity,
    });
    return result;
  } catch (error) {
    console.error("Error amending Binance order:", error);
    throw error;
  }
}

export async function createBinanceCancelOrder({
  symbol,
  orderId,
  origClientOrderId,
}: {
  symbol: string;
  orderId?: number;
  origClientOrderId?: string;
}) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.cancelOrder({
      symbol,
      orderId,
      origClientOrderId,
    });
    return result;
  } catch (error) {
    console.error("Error amending Binance order:", error);
    throw error;
  }
}
