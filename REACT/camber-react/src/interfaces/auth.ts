export interface IAuth {
  loggedIn: boolean;
  idToken: string | null;
  token: string | null;
  firstName: string | undefined;
  lastName: string | undefined;
}

export interface IAuthState {
  auth: IAuth | null;
  error: Error | string | null;
}
