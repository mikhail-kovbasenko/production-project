import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = getQueryParams({
      first: 'value1',
    });
    expect(params).toEqual('?first=value1');
  });
  test('test with multiple param', () => {
    const params = getQueryParams({
      first: 'value1',
      second: 'value2',
      third: 'value3',
    });
    expect(params).toEqual('?first=value1&second=value2&third=value3');
  });
  test('test with undefined', () => {
    const params = getQueryParams({
      first: 'value1',
      second: 'value2',
      third: undefined,
    });
    expect(params).toEqual('?first=value1&second=value2');
  });
});
