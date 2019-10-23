import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersListComponent } from './pages/customers-list/customers-list.component';
import {AppRoutingModule} from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatToolbarModule, MatDialogModule, MatTooltipModule
} from '@angular/material';
import { CustomerDialogComponent } from './dialog/customer-dialog/customer-dialog.component';
import {FormsModule} from '@angular/forms';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    MatToolbarModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTooltipModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [CustomerDialogComponent, ConfirmationDialogComponent]
})
export class AppModule { }
