import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  homeClick(){
    this.router.navigate(['/dashboard']);
  }
}
