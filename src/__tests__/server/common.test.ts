import * as COMMON from "../../server/common";

describe("should test the common tickers function", ()=>{
    it("should get binance tickers", async ()=>{
        const binanceResults = await COMMON.getCommonTickers('binance', 'BTCUSDT');
        console.log("binanceResults", binanceResults);
        expect(binanceResults).not.toBeNull();
    })

    it("should get bybit tickers", async ()=>{
        const bybitResults = await COMMON.getCommonTickers('bybit', 'BTCUSDT');
        console.log("bybitResults", bybitResults);
        expect(bybitResults).not.toBeNull();
    })

    it("should get bitget tickers", async ()=>{
        const bitgetResults = await COMMON.getCommonTickers('bitget', 'BTCUSDT');
        console.log("bitgetResults", bitgetResults);
        expect(bitgetResults).not.toBeNull();
    })

    it("should get mexc tickers", async ()=>{
        const mexcResults = await COMMON.getCommonTickers('mexc', 'BTCUSDT');
        console.log("mexcResults", mexcResults);
        expect(mexcResults).not.toBeNull();
    })

    it("should get common tickers", async ()=>{
        const commonResults = await COMMON.getCommonTickers('ALL', 'BTCUSDT');
        console.log("commonResults", commonResults);
        expect(commonResults).not.toBeNull();
    })
})

describe("should test the common order book function", () => {
  it("should get binance order book", async ()=>{
      const binanceResults = await COMMON.getCommonOrderBook('binance', 'BTCUSDT');
      console.log("binanceResults order book", binanceResults);
      expect(binanceResults).not.toBeNull();
  })

  it("should get bybit order book", async ()=>{
      const bybitResults = await COMMON.getCommonOrderBook('bybit', 'BTCUSDT');
      console.log("bybitResults order book", bybitResults);
      expect(bybitResults).not.toBeNull();
  })

  it("should get bitget order book", async ()=>{
      const bitgetResults = await COMMON.getCommonOrderBook('bitget', 'BTCUSDT');
      console.log("bitgetResults order book", bitgetResults);
      expect(bitgetResults).not.toBeNull();
  })

  it("should get mexc order book", async ()=>{
      const mexcResults = await COMMON.getCommonOrderBook('mexc', 'BTCUSDT');
      console.log("mexcResults order book", mexcResults);
      expect(mexcResults).not.toBeNull();
  })

  it("should get common order book", async () => {
    const commonResults = await COMMON.getCommonOrderBook("ALL", "BTCUSDT");
    console.log("commonResults order book", commonResults);
    console.info("commonResults order book", JSON.stringify(commonResults));
    expect(commonResults).not.toBeNull();
  });
});
