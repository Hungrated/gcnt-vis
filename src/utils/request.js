import fetch from 'dva/fetch';

function parseJSON (response) {
  return response.json();
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  console.error(`请求错误 ${response.status}: ${response.url}`,
    response.statusText);
  const error = new Error(response.statusText);
  error.response = response;
  console.log(error);
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request (url, options) {

  const defaultOptions = {
    credentials: 'include'
  };
  const newOptions = {...defaultOptions, ...options};

  newOptions.headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'origin': 'localhost:9001',
    ...newOptions.headers
  };

  return fetch(url, newOptions).
    then(checkStatus).
    then(parseJSON).
    then(data => ({data})).
    catch(err => ({err}));
}
