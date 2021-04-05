import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../shared/statistics/statistics.service';
import {ForecastService} from '../shared/forecast/forecast.service';

@Component({
  selector: 'app-forecast-component',
  templateUrl: './forecast-component.component.html',
  styleUrls: ['./forecast-component.component.css']
})
export class ForecastComponentComponent implements OnInit {

  cities: Array<any>;
  languages: Array<any>;
  forecasts: Array<any>;

  constructor(private  statisticsService: StatisticsService, private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.statisticsService.getAllCity().subscribe(data => {
      this.cities = data;
    });
    this.forecastService.getAllLanguageDto().subscribe(data => {
      this.languages = data;
    });

    this.getPredictionByCountry();
  }



  getPredictionbyCityID(id){
      this.forecastService.getPredictionByAllLanguageAndCityID(id).subscribe(data => {
        this.forecasts = data;
      });
  }
  getPredictionbyLanguageID(id){
    console.log(id);
    this.forecastService.getPredictionByLanguage(id).subscribe(data => {
      this.forecasts = data;
    });
  }
  getPredictionByCountry(){
    // усі мови по країні
    this.forecastService.getPredictionbyCountry().subscribe(data => {
      this.forecasts = data;
    });
  }

}
