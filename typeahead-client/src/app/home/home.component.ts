import { Component } from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'app works!';
  myDate: Date;
  reversedArray: number[];

  constructor() {
    this.myDate = moment().subtract(50, 'seconds').toDate();
    this.reversedArray = _.reverse([1, 2, 3]);
  }

}
