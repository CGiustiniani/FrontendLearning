import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router) { }

  onGreet(htmlInput: HTMLInputElement) {
    const nameValue = htmlInput.value;
    console.log(nameValue);
    /* Here you can redirect to the greet route using the router property */
  }
  ngOnInit() {
  }

}