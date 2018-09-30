import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public selectedCurrency: any;
  public currencies: any[];

  constructor(private homeService: HomeService) {
    this.currencies = homeService.currencies;
   }

  ngOnInit() {
    this.selectedCurrency = this.currencies.find(x => x.usd).usd;
    console.log(this.currencies);
  }

}
