import {Injectable} from '@angular/core';
import {ArrayStadistics} from '../util/array-stadistics';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  public arrayStadistics(values : number[]) : ArrayStadistics{

    let avg = this.average(values);

    let squareDiffs = values.map(function(value){
      let diff = value - avg;
      let sqrDiff = diff * diff;
      return sqrDiff;
    });

    let avgSquareDiff = this.average(squareDiffs);

    let stdDev = Math.sqrt(avgSquareDiff);

    return new ArrayStadistics(avg, stdDev);
  }


  public average(data){
    let sum = data.reduce(function(sum, value){
      return parseFloat(sum) + parseFloat(value);
    }, 0);

    let avg = sum / data.length;
    return avg;
  }

}
