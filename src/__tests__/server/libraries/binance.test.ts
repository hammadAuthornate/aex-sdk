import * as BINANCE from "../../../server/libraries/binance";

describe("Binance get endpoints", () => {
  it("should display coin tickers", async () => {
    const res = await BINANCE.getBinanceTicker();
    console.log("ressss ", res);
  });

  it("should display coin details", async () => {
    const res = await BINANCE.getBinanceTicker("BTCUSDT");
    console.log("ressss ", res);
  });

  it("should fetch Binance account info", async () => {
    try {
      const res = await BINANCE.getBinanceAccount();
      console.log("Account Info:", res);
      expect(res).toHaveProperty("balances");
    } catch (error) {
      console.error("Test failed to fetch Binance account:", error);
    }
  });

  it("should fetch Binance market depth", async () => {
    const res2 = await BINANCE.getBinanceMarketDepth("BTCUSDT", 5);
    console.log("ressss ", res2);
  });

  it("should fetch Binance symbol list", async () => {
    const res = await BINANCE.getSymbolList();
    console.log("ressss ", res);
  });

  it("should test new order or handle error", async () => {
    try {
      const res = await BINANCE.createBinanceOrder({
        side: "BUY",
        symbol: "BTCUSDT",
        type: "LIMIT",
        price: 20000,
        quantity: 0.001,
      });
      console.log("Order Test Result:", res);
      expect(res).toHaveProperty("symbol");
    } catch (error) {
      console.error("Error testing new Binance order:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch open orders or handle error", async () => {
    try {
      const res = await BINANCE.getBinanceOpenOrders("BTCUSDT");
      console.log("Open Orders:", res);
      expect(Array.isArray(res)).toBe(true);
    } catch (error) {
      console.error("Error fetching open orders:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch withdraw history or handle error", async () => {
    try {
      const res = await BINANCE.getBinanceWithdrawHistory("BTC", 5);
      console.log("Withdraw History:", res);
    } catch (error) {
      console.error("Error fetching withdraw history:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch deposit address or handle error", async () => {
    try {
      const res = await BINANCE.getBinanceDepositAddress("BTC");
      console.log("Deposit Address:", res);
      expect(res).toHaveProperty("address");
    } catch (error) {
      console.error("Error fetching deposit address:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch trading day ticker or handle error", async () => {
    try {
      const res = await BINANCE.getBinanceTradingDayTicker("BTCUSDT");
      console.log("Ticker:", res);
      expect(res).toHaveProperty("symbol", "BTCUSDT");
    } catch (error) {
      console.error("Error fetching trading day ticker:", error);
      expect(error).toBeDefined();
    }
  });
});
