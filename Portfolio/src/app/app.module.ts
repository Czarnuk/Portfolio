import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutMeComponent } from './dashboard/about-me/about-me.component';
import { MenuItemsComponent } from './dashboard/menu-items/menu-items.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CounterComponent } from './dashboard/counter/counter.component';
import { CounterService } from './dashboard/counter/counter.service';
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactModule } from './dashboard/menu-items/contact/contact.module';
import { ProjectsCarriedOutModule } from './dashboard/menu-items/projects-carried-out/projects-carried-out.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CodeReviewModule } from './dashboard/menu-items/code-review/code-review.module';
import { CareerModule } from './dashboard/menu-items/career/career.module';
import { ProjectsDoneModule } from './dashboard/menu-items/projects-done/projects-done.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutMeComponent,
    MenuItemsComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    ContactModule,
    ProjectsCarriedOutModule,
    NgbModule.forRoot(),
    CodeReviewModule,
    CareerModule,
    ProjectsDoneModule
  ],
  providers: [AngularFireDatabaseModule, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
