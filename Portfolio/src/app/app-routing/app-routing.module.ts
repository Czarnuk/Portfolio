import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ContactComponent } from '../dashboard/menu-items/contact/contact/contact.component';
import { Path } from '@firebase/database/dist/esm/src/core/util/Path';
import { ProjectsCarriedOutComponent } from '../dashboard/menu-items/projects-carried-out/projects-carried-out/projects-carried-out.component';
import { CodeReviewComponent } from '../dashboard/menu-items/code-review/code-review/code-review.component';
import { CareerComponent } from '../dashboard/menu-items/career/career/career.component';
import { ProjectsDoneComponent } from '../dashboard/menu-items/projects-done/projects-done/projects-done.component';



const APP_ROUTES : Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects-carried-out',
    component: ProjectsCarriedOutComponent
  },
  {
    path: 'code-review',
    component: CodeReviewComponent
  },
  {
    path: 'career',
    component: CareerComponent
  }
  ,
  {
    path: 'projects-done',
    component: ProjectsDoneComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
