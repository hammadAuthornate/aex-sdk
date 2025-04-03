describe('getBitgetData', () => {
 it("test", async ()=>{
  const {getBitgetTicker} = require("./bitget");
  const res = await getBitgetTicker();
  console.log(res);
 })



  // it('should fetch Bitget data successfully', async () => {
  //   const mockResult = { last: '12345.67' };
  //   mockBitgetClient.getSpotTicker.mockResolvedValue(mockResult);
  //   const result = await getBitgetData('BTCUSDT_SPBL');
  //   expect(mockBitgetClient.getSpotTicker).toHaveBeenCalledWith({ symbol: 'BTCUSDT_SPBL' });
  //   expect(result).toEqual(mockResult);
  // });

  // it('should throw an error on failed Bitget fetch', async () => {
  //   const mockError = new Error('Bitget API error');
  //   mockBitgetClient.getSpotTicker.mockRejectedValue(mockError);
  //   await expect(getBitgetData('BTCUSDT_SPBL')).rejects.toThrow('Bitget API error');
  // });

  // it('should throw an error if API keys are missing', async () => {
  //   delete process.env.BITGET_API_KEY;
  //   await expect(getBitgetData('BTCUSDT_SPBL')).rejects.toThrow('Bitget API Keys or secrets are missing in .env file');
  // });
});