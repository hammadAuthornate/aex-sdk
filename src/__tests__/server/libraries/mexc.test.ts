import * as MEXC from "../../../server/libraries/mexc";

describe("test Mexc library", () => {
  it("tickers", async () => {
    const ticker = await MEXC.getMexcTicker();
    console.log("tickers ", ticker);
    expect(ticker).not.toBeNull();
  });

  it("ticker symbol", async () => {
    const ticker = await MEXC.getMexcTicker("BTCUSDT");
    console.log("ticker ", ticker);
    expect(ticker).not.toBeNull();
  });

  it("exchange info", async () => {
    const exchange = await MEXC.getMexcExchangeInfo("BTCUSDT");
    console.log("exchange ", exchange);
    expect(exchange).not.toBeNull();
  });

  it("market depth", async () => {
    const depth = await MEXC.getMexcMarketDepth("BTCUSDT");
    console.log("depth ", depth);
    expect(depth).not.toBeNull();
  });

  it("trade history", async () => {
    const history = await MEXC.getMexcTradeHistory("BTCUSDT");
    console.log("history ", history);
    expect(history).not.toBeNull();
  });

  it("withdraw history", async () => {
    const withdraw = await MEXC.getMexcWithdrawHistory("BTCUSDT");
    console.log("withdraw ", withdraw);
    expect(withdraw).not.toBeNull();
  });

  it("open orders", async () => {
    const open = await MEXC.getMexcOpenOrders("BTCUSDT");
    console.log("open ", open);
    expect(open).not.toBeNull();
  });

  it("account", async () => {
    const account = await MEXC.getMexcAccount();
    console.log("account ", account);
    expect(account).not.toBeNull();
  });

  test.skip("create order", async () => {
    const create = await MEXC.createMexcOrder(
      "BTCUSDT",
      "BUY",
      "LIMIT",
      "1",
      "1"
    );
    console.log("create order ", create);
    expect(create).not.toBeNull();
  });

  test.skip("cancel order", async () => {
    const cancel = await MEXC.cancelMexcOrder("BTCUSDT");
    console.log("cancel order ", cancel);
    expect(cancel).not.toBeNull();
  });
});
