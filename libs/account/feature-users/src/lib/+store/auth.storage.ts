import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthStorage {
  get accessToken() {
    return localStorage.getItem('access-token');
  }

  set accessToken(value) {
    if (value) {
      localStorage.setItem('access-token', value);
    } else {
      localStorage.removeItem('access-token');
    }
  }
}
