import { Component, OnInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss']
})
export class PiechartComponent implements OnInit, AfterContentChecked {
  

  public chartType: string = 'pie';
  public chartDatasets: Array<any> = [
    { data: [], label: 'My First dataset' },
    
  ];
  foodcalorie=[];
  foodname=[];
  constructor(private dataservice:DataService) {
    

   }

  // get data using rxjs observable
 
  ngOnInit() {

    this.dataservice.currentMessage
    .subscribe(data=>{
      // check data is here
       
      if(data!=null){  
        this.foodcalorie=[];
        this.foodname=[];
       for(let flist of data){
         this.foodcalorie.push(flist.fcalori);
         this.foodname.push(flist.fname)
       }
      
       
      }
     
    })
  }
  // pie chart intialize
  ngAfterContentChecked() { 
    this.chartDatasets= [
    { data: this.foodcalorie, label: 'My First dataset' },
  ];
  this.chartLabels=this.foodname;
  }


  

  public chartLabels: Array<any> = [];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#46BFBD', '#FDB45C', '#949FB1', '#4D5360','#00FFFF','#F7464A','#ADD8E6','#800080','#FFFF00','#FF00FF','#A52A2A','#808000','ED29F0','#616A6B','#633974'],
      // hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
 
}
