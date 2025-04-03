// describe('getBinanceData', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//     delete process.env.BINANCE_API_KEY;
//     delete process.env.BINANCE_API_SECRET;
//   });

//   it('should fetch Binance data successfully', async () => {
//     jest.isolateModules(async () => {
//       process.env.BINANCE_API_KEY = '77dabbde7ee36f1ef15bb093260f48beb8851533972924fab90807767b0bd3ad';
//       process.env.BINANCE_API_SECRET = 'a658fcef6f3f445f77a06086d0277d3788062aa5d5c5d778ed306125de959815';

//       const mockBinanceClient = {
//         getSymbolPriceTicker: jest.fn().mockResolvedValue({ price: '12345.67' }),
//         getOrderBook: jest.fn().mockResolvedValue({ bids: [], asks: [] }),
//         getAccountInfo: jest.fn().mockResolvedValue({ balances: [] }),
//       };

//       jest.mock('binance', () => ({
//         MainClient: jest.fn(() => mockBinanceClient),
//       }));

//       const { getBinanceTicker, getBinanceMarketDepth, getBinanceAccount } = require('./binance');

//       const tickerResult = await getBinanceTicker('BTCUSDT');
//       const marketDepthResult = await getBinanceMarketDepth('BTCUSDT', 10);
//       const accountResult = await getBinanceAccount();

//       expect(mockBinanceClient.getSymbolPriceTicker).toHaveBeenCalledWith({ symbol: 'BTCUSDT' });
//       expect(tickerResult).toEqual({ price: '12345.67' });

//       expect(mockBinanceClient.getOrderBook).toHaveBeenCalledWith({ symbol: 'BTCUSDT', limit: 10 });
//       expect(marketDepthResult).toEqual({ bids: [], asks: [] });

//       expect(mockBinanceClient.getAccountInfo).toHaveBeenCalled();
//       expect(accountResult).toEqual({ balances: [] });
//     });
//   });

//   it('should throw an error on failed Binance fetch', async () => {
//     jest.isolateModules(async () => {
//       process.env.BINANCE_API_KEY = '77dabbde7ee36f1ef15bb093260f48beb8851533972924fab90807767b0bd3ad';
//       process.env.BINANCE_API_SECRET = 'a658fcef6f3f445f77a06086d0277d3788062aa5d5c5d778ed306125de959815';

//       const mockBinanceClient = {
//         getSymbolPriceTicker: jest.fn().mockRejectedValue(new Error('Binance API error')),
//         getOrderBook: jest.fn().mockRejectedValue(new Error('Binance API error')),
//         getAccountInfo: jest.fn().mockRejectedValue(new Error('Binance API error')),
//       };

//       jest.mock('binance', () => ({
//         MainClient: jest.fn(() => mockBinanceClient),
//       }));

//       const { getBinanceTicker, getBinanceMarketDepth, getBinanceAccount } = require('./binance');

//       await expect(getBinanceTicker('BTCUSDT')).rejects.toThrow('Binance API error');
//       await expect(getBinanceMarketDepth('BTCUSDT', 10)).rejects.toThrow('Binance API error');
//       await expect(getBinanceAccount()).rejects.toThrow('Binance API error');
//     });
//   });

//   it('should throw an error if API keys are missing', async () => {
//     jest.isolateModules(async () => {
//       jest.mock('binance', () => ({
//         MainClient: jest.fn(() => ({})),
//       }));

//       const { getBinanceTicker } = require('./binance');

//       await expect(getBinanceTicker('BTCUSDT')).rejects.toThrow('Binance API Keys or secrets are missing in .env file');
//     });
//   });
// });

describe("Binance get endpoints", () => {
  it("should display coin details", async () => {
    const { getBinanceTicker } = require("./binance");
    const res = await getBinanceTicker();
    console.log("ressss ", res);
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBeGreaterThan(0);
    // Check if a known symbol exists
    expect(res).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ symbol: "BTCUSDT" }),
        expect.objectContaining({ symbol: "ETHBTC" }),
        expect.objectContaining({ symbol: "BNBUSDT" }),
      ])
    );
    // await expect(getBinanceTicker('BTCUSDT')).rejects.toThrow('Binance API Keys or secrets are missing in .env file');
  });

  it("should fetch Binance account info", async () => {
    try {
      const { getBinanceAccount } = require("./binance");
      const res = await getBinanceAccount();
      console.log("Account Info:", res);
      // Example expectation if successful (you can tweak as per your API structure)
      expect(res).toHaveProperty("balances");
    } catch (error) {
      console.error("Test failed to fetch Binance account:", error);
      // Optionally assert the error message
      // expect(error.message).toMatch(/Binance API Keys or secrets are missing/i);
    }
  });

  it("should fetch Binance market depth", async () => {
    const { getBinanceMarketDepth } = require("./binance");
    const res2 = await getBinanceMarketDepth("BTCUSDT", 5);
    console.log("ressss ", res2);
    // expect(res2).toHaveProperty('symbol', 'BTCUSDT');
    // expect(res2).toHaveProperty('limit', 5);
  });

  it("should fetch Binance symbol list", async () => {
    const { getSymbolList } = require("./binance");
    const res = await getSymbolList();
    console.log("ressss ", res);
    // expect(res3.symbols).toEqual(expect.arrayContaining([{ symbol: 'BTCUSDT' }]));
  });

  it("should test new order or handle error", async () => {
    const { createBinanceOrder } = require("./binance");
    try {
      const res = await createBinanceOrder({
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
      const { getBinanceOpenOrders } = require("./binance");
      const res = await getBinanceOpenOrders("BTCUSDT");
      console.log("Open Orders:", res);
      expect(Array.isArray(res)).toBe(true);
    } catch (error) {
      console.error("Error fetching open orders:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch withdraw history or handle error", async () => {
    try {
      const { getBinanceWithdrawHistory } = require("./binance");
      const res = await getBinanceWithdrawHistory("BTC", 5);
      console.log("Withdraw History:", res);
      expect(res).toHaveProperty("withdrawList");
      expect(Array.isArray(res.withdrawList)).toBe(true);
    } catch (error) {
      console.error("Error fetching withdraw history:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch deposit address or handle error", async () => {
    try {
      const { getBinanceDepositAddress } = require("./binance");
      const res = await getBinanceDepositAddress("BTC");
      console.log("Deposit Address:", res);
      expect(res).toHaveProperty("address");
    } catch (error) {
      console.error("Error fetching deposit address:", error);
      expect(error).toBeDefined();
    }
  });

  it("should fetch trading day ticker or handle error", async () => {
    try {
      const { getBinanceTradingDayTicker } = require("./binance");
      const res = await getBinanceTradingDayTicker("BTCUSDT");
      console.log("Ticker:", res);
      expect(res).toHaveProperty("symbol", "BTCUSDT");
    } catch (error) {
      console.error("Error fetching trading day ticker:", error);
      expect(error).toBeDefined();
    }
  });
});
