import dotenv from "dotenv";
import {
  RestClientV2,
  SpotOrderForceV2,
  SpotOrderSideV2,
  SpotOrderTypeV2,
  APIResponse,
  SpotTickerV2,
  SpotOrderBookDepthV2,
  SpotAccountInfoV2,
  SpotDepositAddressV2,
  SpotWithdrawalRecordV2,
  SpotOpenOrderV2,
  SpotTradeV2,
  SpotOrderInfoV2,
} from "bitget-api";

dotenv.config();

/**
 * Creates and returns a Bitget RestClientV2 instance.
 *
 * @returns {Promise<RestClientV2>} - A promise that resolves to a RestClientV2 instance.
 * @throws {Error} - If Bitget API keys or secrets are missing in .env file.
 */
async function fetchClient() {
  const bitgetApiKey = process.env.BITGET_API_KEY;
  const bitgetApiSecret = process.env.BITGET_API_SECRET;
  const bitgetApiPass = process.env.BITGET_API_PASS;

  console.log("keys ", bitgetApiKey, bitgetApiSecret);
  if (!bitgetApiKey || !bitgetApiSecret) {
    throw new Error("Bitget API Keys or secrets are missing in .env file");
  }
  const client = new RestClientV2({
    apiKey: bitgetApiKey,
    apiSecret: bitgetApiSecret,
    apiPass: bitgetApiPass,
    recvWindow: 20000,
  });
  return client;
}

