import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {VacancyServiceService} from './shared/vacancy/vacancy-service.service';
import { HttpClientModule } from '@angular/common/http';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { VacancyComponent } from './vacancy/vacancy.component';


import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgxPaginationModule } from 'ngx-pagination';
import { StatisticsComponent } from './statistics/statistics.component';
import { ForecastComponentComponent } from './forecast-component/forecast-component.component';

const appRoutes: Routes = [
{path: '', redirectTo: '/vacancy-list', pathMatch: 'full'},
{
  path: 'vacancy-list',
  component: VacancyListComponent
},
{
path: 'vacancy/:id',
component: VacancyComponent
},
{
  path: 'vacancy-statistics', component: StatisticsComponent
},
  {
    path: 'vacancy-forecast', component: ForecastComponentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VacancyListComponent,
    VacancyComponent,
    StatisticsComponent,
    ForecastComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VacancyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
