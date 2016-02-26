const messages = [
  ['Successfully added item', 0, 1500],
  ['Successfully removed item', 0, 3000],
  ['Unable to add item', 1, 5000],
  ['Unable to remove item', 1, Infinity],
];

export default function generateRandomToast() {
  const message = messages[Math.floor(Math.random() * messages.length)];

  return {
    message: message[0],
    type: message[1],
    time: message[2],
  };
}
