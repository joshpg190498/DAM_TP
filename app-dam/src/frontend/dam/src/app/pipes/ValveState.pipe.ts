import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({
  name: 'chipValve'
})
export class ValveStatePipe implements PipeTransform {

constructor(private sanitizer: DomSanitizer) {}

  transform(value: any): SafeHtml  {
    const chip = `<ion-chip color="${value ? 'primary' : 'medium'}">
    <ion-icon name="water"></ion-icon>
    <ion-label>${value ? 'Abierto' : 'Cerrado'}</ion-label>
  </ion-chip>`

  return this.sanitizer.bypassSecurityTrustHtml(chip);

  }
}
