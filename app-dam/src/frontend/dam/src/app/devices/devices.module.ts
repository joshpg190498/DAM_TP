import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicesPageRoutingModule } from './devices-routing.module';

import { DevicesPage } from './devices.page';
import { DevicesViewPage } from './view/devices-view.page';
import { DevicesMeasurementsPage } from './measurements/devices-measurements.page';
import { DevicesIrrigationsPage } from './irrigations/devices-irrigations.page';
import { ChipPipe } from '../pipes/Chip.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicesPageRoutingModule
  ],
  declarations: [DevicesPage, DevicesViewPage, DevicesMeasurementsPage, DevicesIrrigationsPage, ChipPipe]
})
export class DevicesPageModule {}
