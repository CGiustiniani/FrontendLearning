import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  givenName: string;
  constructor(private activatedRoute: ActivatedRoute) { 
    /* Here you have to access the snapshot of the Params to retrieve the router parameter. */
  }

  ngOnInit() {
    this.givenName = 'defaultName';
  }

}