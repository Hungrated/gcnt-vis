import request from '../utils/request';

export async function queryMapData () {
  return request('/mock/connection.json');
}

export async function queryRelationChartData () {
  return request('/mock/relationChart.json');
}

export async function queryStatisticsChartData () {
  return request('/mock/relationChart.json');
}

export async function searchWithParams () {
  return request('/mock/relationChart.json');
}
