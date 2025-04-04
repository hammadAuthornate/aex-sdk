import dotenv from "dotenv";
import * as Mexc from "mexc-api-sdk";

dotenv.config();

async function fetchClient() {
  const MEXC_API_KEY = process.env.MEXC_API_KEY;
  const MEXC_API_SECRET = process.env.MEXC_API_SECRET;
  console.log(
    "mexc keys   key: ",
    MEXC_API_KEY?.slice(0, 5)?.concat("..."),
    " secret: ",
    MEXC_API_SECRET?.slice(0, 5)?.concat("...")
  );
  if (!MEXC_API_KEY || !MEXC_API_SECRET) {
    throw new Error("Mexc API Keys or secrets are missing in .env file");
  }
  const client = new Mexc.Spot(MEXC_API_KEY, MEXC_API_SECRET);
  return client;
}

type MEXC_TICKER_DATA = {
  symbol: string;
  price: string;
};
export async function getMexcTicker(symbol?: string) {
  try {
    const mexcClient = await fetchClient();
    const result: MEXC_TICKER_DATA | MEXC_TICKER_DATA[] =
      await mexcClient.tickerPrice(symbol);
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

type MEXC_MARKET_DEPTH = {
  lastUpdateId: number;
  bids: Array<Array<number>>;
  asks: Array<Array<number>>;
  timestamp: number;
};
export async function getMexcMarketDepth(symbol: string, limit: number = 10) {
  try {
    const mexcClient = await fetchClient();
    const result: MEXC_MARKET_DEPTH = await mexcClient.depth(symbol, {
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

type MEXC_ORDER = {
  symbol: string;
  orderId: number;
  orderListId: number;
  clientOrderId: string;
  price: string;
  origQty: string;
  executedQty: string;
  cummulativeQuoteQty: string;
  status: string;
  timeInForce: string;
  type: string;
  side: string;
  stopPrice: string;
  icebergQty: string;
  time: number;
  updateTime: number;
  isWorking: boolean;
  origQuoteOrderQty: string;
};
export async function getMexcOpenOrders(symbol: string) {
  try {
    const mexcClient = await fetchClient();
    const result: MEXC_ORDER[] = await mexcClient.openOrders(symbol);
    return result;
  } catch (error) {
    console.error("Error fetching Mexc Open Orders:", error);
    throw error;
  }
}

type MEXC_HISTORY = {
  id: string;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
  isBuyerMaker: boolean;
  isBestMatch: boolean;
  tradeType: "BID" | "ASK" | string;
};
export async function getMexcTradeHistory(symbol: string, limit: number = 10) {
  try {
    const mexcClient = await fetchClient();
    const result: MEXC_HISTORY[] = await mexcClient.historicalTrades(symbol, {
      limit,
    });
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
  symbol: string,
  side: string,
  orderType: string,
  quantity: string,
  price?: string
) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.newOrder(symbol, side, orderType, {
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
  orderId?: string,
  origClientOrderId?: string
) {
  try {
    const mexcClient = await fetchClient();
    const result = await mexcClient.cancelOrder(symbol, {
      orderId,
      origClientOrderId,
    });
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
