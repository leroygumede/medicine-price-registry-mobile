import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
@Injectable()
export class NameFilter {
  transform(value, args) {
    value = value.match(/\b\w/g).join(''); // make sure it's a string
    return value.toUpperCase();
  }
}
