import {ArrayStadistics} from '../util/array-stadistics';

export class Customer {

  id : string;
  firstName: string;
  lastName: string;
  age : number;
  birthday: string;
  estimatedDeathDate: Date;

}

export class CustomerReport{

  constructor(data: Customer[], stadistics: ArrayStadistics) {
    this.data = data;
    this.stadistics = stadistics;
  }


  data : Customer[];
  stadistics : ArrayStadistics;

}
