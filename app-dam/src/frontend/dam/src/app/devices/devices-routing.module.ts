import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesPage } from './devices.page';
import { DevicesViewPage } from './view/devices-view.page';
import { DevicesMeasurementsPage } from './measurements/devices-measurements.page';
import { DevicesIrrigationsPage } from './irrigations/devices-irrigations.page';

const routes: Routes = [
  {
    path: '', // /devices
    component: DevicesPage
  },
  {
    path: ':id', // /devices/1
    component: DevicesViewPage
  },
  {
    path: ':id/measurements',
    component: DevicesMeasurementsPage
  },
  {
    path: ':id/irrigations',
    component: DevicesIrrigationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule {}
