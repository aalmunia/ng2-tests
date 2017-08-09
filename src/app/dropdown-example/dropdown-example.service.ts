import { Injectable } from '@angular/core';

@Injectable()
export class DropdownExampleService {

  constructor() { }

  getDropDownData() {
    var aCities = [];
    aCities.push({ label: 'Madrid', value: 'madrid' });
    aCities.push({ label: 'Barcelona', value: 'barcelona' });
    aCities.push({ label: 'Valencia', value: 'valencia' });
    aCities.push({ label: 'Donosti', value: 'donosti' });
    aCities.push({ label: 'A Corunha', value: 'a-corunha' });        
    aCities.push({ label: 'Lisboa', value: 'lisboa' });
    aCities.push({ label: 'Teruel', value: 'teruel' });
    aCities.push({ label: 'Valladolid', value: 'valladolid' });
    aCities.push({ label: 'Alicante', value: 'alicante' });
    return aCities;
  }

}