type EXCHANGE_OPTION = "binance" | "bitget" | "bybit" | "mexc" | "ALL";

import * as BINANCE from "./libraries/binance";
import * as BITGET from "./libraries/bitget";
import * as BYBIT from "./libraries/bybit";
import * as MEXC from "./libraries/mexc";

export async function getCommonTickers(
  exchange: EXCHANGE_OPTION,
  symbol?: string
) {
  switch (exchange) {
    case "binance":
      return await BINANCE.getBinanceTicker(symbol);
    case "bitget":
      return await BITGET.getBitgetTicker(symbol);
    case "bybit":
      return await BYBIT.getBybitTicker(symbol);
    case "mexc":
      return await MEXC.getMexcTicker(symbol);
    case "ALL":
      const [binanceResult, bitgetResult, bybitResult, mexcResult] =
        await Promise.allSettled([
          BINANCE.getBinanceTicker(symbol),
          BITGET.getBitgetTicker(symbol),
          BYBIT.getBybitTicker(symbol),
          MEXC.getMexcTicker(symbol),
        ]);

      let results = [];

      if (binanceResult?.status === "fulfilled") {
        if (Array.isArray(binanceResult?.value)) {
          results.push(
            ...binanceResult?.value?.map((d) => ({
              symbol: d.symbol,
              price: d.price,
              exchange: "binance",
            }))
          );
        } else {
          results.push({
            symbol: binanceResult?.value?.symbol,
            price: binanceResult?.value?.price,
            exchange: "binance",
          });
        }
      }

      if (bitgetResult?.status === "fulfilled") {
        results.push(
          ...bitgetResult?.value?.data?.map((d) => ({
            symbol: d.symbol,
            price: d.usdtVolume,
            exchange: "bitget",
          }))
        );
      }

      if (bybitResult?.status === "fulfilled") {
        results.push(
          ...bybitResult?.value?.result?.list?.map((d) => ({
            symbol: d.symbol,
            price: d.usdIndexPrice,
            exchange: "bybit",
          }))
        );
      }

      if (mexcResult?.status === "fulfilled") {
        if (Array.isArray(mexcResult?.value)) {
          results.push(
            ...mexcResult?.value?.map((d) => ({
              symbol: d.symbol,
              price: d.price,
              exchange: "mexc",
            }))
          );
        } else {
          results.push({
            symbol: mexcResult?.value?.symbol,
            price: mexcResult?.value?.price,
            exchange: "mexc",
          });
        }
      }

      return results;

    default:
      return null;
  }
}

export async function getCommonMarketDepth(
  exchange: EXCHANGE_OPTION,
  symbol: string
) {
  switch (exchange) {
    case "binance":
      return await BINANCE.getBinanceMarketDepth(symbol);
    case "bitget":
      return await BITGET.getBitgetMarketDepth(symbol);
    case "bybit":
      return await BYBIT.getBybitMarketDepth(symbol);
    case "mexc":
      return await MEXC.getMexcMarketDepth(symbol);
    case "ALL":
      const [binanceResult, bitgetResult, bybitResult, mexcResult] =
        await Promise.allSettled([
          BINANCE.getBinanceMarketDepth(symbol),
          BITGET.getBitgetMarketDepth(symbol),
          BYBIT.getBybitMarketDepth(symbol),
          MEXC.getMexcMarketDepth(symbol),
        ]);

      let results = [];

      if (binanceResult?.status === "fulfilled")
        results.push({
          exchange: "binance",
          bids: binanceResult?.value?.bids,
          asks: binanceResult?.value?.asks,
          timestamp: binanceResult?.value?.lastUpdateId,
        });

      if (bybitResult?.status === "fulfilled")
        results.push({
          exchange: "bybit",
          bids: bybitResult?.value?.result?.b,
          asks: bybitResult?.value?.result?.a,
          timestamp: bybitResult?.value?.result.ts,
        });

      if (bitgetResult?.status === "fulfilled")
        results.push({
          exchange: "bitget",
          bids: bitgetResult?.value?.data?.bids,
          asks: bitgetResult?.value?.data?.asks,
          timestamp: bitgetResult?.value?.data?.ts,
        });

      if (mexcResult?.status === "fulfilled")
        results.push({
          exchange: "mexc",
          bids: mexcResult?.value?.bids,
          asks: mexcResult?.value?.asks,
          timestamp: mexcResult?.value?.timestamp,
        });

      return results;
    default:
      return null;
  }
}

