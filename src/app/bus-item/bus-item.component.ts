import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bus-item',
  templateUrl: './bus-item.component.html',
  styleUrls: ['./bus-item.component.css']
})
export class BusItemComponent implements OnInit {
  @Input() details:any;
  hide:boolean=true;
  buscom:any=[];
  constructor(public data:DataService) { }
  ngOnInit(): void {
    this.buscom=this.data.busDetails;
  }
  showBox(){
    this.hide=!this.hide;
  }
  

}
