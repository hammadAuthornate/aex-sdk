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
        await Promise.all([
          BINANCE.getBinanceTicker(symbol),
          BITGET.getBitgetTicker(symbol),
          BYBIT.getBybitTicker(symbol),
          MEXC.getMexcTicker(symbol),
        ]);

      let results = [];

      results.push(
        ...bitgetResult.data.map((d) => ({
          symbol: d.symbol,
          price: d.usdtVolume,
          exchange: "bitget",
        }))
      );

      results.push(
        ...bybitResult.result.list.map((d) => ({
          symbol: d.symbol,
          price: d.usdIndexPrice,
          exchange: "bybit",
        }))
      );

      if (Array.isArray(binanceResult)) {
        results.push(
          ...binanceResult.map((d) => ({
            symbol: d.symbol,
            price: d.price,
            exchange: "binance",
          }))
        );
      } else {
        results.push({
          symbol: binanceResult.symbol,
          price: binanceResult.price,
          exchange: "binance",
        });
      }

      if (Array.isArray(mexcResult)) {
        results.push(
          ...mexcResult.map((d) => ({
            symbol: d.symbol,
            price: d.price,
            exchange: "mexc",
          }))
        );
      } else {
        results.push({
          symbol: mexcResult.symbol,
          price: mexcResult.price,
          exchange: "mexc",
        });
      }

      return results;

    default:
      return null;
  }
}

export async function getCommonOrderBook(
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
        await Promise.all([
          BINANCE.getBinanceMarketDepth(symbol),
          BITGET.getBitgetMarketDepth(symbol),
          BYBIT.getBybitMarketDepth(symbol),
          MEXC.getMexcMarketDepth(symbol),
        ]);

      let results = [];

      results.push({
        exchange: "binance",
        bids: binanceResult.bids,
        asks: binanceResult.asks,
      });

      results.push({
        exchange: "bybit",
        bids: bybitResult.result.b,
        asks: bybitResult.result.a,
      });

      results.push({
        exchange: "bitget",
        bids: bitgetResult.data.bids,
        asks: bitgetResult.data.asks,
      });

      results.push({
        exchange: "mexc",
        bids: mexcResult.bids,
        asks: mexcResult.asks,
      });

      return results;
    default:
      return null;
  }
}
