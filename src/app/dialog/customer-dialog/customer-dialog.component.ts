import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from '../../domain/customer';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-customer-dialog',
  templateUrl: './customer-dialog.component.html',
  styleUrls: ['./customer-dialog.component.css']
})
export class CustomerDialogComponent implements OnInit {

  customer: Customer;

  constructor(
    public dialogRef: MatDialogRef<CustomerDialogComponent>) {
    this.customer = new Customer();
  }


  ngOnInit() {
  }

  save() {
    this.dialogRef.close(this.customer);
  }

  close(){
    this.dialogRef.close();
  }


}
