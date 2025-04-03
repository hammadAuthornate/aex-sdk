
describe('getBybitData', () => {
  it("test", async ()=>{
    const {getBybitTicker} = require("./bybit");
    const res = await getBybitTicker();
    console.log(res.result);
   })


  // const mockBybitClient = {
  //   getTickers: jest.fn(),
  // };

  // beforeEach(() => {
  //   (RestClientV5 as jest.Mock).mockReturnValue(mockBybitClient);
  //   (dotenv.config as jest.Mock).mockReturnValue({});
  //   process.env.BYBIT_API_KEY = 'test_api_key';
  //   process.env.BYBIT_API_SECRET = 'test_api_secret';
  // });

  // afterEach(() => {
  //   jest.clearAllMocks();
  //   delete process.env.BYBIT_API_KEY;
  //   delete process.env.BYBIT_API_SECRET;
  // });

  // it('should fetch Bybit data successfully', async () => {
  //   const mockResult = { result: { list: [{ lastPrice: '12345.67' }] } };
  //   mockBybitClient.getTickers.mockResolvedValue(mockResult);

  //   const result = await getBybitData('BTCUSDT');

  //   expect(mockBybitClient.getTickers).toHaveBeenCalledWith({ symbol: 'BTCUSDT', category: 'spot' });
  //   expect(result).toEqual(mockResult);
  // });

  // it('should throw an error on failed Bybit fetch', async () => {
  //   const mockError = new Error('Bybit API error');
  //   mockBybitClient.getTickers.mockRejectedValue(mockError);

  //   await expect(getBybitData('BTCUSDT')).rejects.toThrow('Bybit API error');
  // });

  // it('should throw an error if API keys are missing', async () => {
  //   delete process.env.BYBIT_API_KEY;
  //   await expect(getBybitData('BTCUSDT')).rejects.toThrow('Bybit API Keys or secrets are missing in .env file');
  // });
});