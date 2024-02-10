import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  properties : Array<any> = [
    {
    "Id":1,
    "Name": "Ziyaullah",
    "Type": "House",
    "Price": 200

  },
  {
    "Id":2,
    "Name": "Zabihullah",
    "Type": "Villah",
    "Price": 300
  },
  {
    "Id":3,
    "Name": "Zakiullah",
    "Type": "Appartment",
    "Price": 400
  },
  {
    "Id":4,
    "Name": "Zikrullah",
    "Type": "Banglo",
    "Price": 500

  },
  {
    "Id":5,
    "Name": "Najiullah",
    "Type": "House",
    "Price": 300
  },
  {
    "Id":6,
    "Name": "Vajahatullah",
    "Type": "Villah",
    "Price": 4600
  }
]
  constructor(){}
  ngOnInit(): void {
  }
}
