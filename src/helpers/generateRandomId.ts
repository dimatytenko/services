export function generateRandomId() {
  const min = 10000000;
  const max = 99999999;
  const randomId = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomId;
}
