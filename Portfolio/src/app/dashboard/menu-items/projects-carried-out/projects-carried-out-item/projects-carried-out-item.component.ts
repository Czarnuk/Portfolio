import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-carried-out-item',
  templateUrl: './projects-carried-out-item.component.html',
  styleUrls: ['./projects-carried-out-item.component.less']
})
export class ProjectsCarriedOutItemComponent implements OnInit {

  constructor() { }

  @Input() header: string = "this is header";
  @Input() content: string = "this is content";

  ngOnInit() {
  }

}
