import {ArrayStadistics} from '../util/array-stadistics';

export class Customer {

  id : string;
  firstName: string;
  lastName: string;
  age : number = 0;
  birthday: string;
  estimatedDeathDate: Date;
  ageCalculated : string;
}

export class CustomerReport{

  constructor(data: Customer[], stadistics: ArrayStadistics) {
    this.data = data;
    this.stadistics = stadistics;
  }


  data : Customer[];
  stadistics : ArrayStadistics;

}
