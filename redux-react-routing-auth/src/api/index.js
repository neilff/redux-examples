import uuid from 'node-uuid';

const usersMock = [
  {
    username: 'user',
    password: 'pass',
  },
];

export function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    const foundUsers = usersMock.filter((user) => user.username === username);

    const isValid = (
      foundUsers.length === 1 &&
      foundUsers[0].password === password
    );

    if (isValid) {
      setTimeout(() => resolve({
        id: uuid.v1(),
        username: username,
      }), 750);
    } else {
      setTimeout(() => reject({
        username,
      }), 750);
    }
  });
}
