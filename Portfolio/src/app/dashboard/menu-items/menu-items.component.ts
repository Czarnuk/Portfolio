import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.less']
})
export class MenuItemsComponent implements OnInit {

  constructor() { }

  @Input() header: string = "this is header";
  @Input() content: string = "this is content";


  ngOnInit() {
  }

}
