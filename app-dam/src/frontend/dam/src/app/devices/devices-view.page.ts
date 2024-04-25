import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DevicesService } from '../services/devices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesViewPage implements OnInit, OnDestroy {

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
