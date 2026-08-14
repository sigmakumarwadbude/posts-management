import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {

  pageTitle = "Posts Application";

  constructor() { }

  ngOnInit(): void {
  }

}
