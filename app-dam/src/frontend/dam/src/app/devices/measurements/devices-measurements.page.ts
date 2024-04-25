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

  deviceId: Number = 0
  devices: any = []

  constructor(private _devicesService: DevicesService,
    private _actRouter: ActivatedRoute) {
  }

  async ngOnInit() {
    this.getDevices()
  }

  async getDevices() {
    
  }

  ionViewWillEnter () {
    this.deviceId = Number(this._actRouter.snapshot.paramMap.get('id'))
  }

  // mouseMove$ = fromEvent(document, 'mousemove')

  // subscriptionMouseMove = this.mouseMove$.subscribe((evt: any) => {
  //   console.log(`Coords: ${evt.clientX} X ${evt.clientY} Y`)
  // })

  subscribe () {
    // this.subscription = this.observable$.subscribe((value) => {
    //   console.log(value)
    // })
  }

  unsubscribe () {
    // this.subscription.unsubscribe()
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
    // this.subscriptionMouseMove.unsubscribe()
  }
}
