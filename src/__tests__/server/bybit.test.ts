import * as Bybit from "../../server/libraries/bybit";

describe("get Bybit Data", () => {
  it("test", async () => {
    const res = await Bybit.getBybitTicker("BTCUSDT");
    console.log(res.result);
  });

  it("should cancel Bybit Order", async () => {
    try {
      const res = await Bybit.cancelBybitOrder("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bybit Order:", error);
    }
  });

  it("should fetch Bybit account info", async () => {
    try {
      const res = await Bybit.getBybitAccount();
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit account info:", error);
    }
  });

  it("should fetch get Bybit Market Depth", async () => {
    try {
      const res = await Bybit.getBybitMarketDepth("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit Market Depth:", error);
    }
  });

  it("should fetch Bybit Open Orders", async () => {
    try {
      const res = await Bybit.getBybitOpenOrders("BTCUSDT", "BTC");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit Open Orders:", error);
    }
  });

  it("should fetch Bybit Order Status", async () => {
    try {
      const res = await Bybit.getBybitOrderStatus({ symbol: "BTCUSDT" });
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit Order Status:", error);
    }
  });

  it("should fetch Bybit Ticker", async () => {
    try {
      const res = await Bybit.getBybitTicker("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit Ticker:", error);
    }
  });

  it("should fetch Bybit Trade History", async () => {
    try {
      const res = await Bybit.getBybitTradeHistory("BTCUSDT", "BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit Trade History:", error);
    }
  });

  it("should fetch Bybit Withdraw History", async () => {
    try {
      const res = await Bybit.getBybitWithdrawHistory("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to fetch Bybit Withdraw History:", error);
    }
  });
});
