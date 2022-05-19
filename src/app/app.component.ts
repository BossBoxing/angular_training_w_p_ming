import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-training';
  name: string = 'Hudsawat Akkati';
  age: number = 17;

  //Array
  intern: string[] = ['Pond', 'Few', 'Boss',
    'Nut', 'Jim', 'Bill', 'Beam', 'PPond', 'Bank'];
  
  // Object
    address = {
      addressLine: {
        line1: '215',
        line2: '100'
      },
      district: 'เมือง',
      province: 'ขอนแก่น',
      postalCode: '4000',
      cats: ['cat1','cat2','cat3']
  };
}
