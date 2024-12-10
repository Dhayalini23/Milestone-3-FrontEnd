import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSubscription'
})
export class FilterSubscriptionPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if(!value|| !Array.isArray(value)){
     return[];
    }
    if(!searchText){
     return value;
    }
    searchText = searchText.toLowerCase();
    return value.filter(item=>
     (item.title && item.title.toLowerCase().includes(searchText))||
     (item.programNames && item.programNames.toLowerCase().includes(searchText))
    );
   }

}
