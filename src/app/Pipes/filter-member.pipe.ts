import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMember'
})
export class FilterMemberPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
   if(!value|| !Array.isArray(value)){
    return[];
   }
   if(!searchText){
    return value;
   }
   searchText = searchText.toLowerCase();
   return value.filter(item=>
    (item.firstName && item.firstName.toLowerCase().includes(searchText))||
    (item.lastName && item.lastName.toLowerCase().includes(searchText))||
    (item.userId && item.userId.toLowerCase().includes(searchText))
   );
  }

}
// transform(value: IMember, ...args: string[]): IMember {
//   console.log(value);
  
//   const searchText = arg[0];
      
//   return value.filter((a:IMember) => a.title.toLowerCase().includes(searchText.toLowerCase()) || a.description.toLowerCase().includes(searchText.toLowerCase()))
// }