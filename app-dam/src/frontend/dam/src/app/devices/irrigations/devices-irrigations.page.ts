import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DevicesService } from '../../services/devices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devices-irrigations',
  templateUrl: './devices-irrigations.page.html',
  styleUrls: ['./devices-irrigations.page.scss'],
})
export class DevicesIrrigationsPage implements OnInit, OnDestroy {

  deviceId: number = 0
  irrigations: any = []

  constructor(private _devicesService: DevicesService,
    private _actRouter: ActivatedRoute) {
  }

  async ngOnInit() {
    this.deviceId = Number(this._actRouter.snapshot.paramMap.get('id'))
    this.getDeviceIrrigations()
  }

  async getDeviceIrrigations() {
    this._devicesService.getDeviceIrrigations(this.deviceId)
      .then((data) => {
        console.log(data)
        this.irrigations = data
      })
      .catch((err) => {
        console.error(err)
      })
  }

  ngOnDestroy(): void {
  }
}
