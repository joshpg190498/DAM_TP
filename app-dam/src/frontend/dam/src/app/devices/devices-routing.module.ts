import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesPage } from './devices.page';
import { DevicesViewPage } from './devices-view.page';

const routes: Routes = [
  {
    path: '', // /devices
    component: DevicesPage
  },
  {
    path: ':id', // /devices/1
    component: DevicesViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule {}
