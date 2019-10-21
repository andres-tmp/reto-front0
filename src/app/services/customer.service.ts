import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Customer, CustomerReport} from '../domain/customer';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {MathService} from './math.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerCollection: AngularFirestoreCollection<Customer>;

  constructor(public db: AngularFirestore,
              public mathService: MathService) {
    this.customerCollection = this.db.collection('clientes');
  }

  getCustomers(): Observable<CustomerReport> {
    //return this.db.collection('clientes').valueChanges();

    let customers = this.customerCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Customer;
            data.id = a.payload.doc.id;
            data.estimatedDeathDate = this.calculateDeathDate(data.birthday);
            return data;
          });

      })
    );

    let report = customers.pipe(
      map( list => {
        return new CustomerReport(list, this.mathService.arrayStadistics(list.map( customer => customer.age)))
      })
    );


    return report;
  }


  createCustomer(customer: Customer) {
    this.db.collection('clientes').add({
      'firstName': customer.firstName,
      'lastName': customer.lastName,
      'age': customer.age,
      'birthday': new Date(customer.birthday+ " 12:00:00")
    });
  }

  deleteCustomer(customer: Customer) {
    this.db.doc('clientes/' + customer.id).delete();
  }

  //TODO seria mas optimo realizar este calculo en backend (ejm. Firebase Cloud Functions) para no sobrecargar al cliente cuando la cantidad de data es mayor
  calculateDeathDate(birthday : any) : Date{
    //usaremos la esperanza de vida estimada en Peru, ya que nos tenemos mas datos relevantes
    let birthdayDate = birthday.toDate();
    let lifeExpectancy = 75;

    return new Date(birthdayDate.setFullYear(birthdayDate.getFullYear() + lifeExpectancy));
  }
}
