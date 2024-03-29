
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../Services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  properties!: Array<IProperty>;
  constructor(private housingService:HousingService){}
  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
        data=>{ 
        this.properties=data;
        console.log(data);
      },error=>{
        console.log(error);
      }
    );
  }
}
