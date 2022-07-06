import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  busDetails:object[]=[
    {
      busName:"NT Xpress",
      busType:"NON A/C Sleeper (2+1)",
      departure:"18:25",
      duration:"12h 10m",
      arrival:"06:35",
      rating:"175",
      fare:"inr 999",
      seatAvailable:"12 seat Available",
      star:"4.2"
    },
    {
      busName:"National CHN",
      busType:"NON A/C Sleeper (2+1)",
      departure:"20:05",
      duration:"10h 25m",
      arrival:"06:30",
      rating:"146",
      fare:"inr 799",
      seatAvailable:"12 seat Available",
      star:"3.9"
    }
    , {
      busName:"LION Travels",
      busType:"NON A/C Sleeper (2+1)",
      departure:"18:00",
      duration:"12h 40m",
      arrival:"06:40",
      rating:"128",
      fare:"inr 600",
      seatAvailable:"12 seat Available",
      star:"3.7"
    },
    {
      busName:"MG Travels",
      busType:"A/C Sleeper (2+1)",
      departure:"19:25",
      duration:"10h 50m",
      arrival:"06:15",
      rating:"115",
      fare:"inr 1560",
      seatAvailable:"12 seat Available",
      star:"3.4"
    },
    {
      busName:"Star Travels",
      busType:" A/C Sleeper (2+1)",
      departure:"22:45",
      duration:"06h 15m",
      arrival:"05:00",
      rating:"146",
      fare:"inr 1290",
      seatAvailable:"12 seat Available",
      star:"2.9"
    },
    {
      busName:"YBM Travels",
      busType:" A/C Sleeper (2+1)",
      departure:"23:15",
      duration:"05h 45m",
      arrival:"05:00",
      rating:"130",
      fare:"inr 1500",
      seatAvailable:"12 seat Available",
      star:"4.2"
    }
  ]
  placeName:any=["Tenkasi","Tirunelveli","Kadayam"];
  place:any=["Chennai","Madurai","Mumbai"];
  newArray1:any=[1,2,3,4,5,6,7,8,9,10,11,12];
  proceedShow:boolean=false;
  placeName1:boolean=false;
  placeName2:boolean=false;
}
