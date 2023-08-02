import { Injectable } from '@angular/core';
import { AuthStorage } from './auth.storage';
import { HttpClient } from '@angular/common/http';

interface SignIn {
  username: string;
  password: string;
}
interface AccessToken {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    readonly authStorage: AuthStorage,
    private readonly http: HttpClient
  ) {}

  signIn(value: SignIn) {
    return this.http.post<AccessToken>('/api/auth/login', value);
  }
}
