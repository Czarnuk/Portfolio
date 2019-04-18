import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCarriedOutItemComponent } from './projects-carried-out-item.component';

describe('ProjectsCarriedOutItemComponent', () => {
  let component: ProjectsCarriedOutItemComponent;
  let fixture: ComponentFixture<ProjectsCarriedOutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCarriedOutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCarriedOutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
