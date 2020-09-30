import Cookies from 'js-cookie';
export default function network(endpoint = '', { body, ...customConfig } = {}) {
  const headers = {
    'Content-Type': "application/json;charset=utf-8'",
    Authorization: Cookies.get('token'),
  };
  const baseUrl = '/';
  const url = baseUrl + endpoint;
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };
  return fetch(url, config).then(async (res) => {
    const data = await res.json();
    console.table({ url, res });
    if (res.ok) {
      return data;
    } else return Promise.reject(data);
  });
}

network.get = (endpoint) => network(endpoint, { method: 'GET' });
network.post = (endPoint, body) =>
  network(endPoint, { method: 'POST', ...body });
network.put = (endPoint, body) => network(endPoint, { method: 'PUT', ...body });
network.delete = (endPoint) => network(endPoint, { method: 'DELETE' });
