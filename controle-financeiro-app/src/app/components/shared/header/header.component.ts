import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public toggleMenu() {
    let left = 'left: ';
    if (window.innerWidth < 768) {
      left = left + '16%;';
    }
    if (window.innerWidth >= 768) {
      left = left + '66%;';
    }

    document.getElementById('main__sidebar').setAttribute('style', left);
  }

  constructor() { }

  ngOnInit() {
  }

}
