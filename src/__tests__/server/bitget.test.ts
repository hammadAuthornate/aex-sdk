import * as Bitget from "../../server/libraries/bitget";

describe("getBitgetData", () => {
  it("test", async () => {
    const res = await Bitget.getBitgetTicker();
    console.log(res);
  });

  it("should create Bitget Order", async () => {
    try {
      const res = await Bitget.createBitgetOrder("post_only","limit","buy","BTCUSDT","43000");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to create Bitget Order:", error);
    }
  });

  it("should cancel Bitget Order", async () => {
    try {
      const res = await Bitget.cancelBitgetOrder("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Order:", error);
    }
  });

  it("should get Bitget Account", async () => {
    try {
      const res = await Bitget.getBitgetAccount();
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Account:", error);
    }
  });

  it("should get Bitget Market Depth", async () => {
    try {
      const res = await Bitget.getBitgetMarketDepth("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Market Depth:", error);
    }
  });

  it("should get Bitget Open Orders", async () => {
    try {
      const res = await Bitget.getBitgetOpenOrders("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Open Orders:", error);
    }
  });

  it("should get Bitget Ticker", async () => {
    try {
      const res = await Bitget.getBitgetTicker("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Ticker:", error);
    }
  });

  it("should get Bitget Trade History", async () => {
    try {
      const res = await Bitget.getBitgetTradeHistory("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Trade History:", error);
    }
  });

  it("should get Bitget Withdraw History", async () => {
    try {
      const res = await Bitget.getBitgetWithdrawHistory("BTCUSDT");
      console.log("res", res);
    } catch (error) {
      console.error("Test failed to cancel Bitget Withdraw History:", error);
    }
  });
});
