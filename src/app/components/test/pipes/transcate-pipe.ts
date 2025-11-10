import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transcate'
})
export class TranscatePipe implements PipeTransform {

  transform(value: string,  limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}
