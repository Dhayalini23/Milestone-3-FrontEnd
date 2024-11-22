import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProgram'
})
export class FilterProgramPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
