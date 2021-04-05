import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyServiceService } from '../shared/vacancy/vacancy-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

vacancy:any={};
details:any={};
sub:Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private vacService: VacancyServiceService,) {
  }

  ngOnInit(): void {
  	this.sub = this.route.params.subscribe(params=>{
  		const id = params['id'];
  		if(id){
  			this.vacService.getAllVacancyByID(id).subscribe(data=>{
  				this.vacancy = data;
          // this.details = data.vacancyDetailsDto;
  			})
  		}else{

  		}
  	});
  }

}
