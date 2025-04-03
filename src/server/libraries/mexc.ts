import dotenv from "dotenv";
import * as Mexc from "mexc-api-sdk";

dotenv.config();

async function fetchClient() {
  const client = new Mexc.Spot(
    process.env.MEXC_API_KEY,
    process.env.MEXC_API_SECRET
  );
  console.log("mexc client ", client);
  return client;
}

export async function getMexcTicker(symbol: string) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.tickerPrice(symbol);
    return result;
  } catch (error) {
    console.error("Error fetching Mexc ticker:", error);
    throw error;
  }
}

export async function getMexcExchangeInfo(symbol: string) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.exchangeInfo({ symbol });
    return result;
  } catch (error) {
    console.error("Error fetching Mexc ticker:", error);
    throw error;
  }
}

export async function getMexcMarketDepth(symbol: string, limit: number = 10) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.depth(symbol, {
      limit,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Mexc market depth:", error);
    throw error;
  }
}

export async function getMexcAccount() {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.accountInfo();
    return result;
  } catch (error) {
    console.error("Error fetching Mexc account:", error);
    throw error;
  }
}

// export async function getMexcDepositAddress(coin: string, size: string) {
//   try {
//     const mexcClient = await fetchClient();
//     const result = await mexcClient.getMasterDepositAddress(coin);
//     return result;
//   } catch (error) {
//     console.error("Error fetching Mexc Deposit Address:", error);
//     throw error;
//   }
// }

export async function getMexcWithdrawHistory(coin: string, limit: number = 10) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.trades(coin, { limit });
    return result;
  } catch (error) {
    console.error("Error fetching Mexc Withdraw History:", error);
    throw error;
  }
}

export async function getMexcOpenOrders(
  coin: string,
  symbol: string,
  limit: number = 10
) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.openOrders(symbol);
    return result;
  } catch (error) {
    console.error("Error fetching Mexc Open Orders:", error);
    throw error;
  }
}

export async function getMexcTradeHistory(
  coin: string,
  symbol: string,
  limit: number = 10
) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.historicalTrades(symbol, { limit });
    return result;
  } catch (error) {
    console.error("Error fetching Mexc Trade History:", error);
    throw error;
  }
}

// export async function getMexcAccountBalance(coin?: string) {
//   try {
//     const mexcClient = await fetchClient();
//     const result = await mexcClient.getWalletBalance({
//       accountType: "SPOT",
//       coin,
//     });
//     return result;
//   } catch (error) {
//     console.error("Error fetching Mexc balances:", error);
//     throw error;
//   }
// }

export async function createMexcOrder(
  orderType: string,
  side: string,
  size: string,
  symbol: string,
  quantity: string,
  price?: string
) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.newOrderTest(symbol, side, orderType, {
      quantity,
      price,
    });
    return result;
  } catch (error) {
    console.error("Error creating Mexc order:", error);
    throw error;
  }
}

export async function cancelMexcOrder(
  symbol: string,
  clientOid?: string,
  orderId?: string
) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.cancelOrder(symbol, { orderId });
    return result;
  } catch (error) {
    console.error("Error cancelling Mexc order:", error);
    throw error;
  }
}

export async function getMexcOrderStatus({
  symbol,
  orderId,
}: {
  symbol: string;
  orderId?: string;
}) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.allOrders(symbol, {
      orderId,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget order status:", error);
    throw error;
  }
}
