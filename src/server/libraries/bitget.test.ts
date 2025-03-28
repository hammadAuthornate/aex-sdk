import { getBitgetData } from './bitget';
import { RestClientV2 } from 'bitget-api';
import dotenv from 'dotenv';

jest.mock('bitget-api');
jest.mock('dotenv');

describe('getBitgetData', () => {
  const mockBitgetClient = {
    getSpotTicker: jest.fn(),
  };

  beforeEach(() => {
    (RestClientV2 as jest.Mock).mockReturnValue(mockBitgetClient);
    (dotenv.config as jest.Mock).mockReturnValue({});
    process.env.BITGET_API_KEY = 'test_api_key';
    process.env.BITGET_API_SECRET = 'test_api_secret';
  });

  afterEach(() => {
    jest.clearAllMocks();
    delete process.env.BITGET_API_KEY;
    delete process.env.BITGET_API_SECRET;
  });

  it('should fetch Bitget data successfully', async () => {
    const mockResult = { last: '12345.67' };
    mockBitgetClient.getSpotTicker.mockResolvedValue(mockResult);

    const result = await getBitgetData('BTCUSDT_SPBL');

    expect(mockBitgetClient.getSpotTicker).toHaveBeenCalledWith({ symbol: 'BTCUSDT_SPBL' });
    expect(result).toEqual(mockResult);
  });

  it('should throw an error on failed Bitget fetch', async () => {
    const mockError = new Error('Bitget API error');
    mockBitgetClient.getSpotTicker.mockRejectedValue(mockError);

    await expect(getBitgetData('BTCUSDT_SPBL')).rejects.toThrow('Bitget API error');
  });

  it('should throw an error if API keys are missing', async () => {
    delete process.env.BITGET_API_KEY;
    await expect(getBitgetData('BTCUSDT_SPBL')).rejects.toThrow('Bitget API Keys or secrets are missing in .env file');
  });
});