import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reqs',
  templateUrl: './reqs.component.html',
  styleUrls: ['./reqs.component.scss']
})
export class ReqsComponent implements OnInit {


  constructor() { }
  // header: object[] = [{ title: 'NO.', key: 'position' }, { title: 'Name', key: 'name' }, { key: 'weight', title: "Weights" }, { key: 'symbol', title: "Symbol" }];

  pieData = [
    {
      name: "kota",
      age: '25'
    },
    {
      name: "David",
      age: '57'
    },
    {
      name: "Kumar",
      age: '50'
    },
    {
      name: "Vincey",
      age: '25'
    },
    {
      name: "Yash",
      age: '25'
    },
    {
      name: "Comtron",
      age: '25'
    },
    {
      name: "New",
      age: '25'
    },
  ]
  header: string[] = ['position', 'name', 'weight', 'symbol'];
  headerTitle: object = { position: 'No.', name: 'Name', weight: 'Weight', symbol: 'Symbol' }
  ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  ngOnInit(): void {
  }

}
