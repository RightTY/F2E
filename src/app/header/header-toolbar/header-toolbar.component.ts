import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.css',
              '../header.component.css',
              '../../app.component.css']
})
export class HeaderToolbarComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
