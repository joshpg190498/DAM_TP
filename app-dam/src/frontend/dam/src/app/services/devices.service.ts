import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  uri = API_URL + '/devices'

  constructor(private _http: HttpClient) { }

  getDevices (): Promise<any> {
    return firstValueFrom(this._http.get(this.uri + '/'))
  }

}
