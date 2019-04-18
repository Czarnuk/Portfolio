import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { CounterService } from './counter.service';
import { VisitCounter } from './counters';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent implements OnInit {
  visits: VisitCounter;

  constructor(private counterService: CounterService){}

  ngOnInit() {
    this.counterService.getNumberOfVisits().subscribe(visits => {
      this.visits = visits;
     // console.log(this.visits);
    })
  }

}
