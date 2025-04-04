import dotenv from "dotenv";
import { RestClientV5 } from "bybit-api";

dotenv.config();

async function fetchClient({ testnet = false }: { testnet?: boolean }) {
  const bybitApiKey = testnet
    ? process.env.BYBIT_TESTNET_API_KEY
    : process.env.BYBIT_API_KEY;
  const bybitApiSecret = testnet
    ? process.env.BYBIT_TESTNET_API_SECRET
    : process.env.BYBIT_API_SECRET;

  console.log("bybit keys ", bybitApiKey, bybitApiSecret);
  if (!bybitApiKey || !bybitApiSecret) {
    throw new Error("Bybit API Keys or secrets are missing in .env file");
  }
  const client = new RestClientV5({
    testnet: testnet,
    key: bybitApiKey,
    secret: bybitApiSecret,
    recv_window: 20000,
    baseUrl: testnet ? "https://api-testnet.bybit.com" : undefined,
  });
  return client;
}

export async function getBybitTicker(symbol?: string) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getTickers({ symbol, category: "spot" });
    return result;
  } catch (error) {
    console.error("Error fetching Bybit ticker:", error);
    throw error;
  }
}

export async function getBybitMarketDepth(symbol: string, limit: number = 10) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
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
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getAccountInfo();
    return result;
  } catch (error) {
    console.error("Error fetching Bybit account:", error);
    throw error;
  }
}

export async function getBybitDepositAddress(coin: string, size: string) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getMasterDepositAddress(coin);
    return result;
  } catch (error) {
    console.error("Error fetching ByBit Deposit Address:", error);
    throw error;
  }
}

export async function getBybitWithdrawHistory(
  coin: string,
  limit: number = 10
) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getWithdrawalRecords({ coin, limit });
    return result;
  } catch (error) {
    console.error("Error fetching ByBit Withdraw History:", error);
    throw error;
  }
}

export async function getBybitOpenOrders(
  symbol: string,
  limit: number = 10
) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getActiveOrders({
      category: "option",
      symbol,
      limit,
      openOnly: 1,
    });
    return result;
  } catch (error) {
    console.error("Error fetching ByBit Open Orders:", error);
    throw error;
  }
}

export async function getBybitTradeHistory(
  symbol: string,
  limit: number = 10
) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getPublicTradingHistory({
      category: "option",
      symbol,
      limit,
    });
    return result;
  } catch (error) {
    console.error("Error fetching ByBit Trade History:", error);
    throw error;
  }
}

export async function getBybitAccountBalance(coin?: string) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getWalletBalance({
      accountType: "SPOT",
      coin,
    });
    return result;
  } catch (error) {
    console.error("Error fetching ByBit balances:", error);
    throw error;
  }
}

export async function createBybitOrder(
  orderType: any,
  side: any,
  size: string,
  symbol: string,
  qty: string,
  price?: string
) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.submitOrder({
      orderType,
      side,
      symbol,
      price,
      category: "spot",
      qty: qty,
    });
    return result;
  } catch (error) {
    console.error("Error creating ByBit order:", error);
    throw error;
  }
}

export async function cancelBybitOrder(
  symbol: string,
  clientOid?: string,
  orderId?: string
) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.cancelOrder({
      symbol,
      orderId,
      category: "spot",
    });
    return result;
  } catch (error) {
    console.error("Error cancelling ByBit order:", error);
    throw error;
  }
}

export async function getBybitOrderStatus({
  symbol,
  orderId,
  clientOid,
}: {
  symbol: string;
  orderId?: string;
  clientOid?: string;
}) {
  try {
    const bybitClient = await fetchClient({ testnet: true });
    const result = await bybitClient.getActiveOrders({
      orderId,
      category: "spot",
      openOnly: 1,
      symbol,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget order status:", error);
    throw error;
  }
}
