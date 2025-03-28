import dotenv from "dotenv";
import {
  MainClient,
  CancelReplaceMode,
  OrderSide,
  OrderType,
  ExchangeInfo,
  SymbolPrice,
  TradingDayTickerSingle,
  TradingDayTickerArray,
  OrderBookResponse,
  AccountInfo,
  DepositAddressResponse,
  WithdrawHistory,
  SpotOrder,
  RawTrade,
  ReplaceSpotOrderResultSuccess,
  CancelSpotOrderResult,
} from "binance";

dotenv.config();

/**
 * Creates and returns a Binance MainClient instance.
 *
 * @param {Object} options - Configuration options.
 * @param {boolean} options.testnet - Whether to use the Binance testnet. Defaults to false.
 * @returns {Promise<MainClient>} - A promise that resolves to a MainClient instance.
 * @throws {Error} - If Binance API keys or secrets are missing in .env file.
 */
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

/**
 * Retrieves the list of symbols from Binance exchange.
 *
 * @returns {Promise<ExchangeInfo>} - A promise that resolves to the exchange info.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the ticker price for a given symbol from Binance.
 *
 * @param {string} symbol - The symbol to retrieve the ticker for (e.g., 'BTCUSDT').
 * @returns {Promise<SymbolPrice | SymbolPrice[]>} - A promise that resolves to the ticker price.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the 24-hour ticker for a given symbol from Binance.
 *
 * @param {string} symbol - The symbol to retrieve the ticker for (e.g., 'BTCUSDT').
 * @param {"FULL" | "MINI" | undefined} type - The type of ticker to retrieve. Defaults to undefined (full).
 * @returns {Promise<TradingDayTickerSingle | TradingDayTickerArray[]>} - A promise that resolves to the trading day ticker.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the market depth (order book) for a given symbol from Binance.
 *
 * @param {string} symbol - The symbol to retrieve the market depth for (e.g., 'BTCUSDT').
 * @param {number} limit - The number of orders to retrieve. Defaults to 10.
 * @returns {Promise<OrderBookResponse>} - A promise that resolves to the market depth.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the account information from Binance.
 *
 * @returns {Promise<AccountInfo>} - A promise that resolves to the account information.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the deposit address for a given coin from Binance.
 *
 * @param {string} coin - The coin to retrieve the deposit address for (e.g., 'BTC').
 * @returns {Promise<DepositAddressResponse>} - A promise that resolves to the deposit address.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the withdrawal history for a given coin from Binance.
 *
 * @param {string} coin - The coin to retrieve the withdrawal history for (e.g., 'BTC').
 * @param {number} limit - The number of withdrawal records to retrieve. Defaults to 10.
 * @returns {Promise<WithdrawHistory[]>} - A promise that resolves to the withdrawal history.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the open orders from Binance.
 *
 * @param {string | undefined} symbol - The symbol to retrieve open orders for (e.g., 'BTCUSDT'). If undefined, retrieves all open orders.
 * @returns {Promise<SpotOrder[]>} - A promise that resolves to the open orders.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the trade history for a given symbol from Binance.
 *
 * @param {string} symbol - The symbol to retrieve the trade history for (e.g., 'BTCUSDT').
 * @param {number} limit - The number of trade records to retrieve. Defaults to 10.
 * @returns {Promise<RawTrade[]>} - A promise that resolves to the trade history.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Creates a new order on Binance.
 *
 * @param {Object} options - Order creation options.
 * @param {OrderSide} options.side - The side of the order (BUY or SELL).
 * @param {string} options.symbol - The symbol to trade (e.g., 'BTCUSDT').
 * @param {OrderType} options.type - The type of order (e.g., LIMIT, MARKET).
 * @param {number | undefined} options.price - The price for a limit order. Optional for MARKET orders.
 * @param {number | undefined} options.quantity - The quantity to trade. Optional.
 * @returns {Promise<object>} - A promise that resolves to the order creation result.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Amends (replaces) an existing order on Binance.
 *
 * @param {Object} options - Order amendment options.
 * @param {OrderSide} options.side - The side of the order (BUY or SELL).
 * @param {string} options.symbol - The symbol to trade (e.g., 'BTCUSDT').
 * @param {OrderType} options.type - The type of order (e.g., LIMIT, MARKET).
 * @param {CancelReplaceMode} options.cancelReplaceMode - The cancel replace mode.
 * @param {number | undefined} options.price - The new price for the order. Optional for MARKET orders.
 * @param {number | undefined} options.quantity - The new quantity to trade. Optional.
 * @returns {Promise<ReplaceSpotOrderResultSuccess<OrderType, undefined>>} - A promise that resolves to the order amendment result.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Cancels an order on Binance.
 *
 * @param {Object} options - Order cancellation options.
 * @param {string} options.symbol - The symbol of the order to cancel (e.g., 'BTCUSDT').
 * @param {number | undefined} options.orderId - The order ID to cancel. Optional if origClientOrderId is provided.
 * @param {string | undefined} options.origClientOrderId - The original client order ID to cancel. Optional if orderId is provided.
 * @returns {Promise<CancelSpotOrderResult>} - A promise that resolves to the order cancellation result.
 * @throws {Error} - If an error occurs during the API call.
 */
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

/**
 * Retrieves the status of an order from Binance.
 *
 * @param {Object} options - Order status retrieval options.
 * @param {string | undefined} options.orderId - The order ID to retrieve the status for. Optional if quoteId is provided.
 * @param {string | undefined} options.quoteId - The quote ID to retrieve the status for. Optional if orderId is provided.
 * @returns {Promise<any>} - A promise that resolves to the order status.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBinanceOrderStatus({
  orderId,
  quoteId,
}: {
  orderId?: string;
  quoteId?: string;
}) {
  try {
    const binanceClient = await fetchClient({ testnet: true });
    const result = await binanceClient.getOrderStatus({
      orderId,
      quoteId,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Binance order status:", error);
    throw error;
  }
}
