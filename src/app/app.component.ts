import {Component, OnInit} from '@angular/core';
// import * as firebase from 'firebase';
//
// const settings = {timestampsInSnapshots: true};
// const config = {
//   apiKey: 'YOUR_APIKEY',
//   authDomain: 'YOUR_AUTH_DOMAIN',
//   databaseURL: 'YOUR_DATABASE_URL',
//   projectId: 'YOUR_PROJECT_ID',
//   storageBucket: 'YOUR_STORAGE_BUCKET',
// };


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'intercorp-reto-front';


  ngOnInit() {
    //firebase.initializeApp(config);
    //firebase.firestore().settings(settings);
  }
}
