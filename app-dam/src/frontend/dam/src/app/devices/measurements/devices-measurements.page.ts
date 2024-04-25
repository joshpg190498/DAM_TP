import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DevicesService } from '../../services/devices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devices-measurements',
  templateUrl: './devices-measurements.page.html',
  styleUrls: ['./devices-measurements.page.scss'],
})
export class DevicesMeasurementsPage implements OnInit, OnDestroy {

  deviceId: number = 0
  measurements: any = []

  constructor(private _devicesService: DevicesService,
    private _actRouter: ActivatedRoute) {
  }

  async ngOnInit() {
    this.deviceId = Number(this._actRouter.snapshot.paramMap.get('id'))
    this.getDeviceMeasurements()
  }

  async getDeviceMeasurements() {
    this._devicesService.getDeviceMeasurements(this.deviceId)
      .then((data) => {
        console.log(data)
        this.measurements = data
      })
      .catch((err) => {
        console.error(err)
      })
  }

  ngOnDestroy(): void {
  }
}
