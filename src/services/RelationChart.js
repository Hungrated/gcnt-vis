import request from '../utils/request';

export async function queryRelationChartData() {
  return request('/mock/relationChart.json');
}
