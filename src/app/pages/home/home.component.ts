import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section>
    <h2>Welcome</h2>
    <p>Welcome to the Posts application.</p>
  </section>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
