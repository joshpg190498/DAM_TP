import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router'
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = API_URL + '/auth'

  constructor(private _http: HttpClient, private _router: Router) { }

  async login (username: string, password: string) {
    let response = await firstValueFrom(this._http.post<any>(
      this.uri + '/login', {username: username, password: password}
    ))
    if (response !== null) {
      this._router.navigate(['/home'])
      localStorage.setItem('token', response.token)
    }
  }

  logout () {
    localStorage.removeItem('token')
  }

  public get logIn (): boolean {
    return (localStorage.getItem('token') !== null)
  }
}
