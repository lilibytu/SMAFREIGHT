import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  scroll(id: string) {
    console.log(`scrolling to ${id}`);
    const el = document.getElementById(id);
    // @ts-ignore
    el.scrollIntoView();
  }
}
