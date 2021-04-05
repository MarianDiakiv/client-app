import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class VacancyServiceService {
	public API = '//localhost:8080/vacancy/'

  constructor(private http:HttpClient) {
   }
   getAllVacancy():Observable<any>{
   	return this.http.get(this.API+"all");
   }
   getAllVacancyByID(id:String){
   	return this.http.get(this.API+id);
   }
   getAllWithParams(params):Observable<any>{
    return this.http.get(this.API+"all",{params});
   }
   getAllVacancyByPage(page,city,language):Observable<any>{
    return this.http.get(this.API+"all/?page=" + page+"&language="+language+"&city="+city);
   }


   


   // getAllVacancyByPage(page):Observable<any>{
   //  return this.http.get(this.API+"all/?page="+page);
   // }

   // http://localhost:8080/vacancy/all?language=java&city=%D0%9B%D1%8C%D0%B2%D1%96%D0%B2
}
