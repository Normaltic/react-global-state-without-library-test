let counter = 0;

let listners: Array<() => void> = [];

export function getSnapshot() {
  return counter;
}

export function setSnapShot(value: number) {
  counter = value;
  listners.forEach((listner) => listner());
}

export function subscribe(listner: () => void) {
  listners.push(listner);

  return () => {
    listners = listners.filter((fn) => fn !== listner);
  };
}
