import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  constructor(public data:DataService) { }
  buscom:any=[];
  ngOnInit(): void {
    this.buscom=this.data.busDetails;
  }

}
