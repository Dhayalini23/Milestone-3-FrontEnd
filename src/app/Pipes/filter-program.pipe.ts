import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProgram'
})
export class FilterProgramPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if(!value|| !Array.isArray(value)){
     return[];
    }
    if(!searchText){
     return value;
    }
    searchText = searchText.toLowerCase();
    return value.filter(item=>
     (item.name && item.name.toLowerCase().includes(searchText))
   
    );
   }
}
