type EXCHANGE_OPTION = "binance" | "bitget" | "bybit" | "mexc";

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

    default:
      return null;
  }
}
