import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  contactClick() {
    this.router.navigate(['/contact']);
  }

  projectsCarriedOutClick(){
    this.router.navigate(['/projects-carried-out']);
  }

  codeReviewClick(){
    this.router.navigate(['/code-review']);
  }

  careerClick(){
    this.router.navigate(['/career']);
  }

  projectsDoneClick(){
    this.router.navigate(['/projects-done']);
  }
}
