import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    rates:any;



  constructor( private dataService: DataService ) { }

  ngOnInit() {

    // here i am assigning the subsription data to a property rates with the value any.
    this.dataService.getRates().subscribe(data => {
      this.rates = data
    // here i am getting the values of the rates object.
      this.rates = Object.entries(this.rates.rates)
      console.log(this.rates);
   });

  }



}
