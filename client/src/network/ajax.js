import network from './network';

export function read(endPoint) {
  return network.get(endPoint);
}

export function create(endPoint, body = {}) {
  return network.post(endPoint, { body });
}

export function update(endPoint, body = {}) {
  return network.put(endPoint, { body });
}

export function remove(endPoint) {
  return network.delete(endPoint);
}
