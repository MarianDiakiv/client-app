import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
	public API = '//localhost:8080/statisctics/'

  constructor(private http:HttpClient) {
   }
   getAllCity():Observable<any>{
   		return this.http.get(this.API+"cities");
   }
//////////
   getAllLanguageCount():Observable<any>{
   	return this.http.get(this.API+"count");
   }

   getAllLanguageCountAndCityID(id):Observable<any>{
   	return this.http.get(this.API+"count?cityID="+id);
   }

   getAllLanguageCountAndRegion(region):Observable<any>{
   	return this.http.get(this.API+"count?region="+region);
   }


//////
   getAllLanguageCountByDate():Observable<any>{
   	return this.http.get(this.API+"count-five");
   }

   getAllLanguageCountByDateAndCityID(id):Observable<any>{
   	return this.http.get(this.API+"count-five?cityID="+id);
   }

   getAllLanguageCountByDateAndRegion(region):Observable<any>{
   	return this.http.get(this.API+"count-five?region="+region);
   }

///////
   getAllLanguages():Observable<any>{
   	return this.http.get(this.API+"languages");
   }

   getTopAll():Observable<any>{
	  return this.http.get(this.API+"top-ten");
   }
  getTopByCityID(id):Observable<any>{
    return this.http.get(this.API+"top-ten?cityID="+id);
  }
  getTopByRegion(region):Observable<any>{
    return this.http.get(this.API+"top-ten?region="+region);
  }
}
