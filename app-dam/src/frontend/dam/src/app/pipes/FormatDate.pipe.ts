import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: any): String  {
    return new Date(date).toLocaleString()
  }
}