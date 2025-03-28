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

describe('getBinanceData22222', () => {
  

  it('3333', async () => {
    const { getBinanceTicker } = require('./binance');
    const res = await getBinanceTicker();
    console.log("ressss ", res);
    // await expect(getBinanceTicker('BTCUSDT')).rejects.toThrow('Binance API Keys or secrets are missing in .env file');
    
  });
});