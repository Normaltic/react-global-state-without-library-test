const store: Map<string, unknown> = new Map();

const listeners: Record<string, Set<() => void>> = {};

export function getSnapshot<T>(key: string, initialValue?: T) {
  if (store.has(key) === false) {
    store.set(key, initialValue);
  }
  return store.get(key) as T;
}

export function setSnapshot<T>(key: string, value: T) {
  store.set(key, value);
  listeners[key]?.forEach((listener) => listener());
}

export function subscribe(key: string, listener: () => void) {
  if (!listeners[key]) listeners[key] = new Set();
  listeners[key].add(listener);

  return () => {
    listeners[key].delete(listener);
  };
}
