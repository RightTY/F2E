import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.css',
              '../header.component.css',
              '../../app.component.css']
})
export class HeaderTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
