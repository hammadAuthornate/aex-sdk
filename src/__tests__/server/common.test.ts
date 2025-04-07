import * as COMMON from "../../server/common";

describe("should test the common tickers function", () => {
  it("should get binance tickers", async () => {
    const binanceResults = await COMMON.getCommonTickers("binance");
    console.log("binanceResults", binanceResults);
    expect(binanceResults).not.toBeNull();
  });

  it("should get bybit tickers", async () => {
    const bybitResults = await COMMON.getCommonTickers("bybit");
    console.log("bybitResults", bybitResults);
    expect(bybitResults).not.toBeNull();
  });

  it("should get bitget tickers", async () => {
    const bitgetResults = await COMMON.getCommonTickers("bitget");
    console.log("bitgetResults", bitgetResults);
    expect(bitgetResults).not.toBeNull();
  });

  it("should get mexc tickers", async () => {
    const mexcResults = await COMMON.getCommonTickers("mexc");
    console.log("mexcResults", mexcResults);
    expect(mexcResults).not.toBeNull();
  });

  it("should get common tickers", async () => {
    const commonResults = await COMMON.getCommonTickers("ALL");
    console.log("commonResults", commonResults);
    expect(commonResults).not.toBeNull();
  });
});

describe("should test the common ticker function for BTC USDT", () => {
  it("should get binance ticker for BTC USDT", async () => {
    const binanceResults = await COMMON.getCommonTickers("binance", "BTCUSDT");
    console.log("binanceResults", binanceResults);
    expect(binanceResults).not.toBeNull();
  });

  it("should get bybit ticker for BTC USDT", async () => {
    const bybitResults = await COMMON.getCommonTickers("bybit", "BTCUSDT");
    console.log("bybitResults", bybitResults);
    expect(bybitResults).not.toBeNull();
  });

  it("should get bitget ticker for BTC USDT", async () => {
    const bitgetResults = await COMMON.getCommonTickers("bitget", "BTCUSDT");
    console.log("bitgetResults", bitgetResults);
    expect(bitgetResults).not.toBeNull();
  });

  it("should get mexc ticker for BTC USDT", async () => {
    const mexcResults = await COMMON.getCommonTickers("mexc", "BTCUSDT");
    console.log("mexcResults", mexcResults);
    expect(mexcResults).not.toBeNull();
  });

  it("should get common ticker for BTC USDT", async () => {
    const commonResults = await COMMON.getCommonTickers("ALL", "BTCUSDT");
    console.log("commonResults", commonResults);
    expect(commonResults).not.toBeNull();
  });
});

describe("should test the common order book function", () => {
  it("should get binance order book", async () => {
    const binanceResults = await COMMON.getCommonMarketDepth(
      "binance",
      "BTCUSDT"
    );
    console.log("binanceResults order book", binanceResults);
    expect(binanceResults).not.toBeNull();
  });

  it("should get bybit order book", async () => {
    const bybitResults = await COMMON.getCommonMarketDepth("bybit", "BTCUSDT");
    console.log("bybitResults order book", bybitResults);
    expect(bybitResults).not.toBeNull();
  });

  it("should get bitget order book", async () => {
    const bitgetResults = await COMMON.getCommonMarketDepth(
      "bitget",
      "BTCUSDT"
    );
    console.log("bitgetResults order book", bitgetResults);
    expect(bitgetResults).not.toBeNull();
  });

  it("should get mexc order book", async () => {
    const mexcResults = await COMMON.getCommonMarketDepth("mexc", "BTCUSDT");
    console.log("mexcResults order book", mexcResults);
    expect(mexcResults).not.toBeNull();
  });

  it("should get common order book", async () => {
    const commonResults = await COMMON.getCommonMarketDepth("ALL", "BTCUSDT");
    console.log("commonResults order book", commonResults);
    console.log("commonResults order book", JSON.stringify(commonResults));
    expect(commonResults).not.toBeNull();
  });
});

describe("should test the common open orders function", () => {
  it("should get binance open orders", async () => {
    const binanceResults = await COMMON.getCommonOpenOrders(
      "binance",
      "BTCUSDT"
    );
    console.log("binanceResults open orders", binanceResults);
    expect(binanceResults).not.toBeNull();
  });

  it("should get bybit open orders", async () => {
    const bybitResults = await COMMON.getCommonOpenOrders("bybit", "BTCUSDT");
    console.log("bybitResults open orders", bybitResults);
    expect(bybitResults).not.toBeNull();
  });

  it("should get bitget open orders", async () => {
    const bitgetResults = await COMMON.getCommonOpenOrders("bitget", "BTCUSDT");
    console.log("bitgetResults open orders", bitgetResults);
    expect(bitgetResults).not.toBeNull();
  });

  it("should get mexc open orders", async () => {
    const mexcResults = await COMMON.getCommonOpenOrders("mexc", "BTCUSDT");
    console.log("mexcResults open orders", mexcResults);
    expect(mexcResults).not.toBeNull();
  });

  it("should get common open orders", async () => {
    const commonResults = await COMMON.getCommonOpenOrders("ALL", "BTCUSDT");
    console.log("commonResults open orders", commonResults);
    expect(commonResults).not.toBeNull();
  });
});

describe("should test the common trade history function", () => {
  it("should get binance trade history", async () => {
    const binanceResults = await COMMON.getCommonTradeHistory(
      "binance",
      "BTCUSDT"
    );
    console.log("binanceResults trade history", binanceResults);
    expect(binanceResults).not.toBeNull();
  });

  it("should get bybit trade history", async () => {
    const bybitResults = await COMMON.getCommonTradeHistory("bybit", "BTCUSDT");
    console.log("bybitResults trade history", bybitResults);
    expect(bybitResults).not.toBeNull();
  });

  it("should get bitget trade history", async () => {
    const bitgetResults = await COMMON.getCommonTradeHistory(
      "bitget",
      "BTCUSDT"
    );
    console.log("bitgetResults trade history", bitgetResults);
    expect(bitgetResults).not.toBeNull();
  });

  it("should get mexc trade history", async () => {
    const mexcResults = await COMMON.getCommonTradeHistory("mexc", "BTCUSDT");
    console.log("mexcResults trade history", mexcResults);
    expect(mexcResults).not.toBeNull();
  });

  it("should get common trade history", async () => {
    const commonResults = await COMMON.getCommonTradeHistory("ALL", "BTCUSDT");
    console.log("commonResults trade history", commonResults);
    expect(commonResults).not.toBeNull();
  });
});

describe("should test the common account info function", () => {
  it("should get binance account info", async () => {
    const binanceResults = await COMMON.getCommonAccountInfo("binance");
    console.log("binanceResults account info", binanceResults);
    expect(binanceResults).not.toBeNull();
  });

  it("should get bybit account info", async () => {
    const bybitResults = await COMMON.getCommonAccountInfo("bybit");
    console.log("bybitResults account info", bybitResults);
    expect(bybitResults).not.toBeNull();
  });

  it("should get bitget account info", async () => {
    const bitgetResults = await COMMON.getCommonAccountInfo("bitget");
    console.log("bitgetResults account info", bitgetResults);
    expect(bitgetResults).not.toBeNull();
  });

  it("should get mexc account info", async () => {
    const mexcResults = await COMMON.getCommonAccountInfo("mexc");
    console.log("mexcResults account info", mexcResults);
    expect(mexcResults).not.toBeNull();
  });

  it("should get common account info", async () => {
    const commonResults = await COMMON.getCommonAccountInfo("ALL");
    console.log("commonResults account info", commonResults);
    expect(commonResults).not.toBeNull();
  });
});
