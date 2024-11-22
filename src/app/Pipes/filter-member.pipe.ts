import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMember'
})
export class FilterMemberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
// transform(value: IMember, ...args: string[]): IMember {
//   console.log(value);
  
//   const searchText = arg[0];
      
//   return value.filter((a:IMember) => a.title.toLowerCase().includes(searchText.toLowerCase()) || a.description.toLowerCase().includes(searchText.toLowerCase()))
// }