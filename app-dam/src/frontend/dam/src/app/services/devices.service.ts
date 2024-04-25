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

  getDevice (id: number): Promise<any> {
    return firstValueFrom(this._http.get(this.uri + `/${id}`))
  }

  getLastDeviceMeasurement (id: number): Promise<any> {
    return firstValueFrom(this._http.get(this.uri + `/${id}/lastMeasurement`))
  }

  getLastValveState (id: number): Promise<any> {
    return firstValueFrom(this._http.get(this.uri + `/${id}/lastValveState`))
  }

  getDeviceMeasurements (id: number): Promise<any> {
    return firstValueFrom(this._http.get(this.uri + `/${id}/measurements`))
  }

  getDeviceIrrigations (id: number): Promise<any> {
    return firstValueFrom(this._http.get(this.uri + `/${id}/irrigations`))
  }
}
