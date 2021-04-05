import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {StatisticsService} from '../shared/statistics/statistics.service';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  EAST = "EAST";
  WEST = "WEST";
  NORTH = "NORTH";
  SOUTH = "SOUTH";
  CENTER = "CENTER";
  REMOTE = "REMOTE";


  cities: Array<any>;
  languageCountCurrent: Array<any>;
  languageCountCurrentByDate: Array<any>;
  languagesList: Array<any>;
  topTenList: Array<any>;

  constructor(private statiscticsService: StatisticsService) {
  }

  ngOnInit(): void {
    this.statiscticsService.getAllCity().subscribe(data => {
      this.cities = data;
    });
    // загрузка поточних даних по країні
    this.getLanguageCountCurrent();
    //дані за 5 тижнів
    this.getLanguageCountByDate();
    // топ по країні
    this.getTopTenByCountry();
  }

  getStatisticsbyCityID(id) {
    console.log("COTYID" + id);
    this.statiscticsService.getAllLanguageCountAndCityID(id).subscribe(data => {
      this.languageCountCurrent = data;
    });

    this.statiscticsService.getAllLanguageCountByDateAndCityID(id).subscribe(data => {
      this.languageCountCurrentByDate = data;
    });
    this.statiscticsService.getTopByCityID(id).subscribe(data => {
      this.topTenList = data;
    });
    // знову зчитуємо мову
    this.statiscticsService.getAllLanguages().subscribe(data => {
      this.languagesList = data;
    });
  }

  getLanguageCountCurrent() {
    this.statiscticsService.getAllLanguageCount().subscribe(data => {
      this.languageCountCurrent = data;
    });
  }

  getLanguageCountByDate() {
    this.statiscticsService.getAllLanguageCountByDate().subscribe(data => {
      this.languageCountCurrentByDate = data;
    });
    this.statiscticsService.getAllLanguages().subscribe(data => {
      this.languagesList = data;
    });
  }

  getByRegion(region) {
    console.log(region);
    this.statiscticsService.getAllLanguageCountAndRegion(region).subscribe(data => {
      this.languageCountCurrent = data;
    });
    this.statiscticsService.getAllLanguageCountByDateAndRegion(region).subscribe(data => {
      this.languageCountCurrentByDate = data
    });
    this.statiscticsService.getAllLanguages().subscribe(data => {
      this.languagesList = data;
    });
    this.statiscticsService.getTopByRegion(region).subscribe(data => {
      this.topTenList = data;
    });
  }

  getTopTenByCountry() {
    console.log("country");
    this.statiscticsService.getTopAll().subscribe(data => {
      this.topTenList = data;
    });
  }


}
