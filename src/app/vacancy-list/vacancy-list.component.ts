import { Component, OnInit } from '@angular/core';
import{VacancyServiceService} from '../shared/vacancy/vacancy-service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
public technology='';
public city='';

pageabledto:any;
vacancy:Array<any>;

totalElem:any;
totalPage:any;
pages:Array<number>;
currentPage:any;

// for disabled
firstDis:boolean;
nextDss:boolean;
prevDis:boolean;
lastDis:boolean;




  constructor(private vacancyService:VacancyServiceService) { }

  ngOnInit(): void {
     this.getVacancyByPage();
     this.currentPage = 0;

     this.firstDis=true;
     this.nextDss=false;
     this.prevDis=false;
     this.lastDis=false;
  }
 
getVacancyByPage(){
  this.vacancyService.getAllVacancyByPage(this.currentPage,this.city,this.technology).subscribe(data=>{
      this.vacancy = data.page;
      this.pageabledto = data;
      this.totalElem = data.totalElements; // кількість елементів на сторінці 
      this.totalPage = data.totalPages;// кількість сторінок
      this.totalPage = this.totalPage-1;
      this.currentPage = data.number;
      this.getPagesNumber(data.totalPages);// номери сторінок у масив
      
     console.log("================");
     console.log(this.vacancy);
     console.log(this.totalElem);
     console.log(this.currentPage);
     console.log(this.totalPage);
    })
}


getPagesNumber(countPage){
  this.pages =[];
  for(let i=0;i<countPage; i++){
      this.pages.push(i);
  }
}
search(){
    this.vacancyService.getAllVacancyByPage(0,this.city,this.technology).subscribe(data=>{
      this.vacancy = data.page;
      this.pageabledto = data;
      this.totalElem = data.totalElements; // кількість елементів на сторінці 
      this.totalPage = data.totalPages;// кількість сторінок
      this.totalPage = this.totalPage-1;
      this.currentPage = data.number;
      this.getPagesNumber(data.totalPages);// номери сторінок у масив
      console.log(this.vacancy)
     console.log("================");
     console.log(this.totalElem);
     console.log(this.currentPage);
     console.log(this.totalPage);
    });
}

firstPageFunk(){
 event.preventDefault();
  this.currentPage = 0;
  this.getVacancyByPage();
}
nextPageFunk(){
   event.preventDefault();
   this.currentPage = this.currentPage+1;
   this.getVacancyByPage();
}
prevPageFunk(){
  event.preventDefault();
  this.currentPage = this.currentPage-1;
  this.getVacancyByPage();
}
lastPageFunk(){
  event.preventDefault();
  this.currentPage = this.totalPage;
  this.getVacancyByPage();

}

}