/**
 * Retrieves the ticker price for a given symbol from Bitget.
 *
 * @param {string | undefined} symbol - The symbol to retrieve the ticker for (e.g., 'BTCUSDT'). If undefined, retrieves all tickers.
 * @returns {Promise<APIResponse<SpotTickerV2[]>>} - A promise that resolves to the ticker price(s).
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetTicker(symbol?: string) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotTicker({ symbol });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget ticker:", error);
    throw error;
  }
}

/**
 * Retrieves the market depth (order book) for a given symbol from Bitget.
 *
 * @param {string} symbol - The symbol to retrieve the market depth for (e.g., 'BTCUSDT').
 * @param {number} limit - The number of orders to retrieve. Defaults to 10.
 * @returns {Promise<APIResponse<SpotOrderBookDepthV2>>} - A promise that resolves to the market depth.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetMarketDepth(symbol: string, limit: number = 10) {
  try {
    const bitgetClient = await fetchClient();
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

/**
 * Retrieves the account information from Bitget.
 *
 * @returns {Promise<APIResponse<SpotAccountInfoV2>>} - A promise that resolves to the account information.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetAccount() {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotAccount();
    return result;
  } catch (error) {
    console.error("Error fetching Bitget account:", error);
    throw error;
  }
}

/**
 * Retrieves the deposit address for a given coin from Bitget.
 *
 * @param {string} coin - The coin to retrieve the deposit address for (e.g., 'BTC').
 * @param {string} size - The network size.
 * @returns {Promise<APIResponse<SpotDepositAddressV2>>} - A promise that resolves to the deposit address.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetDepositAddress(coin: string, size: string) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotDepositAddress({ coin, size });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget Deposit Address:", error);
    throw error;
  }
}

/**
 * Retrieves the withdrawal history for a given coin from Bitget.
 *
 * @param {string} coin - The coin to retrieve the withdrawal history for (e.g., 'BTC').
 * @param {number} limit - The number of withdrawal records to retrieve. Defaults to 10.
 * @returns {Promise<APIResponse<SpotWithdrawalRecordV2[]>>} - A promise that resolves to the withdrawal history.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetWithdrawHistory(
  coin: string,
  limit: number = 10
) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotWithdrawalHistory({
      coin,
      limit: limit.toString(),
      endTime: "",
      startTime: "",
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget Withdraw History:", error);
    throw error;
  }
}

/**
 * Retrieves the open orders from Bitget.
 *
 * @param {string} symbol - The symbol to retrieve open orders for (e.g., 'BTCUSDT').
 * @param {number} limit - The number of open orders to retrieve. Defaults to 10.
 * @param {string | undefined} orderId - The order ID to retrieve a specific open order. Optional.
 * @returns {Promise<APIResponse<SpotOpenOrderV2[]>>} - A promise that resolves to the open orders.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetOpenOrders(
  symbol: string,
  limit: number = 10,
  orderId?: string
) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotOpenOrders({
      limit: limit.toString(),
      symbol,
      orderId,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget Open Orders:", error);
    throw error;
  }
}

/**
 * Retrieves the trade history for a given symbol from Bitget.
 *
 * @param {string} symbol - The symbol to retrieve the trade history for (e.g., 'BTCUSDT').
 * @param {number} limit - The number of trade records to retrieve. Defaults to 10.
 * @returns {Promise<APIResponse<SpotTradeV2[]>>} - A promise that resolves to the trade history.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetTradeHistory(
  symbol: string,
  limit: number = 10
) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotHistoricTrades({
      symbol,
      limit: limit.toString(),
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget Trade History:", error);
    throw error;
  }
}

/**
 * Retrieves the account balance from Bitget.
 *
 * @returns {Promise<APIResponse<{accountType: string;usdtBalance: string;}[]>>} - A promise that resolves to the account balance.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetAccountBalance() {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getBalances();
    return result;
  } catch (error) {
    console.error("Error fetching Bitget balances:", error);
    throw error;
  }
}

/**
 * Creates a new order on Bitget.
 *
 * @param {SpotOrderForceV2} force - The order force type.
 * @param {SpotOrderTypeV2} orderType - The order type.
 * @param {SpotOrderSideV2} side - The order side (BUY or SELL).
 * @param {string} size - The order size.
 * @param {string} symbol - The symbol to trade (e.g., 'BTCUSDT').
 * @param {string | undefined} price - The price for a limit order. Optional for market orders.
 * @returns {Promise<APIResponse<{orderId: string;clientOid: string;}>>} - A promise that resolves to the order creation result.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function createBitgetOrder(
  force: SpotOrderForceV2,
  orderType: SpotOrderTypeV2,
  side: SpotOrderSideV2,
  size: string,
  symbol: string,
  price?: string
) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.spotSubmitOrder({
      force,
      orderType,
      side,
      size,
      symbol,
      price,
    });
    return result;
  } catch (error) {
    console.error("Error creating Bitget order:", error);
    throw error;
  }
}

/**
 * Cancels an order on Bitget.
 *
 * @param {string} symbol - The symbol of the order to cancel (e.g., 'BTCUSDT').
 * @param {string | undefined} clientOid - The client order ID to cancel. Optional if orderId is provided.
 * @param {string | undefined} orderId - The order ID to cancel. Optional if clientOid is provided.
 * @returns {Promise<APIResponse<{orderId: string;clientOid: string;}>>} - A promise that resolves to the order cancellation result.
 * @throws {Error} - If an error occurs during the API call.
 */

export async function cancelBitgetOrder(
  symbol: string,
  clientOid?: string,
  orderId?: string
) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.spotCancelOrder({
      symbol,
      clientOid,
      orderId,
    });
    return result;
  } catch (error) {
    console.error("Error cancelling Bitget order:", error);
    throw error;
  }
}

/**
 * Retrieves the status of an order from Bitget.
 *
 * @param {Object} options - Order status retrieval options.
 * @param {string | undefined} options.orderId - The order ID to retrieve the status for. Optional if clientOid is provided.
 * @param {string | undefined} options.clientOid - The client order ID to retrieve the status for. Optional if orderId is provided.
 * @returns {Promise<APIResponse<SpotOrderInfoV2[]>>} - A promise that resolves to the order status.
 * @throws {Error} - If an error occurs during the API call.
 */
export async function getBitgetOrderStatus({
  orderId,
  clientOid,
}: {
  orderId?: string;
  clientOid?: string;
}) {
  try {
    const bitgetClient = await fetchClient();
    const result = await bitgetClient.getSpotOrder({
      orderId,
      clientOid,
    });
    return result;
  } catch (error) {
    console.error("Error fetching Bitget order status:", error);
    throw error;
  }
}
