import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private router: Router, public data:DataService) { }
 @ViewChild('fromVal') fromVal!:ElementRef
 @ViewChild('toVal') toVal!:ElementRef
 @ViewChild('inputDate') inputDate!:ElementRef
  inputFrom:any=""
  inputTo:any=""
  place:any;
  place1:any;
  text:any;
  text1:any;
  fromData:any;
  toData:any;
  inputDate1:any;
  ngOnInit(): void {
    this.place=this.data.placeName;
    this.place1=this.data.place;
  }
  display(){
    this.fromData=this.fromVal.nativeElement.innerText;
    this.toData=this.toVal.nativeElement.innerText;
    this.inputDate1=this.inputDate.nativeElement.value;
    if(this.fromData !== "" && this.toData !== "" && this.inputDate1 !==""){
      this.router.navigate(['./redbus']);
    }
  }
  showName(){
    this.data.placeName1=true;
  }
  getVal(e:any){
    this.text=e.target.innerText;
    this.data.placeName1=false;
   }
  showName1(){
    this.data.placeName2=true;
  }
  getVal1(e:any){
    this.text1=e.target.innerText;
    this.data.placeName2=false;
   }

}
