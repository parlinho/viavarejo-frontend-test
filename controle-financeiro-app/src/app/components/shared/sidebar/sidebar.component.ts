import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public closeMenu() {
    document.getElementById('main__sidebar').setAttribute('style', 'left: 100%');
  }

  constructor() { }

  ngOnInit() {
  }

}
