const AUTH_USER_NAME = 'user-name';

export type UserName = string;

export const getUserName = (): UserName => {
  const userName = localStorage.getItem(AUTH_USER_NAME);
  return userName ?? '';
};

export const saveUserName = (userName: UserName): void => {
  localStorage.setItem(AUTH_USER_NAME, userName);
};

export const dropUserName = (): void => {
  localStorage.removeItem(AUTH_USER_NAME);
};
