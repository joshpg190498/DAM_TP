import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class IrrigationsService {

  uri = API_URL + '/irrigations'

  constructor(private _http: HttpClient) { }

  insertLogRiego (electrovalveId: number, state: boolean): Promise<any> {
    const data = {
      electrovalveId,
      aperture: state ? 0 : 1
    }
    return firstValueFrom(this._http.post(this.uri + `/`, data))
  }

}
