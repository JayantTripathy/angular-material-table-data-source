import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  constructor () {
    this.dataSource.filterPredicate = (data: Element, filter: string) => {
      return data.name.toLocaleLowerCase().includes(filter) ||
      data.symbol.label.toLocaleLowerCase().includes(filter);
    }
  }
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface ElementLabel {
  label: string;
}
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: ElementLabel;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: {label:  'H'}},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: {label:'He'}},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: {label:'Li'}},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: {label:'Be'}},
  {position: 5, name: 'Boron', weight: 10.811, symbol: {label:'B'}},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: {label:'C'}},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: {label:'N'}},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: {label:'O'}},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: {label:'F'}},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: {label:'Ne'}},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: {label:'Na'}},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: {label:'Mg'}},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: {label:'Al'}},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: {label:'Si'}},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: {label:'P'}},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: {label:'S'}},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: {label:'Cl'}},
  {position: 18, name: 'Argon', weight: 39.948, symbol: {label:'Ar'}},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: {label:'K'}},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: {label:'Ca'}},
];