import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', (): void => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const api = '/posts/1';
  beforeAll((): void => {
    jest.useFakeTimers();
  });
  beforeEach((): void => {
    jest.runOnlyPendingTimers();
  });
  afterEach((): void => {
    jest.clearAllMocks();
  });
  afterAll((): void => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async (): Promise<void> => {
    const spyOnCreateInstance: jest.SpyInstance<AxiosInstance> = jest.spyOn(
      axios,
      'create',
    );
    await throttledGetDataFromApi(api);
    expect(spyOnCreateInstance).lastCalledWith({ baseURL });
  });

  test('should perform request to correct provided url', async (): Promise<void> => {
    const spyOnGet = jest.spyOn(axios.Axios.prototype, 'get');
    await throttledGetDataFromApi(api);
    expect(spyOnGet).lastCalledWith(api);
  });

  test('should return response data', async (): Promise<void> => {
    type expectedDataTypes = {
      userId: number;
      id: number;
      title: string;
      body: string;
    };

    const expectedData: expectedDataTypes = {
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    };
    const res = await throttledGetDataFromApi(api);
    expect(res).toEqual(expect.objectContaining(expectedData));
  });
});
