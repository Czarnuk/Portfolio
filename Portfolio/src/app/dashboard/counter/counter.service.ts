import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";
import { VisitCounter, Counter } from "./counters";
import 'rxjs/add/operator/take';

@Injectable()
export class CounterService {

  constructor(private db: AngularFireDatabase) {
  }

  getNumberOfVisits(): Observable<VisitCounter> {
    return this.db.object<Counter>('/counters/visits')
      .valueChanges()
      .map(counter => {
        return <VisitCounter>counter;
      });
  }

  getCountersByType(type) {
    return this.db.list<Counter>('/counters')
      .valueChanges()
      .map(counters => <VisitCounter>counters.find(c => c.type === type));
  }

  increaseVisits() {
    const counterVisit = this.db
    this
      .getNumberOfVisits()
      .take(1)
      .subscribe(c => {
        this.db
          .object<VisitCounter>('/counters/visits')
          .update({ today: c.today + 1 });
      });
  }
}
