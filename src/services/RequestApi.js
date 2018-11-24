import request from '../utils/request';

export async function queryMapData() {
  return request('/mock/test.json');
}

export async function queryRelationChartData() {
  return request('/mock/relationChart.json');
}
