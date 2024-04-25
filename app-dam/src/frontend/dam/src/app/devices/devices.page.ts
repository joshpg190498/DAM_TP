import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DevicesService } from '../services/devices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit, OnDestroy {

  devices: any = []

  constructor(private _devicesService: DevicesService,
    private _actRouter: ActivatedRoute) {
  }

  async ngOnInit() {
    this.getDevices()
  }

  async getDevices() {
    await this._devicesService.getDevices()
    .then((data) => {
      this.devices = data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  ionViewWillEnter () {
    console.log(`Me llegó el id: ${Number(this._actRouter.snapshot.paramMap.get('id'))}`)
  }

  ngOnDestroy(): void {
  }
}
