import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent {

  flat = false;
  exists = false;
  title = ' Angular Directives example app';
  name = 'Heri';
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  movies = [
    {title: 'Toy Story 3', director: 'Lee Unkrich'},
    {title: 'Frozen', director: 'Jennifer Lee & Chris Buck'},
    {title: 'Zootopia', director: 'Byron Howard & Rich Moore'},
    {title: 'Wedding Crashers', director: 'David Dobkin'},
    {title: 'I am Legend', director: 'Francis Lawrence'},
    {title: 'Elysium', director: 'Neill Blomkamp'},
    {title: 'Wonder Woman', director: 'Patty Jenkins'},
    {title: 'Iron Man', director: 'Jon Favreau'}
  ];
  value: number;
  borderStyle = '1px solid pink';
  // *ngIf toggle function
  toggleExists() {
    this.exists = !this.exists;
  }
  constructor() {
    this.number1 = 0;
    this.number2 = 0;
    this.number3 = 0;
    this.number4 = 0;
  }
  onCountChanged(value: number) {
    this.number3 = value;
    this.number4 = value;
  }

}
