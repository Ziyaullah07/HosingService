import { Component, Input } from "@angular/core";

@Component({
selector: "app-property-card",
//template:`<h1>property-Card component</h1>`,
templateUrl:'property-card.component.html',
//styles:['h1{font-weight:normal;}']
styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{
 @Input() property :any
 
}