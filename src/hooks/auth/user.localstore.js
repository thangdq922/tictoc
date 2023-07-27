
const USER_LOCAL_STORAGE_KEY = 'user';

export function saveUser(user) {
  localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export function getUser() {
  const userJson = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return JSON.parse(userJson)
}

export function removeUser() {
  localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}
