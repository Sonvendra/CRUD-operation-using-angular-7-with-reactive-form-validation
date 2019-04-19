import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h2 class="text-center text-danger">
    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    Page not found!
    </h2>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
