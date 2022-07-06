import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  @Input() decdetails!:any
  newArray:any=[];
  index:any;
  ele:any;
  constructor(public data:DataService) { }
  ngOnInit(): void {
    this.newArray=this.data.newArray1;

  }
  booking(e:any,i:any){
    this.ele=e.target;
    this.index=i+1;
    this.ele.style.backgroundColor="#f1a9a0";
    // let ele=e.target as HTMLElement;
    this.data.proceedShow=true;
    // ele.removeEventListener('click',this.booking)
  }

}
