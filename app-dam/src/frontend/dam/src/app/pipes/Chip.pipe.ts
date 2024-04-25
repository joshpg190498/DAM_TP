import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'chipState'
})
export class ChipPipe implements PipeTransform {

constructor(private sanitizer: DomSanitizer) {}


  transform(value: any): SafeHtml  {
    let color: string = '';
    let state: string = '';

    if (value >= 0 && value <= 10) {
        color = "success"
        state = "Suelo Saturado"
    }

    if (value > 10 && value <= 30) {
        color = "warning"
        state = "Cap. Campo"
    }

    if (value > 30 && value <= 60) {
        color = "danger"
        state = "Suelo Seco"
    }

    if (value < 0 || value > 60) {
        color = "danger"
        state = "No definido"
    }

    const chip = `<ion-chip color="${color}">
    <ion-icon name="earth-outline"></ion-icon>
    <ion-label> ${state} </ion-label>
  </ion-chip>`

  return this.sanitizer.bypassSecurityTrustHtml(chip);

  }
}
