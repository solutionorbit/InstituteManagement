import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PipefilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Pipe({
  name: 'myfilter',
  pure: false
})
export class Pipefilter implements PipeTransform {
  transform(items: any[], filter: boolean): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.isSelected == filter);
  }

}


