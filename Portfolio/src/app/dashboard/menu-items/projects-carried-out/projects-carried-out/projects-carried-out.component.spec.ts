import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCarriedOutComponent } from './projects-carried-out.component';

describe('ProjectsCarriedOutComponent', () => {
  let component: ProjectsCarriedOutComponent;
  let fixture: ComponentFixture<ProjectsCarriedOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCarriedOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCarriedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
