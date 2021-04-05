import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  public API = '//localhost:8080/';


  constructor(private http: HttpClient) { }

  getPredictionByAllLanguageAndCityID(id): Observable<any>{
   return  this.http.get(this.API + 'forecast?languageId=&cityId=' + id);
  }
  getPredictionByLanguage(id): Observable<any>{
    return this.http.get(this.API + 'forecast?cityId=&languageId=' + id);
  }

  getPredictionbyCountry(): Observable<any>{
    return this.http.get(this.API + 'forecast?cityId=&languageId=');
  }

  getAllLanguageDto(): Observable<any>{
    return this.http.get(this.API + 'forecast/language');
  }

}