export async function getCommonOpenOrders(
  exchange: EXCHANGE_OPTION,
  symbol: string
) {
  switch (exchange) {
    case "binance":
      return await BINANCE.getBinanceOpenOrders(symbol);
    case "bitget":
      return await BITGET.getBitgetOpenOrders(symbol);
    case "bybit":
      return await BYBIT.getBybitOpenOrders(symbol);
    case "mexc":
      return await MEXC.getMexcOpenOrders(symbol);
    case "ALL":
      const [binanceResult, bitgetResult, bybitResult, mexcResult] =
        await Promise.allSettled([
          BINANCE.getBinanceOpenOrders(symbol),
          BITGET.getBitgetOpenOrders(symbol),
          BYBIT.getBybitOpenOrders(symbol),
          MEXC.getMexcOpenOrders(symbol),
        ]);

      let results = [];
      if (binanceResult.status === "fulfilled") {
        results.push(
          ...binanceResult.value?.map((i) => ({
            status: i.status,
            side: i.side,
            price: i.price,
            qty: i.executedQty,
            type: i.type,
            symbol: i.symbol,
            timestamp: i.time,
          }))
        );
      }

      if (bitgetResult.status === "fulfilled") {
        results.push(
          ...bitgetResult?.value?.data?.map((i) => ({
            status: i.status,
            side: i.side,
            price: i.basePrice,
            qty: i.quoteVolume,
            type: i.orderType,
            symbol: i.symbol,
            timestamp: i.cTime,
          }))
        );
      }

      if (bybitResult.status === "fulfilled") {
        results.push(
          ...bybitResult?.value?.result?.list?.map((i) => ({
            status: i.orderStatus,
            side: i.side,
            price: i.price,
            qty: i.qty,
            type: i.orderType,
            symbol: i.symbol,
            timestamp: i.createdTime,
          }))
        );
      }

      if (mexcResult?.status === "fulfilled") {
        results.push(
          ...mexcResult?.value?.map((i) => ({
            status: i.status,
            side: i.side,
            price: i.price,
            qty: i.executedQty,
            type: i.type,
            symbol: i.symbol,
            timestamp: i.time,
          }))
        );
      }

      return results;
    default:
      return null;
  }
}

export async function getCommonTradeHistory(
  exchange: EXCHANGE_OPTION,
  symbol: string
) {
  switch (exchange) {
    case "binance":
      return await BINANCE.getBinanceTradeHistory(symbol);
    case "bitget":
      return await BITGET.getBitgetTradeHistory(symbol);
    case "bybit":
      return await BYBIT.getBybitTradeHistory(symbol);
    case "mexc":
      return await MEXC.getMexcTradeHistory(symbol);
    case "ALL":
      const [binanceResult, bitgetResult, bybitResult, mexcResult] =
        await Promise.allSettled([
          BINANCE.getBinanceTradeHistory(symbol),
          BITGET.getBitgetTradeHistory(symbol),
          BYBIT.getBybitTradeHistory(symbol),
          MEXC.getMexcTradeHistory(symbol),
        ]);

      let results = [];
      if (binanceResult.status === "fulfilled" && binanceResult?.value) {
        results.push(
          ...binanceResult.value?.map((i) => ({
            id: i.id,
            price: i.price,
            qty: i.qty,
            time: i.time,
            side: i.isBuyerMaker ? "Buy" : "Sell",
            exchange: "binance",
          }))
        );
      }

      if (bitgetResult.status === "fulfilled" && bitgetResult?.value?.data) {
        results.push(
          ...bitgetResult?.value?.data?.map((i) => ({
            id: i.tradeId,
            price: i.price,
            qty: i.size,
            time: Number(i.ts),
            side: i.side,
            exchange: "bitget",
          }))
        );
      }

      if (bybitResult.status === "fulfilled" && bybitResult?.value?.result) {
        results.push(
          ...bybitResult?.value?.result?.list?.map((i) => ({
            id: i.execId,
            price: i.price,
            qty: i.size,
            time: Number(i.time),
            side: i.side,
            exchange: "bybit",
          }))
        );
      }

      if (mexcResult?.status === "fulfilled" && mexcResult?.value) {
        results.push(
          ...mexcResult?.value?.map((i) => ({
            id: i.id,
            price: i.price,
            qty: i.qty,
            time: i.time,
            side: i.tradeType === "ASK" ? "Sell" : "Buy",
            exchange: "mexc",
          }))
        );
      }

      return results;
    default:
      return null;
  }
}
