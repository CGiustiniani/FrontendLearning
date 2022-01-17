import {ComponentFixture, TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {Component, Output, EventEmitter} from '@angular/core';
import {logClicks} from './click.directive';

/* 
  Usage:     <div log-clicks></div>
  For each click increments the public property `counter`.
*/
@Component({ 
  selector: 'container',
  template: `<div log-clicks (changes)="changed($event)"></div>`,
})
export class Container {  
  @Output() changes = new EventEmitter();
  
  changed(value){
    this.changes.emit(value);
  }
}

describe('Directive: logClicks', () => {
  let fixture, container, element;    

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ Container, logClicks ]
    });

    fixture = TestBed.createComponent(Container);
    container = fixture.componentInstance;
    element = fixture.nativeElement;
  });
  
  //specs
  it('should increment counter (async)', async(() => {
    // TODO: get the div element via query selector

    // TODO: subscribe to the container changes and expect a value

    // TODO: trigger click on container
  }));

  it('should increment counter (fakeAsync/tick)', fakeAsync(() => {
    // TODO: get the div element via query selector

    // TODO: subscribe to the container changes and expect a value

    // TODO: trigger click on element

    // TODO: call tick() to execute async calls
  }));
}) 