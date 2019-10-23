import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {CustomerDialogComponent} from '../../dialog/customer-dialog/customer-dialog.component';
import {MatDialog} from '@angular/material';
import {AngularFireList} from '@angular/fire/database';
import {Customer, CustomerReport} from '../../domain/customer';
import {CustomerService} from '../../services/customer.service';
import {ConfirmationDialogComponent} from '../../dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'age', 'birthday', 'estimatedDeathDate','deleteButton'];
  //dataSource = new CustomerDataSource(this.customerService);

  customers: any;
  report: any = {};

  constructor(public db: AngularFirestore,
              public customerService: CustomerService,
              public dialog: MatDialog) {
    //this.customers = db.collection('clientes').valueChanges();
    //console.log(this.customers);
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe( res =>{
      this.report = res;
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CustomerDialogComponent, {
      width: '350px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      let customer : Customer = result;

      this.customerService.createCustomer(customer);

    });
  }

  deleteCustomer(customer: any){
    this.customerService.deleteCustomer(customer);
  }

  confirmDelete(customer: any){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "¿Desea eliminar este cliente?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteCustomer(customer);
      }
    });
  }

}

