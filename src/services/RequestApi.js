import request from '../utils/request';

export async function queryMapData() {
  return request('/mock/test.json');
}
