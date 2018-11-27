import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discout'
})
export class DiscoutPipe implements PipeTransform {

  transform(price: any,disc:any): any {
    if(disc == isNaN){
      disc = 0;
    }
 

    return (price/100 * disc);
  }
  

}
