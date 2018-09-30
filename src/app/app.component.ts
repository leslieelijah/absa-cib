import { Component, OnInit } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public selectedCurrency: any;
  public currencies: any;

  constructor(private homeService: HomeService) {  }

  ngOnInit() {
    this.onSelectOfCurrency();
  }

  public onSelectOfCurrency() {
    this.currencies = this.homeService.currencies.currency;
    this.selectedCurrency = this.currencies.find(x => x.name).name;
    console.log(this.selectedCurrency);
  }

}
