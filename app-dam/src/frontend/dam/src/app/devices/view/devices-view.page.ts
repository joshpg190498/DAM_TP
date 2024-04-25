import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DevicesService } from '../../services/devices.service';
import { ActivatedRoute } from '@angular/router';
import * as Highcharts from 'highcharts';
import { IrrigationsService } from 'src/app/services/irrigations.service';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts)

@Component({
  selector: 'app-devices-view',
  templateUrl: './devices-view.page.html',
  styleUrls: ['./devices-view.page.scss'],
})
export class DevicesViewPage implements OnInit, OnDestroy {

  deviceId: number = 0
  electrovalveId: number = 0
  deviceName: string = ''
  devices: any = []
  valveState: boolean = false
  lastSensorValue: number = 0

  myChart: any
  chartOptions: any

  constructor(private _devicesService: DevicesService,
    private _irrigationsService: IrrigationsService,
    private _actRouter: ActivatedRoute) {
  }

  async ngOnInit() {
    this.deviceId = Number(this._actRouter.snapshot.paramMap.get('id'))
    this.getDeviceData()
  }

  async getDeviceData() {
    try {
      const deviceInfo = await this._devicesService.getDevice(this.deviceId)
      const lastMeasurement = await this._devicesService.getLastDeviceMeasurement(this.deviceId)
      const lastValveState = await this._devicesService.getLastValveState(this.deviceId)
      if(deviceInfo && lastMeasurement) {
        this.electrovalveId = deviceInfo.electrovalvulaId
        await this.updateChart(deviceInfo, lastMeasurement)
      }
      if(lastValveState) {
        this.valveState = lastValveState.apertura ? true : false
      } 
    } catch (err) {
      console.error(err)
    }
  }

  ngOnDestroy(): void {
  }

  insertLogRiego() {
    this._irrigationsService.insertLogRiego(this.electrovalveId, this.valveState)
      .then((data) => {
        this.valveState = !this.valveState
      })
      .catch((err) => {
        console.error('Error while ')
      })
  }

  async updateChart(device: any, measurement: any) {
    this.lastSensorValue = parseFloat(measurement.valor)
    this.deviceName = `${device.ubicacion} - ${device.nombre}`
    this.generateChart()

    console.log(this.myChart)
	}

  generateChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: this.deviceName
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'Cb'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'Humedad',
        data: [this.lastSensorValue],
        tooltip: {
            valueSuffix: ' Cb'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
}
