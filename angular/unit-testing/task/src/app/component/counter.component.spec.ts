import {inject, TestBed} from '@angular/core/testing';
import {Counter} from './counter.component';
import {async, fakeAsync, tick} from '@angular/core/testing';

/* 
  Usage: <counter (changes)="log($event)"></counter> 
         log($event) { console.log($event) }
*/

describe('EventEmitter: Counter', () => {
  let counter;
  
  //setup
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ Counter ]
  }));
  
  beforeEach(inject([Counter], c => {
    counter = c;
  }))
  //specs
  it('should increment +1 (async)', async(() => {
    // TODO: subscribe to counter changes and expect the changed value


    // TODO: call the change method from the counter component with value 1 
  }));

  it('should decrement -1 (async)', async(() => {
    // TODO: subscribe to counter changes and expect the changed value


    // TODO: call the change method from the counter component with value -1 
  }));

  it('should increment +1 (fakeAsync/tick)', fakeAsync(() => {
    // TODO: subscribe to counter changes and expect the changed value


    // TODO: call the change method from the counter component with value 1 
    
    // TODO: since this is Async use tick() to trigger changes
  }));


  it('should decrement -1 (fakeAsync/tick)', fakeAsync(() => {
    // TODO: subscribe to counter changes and expect the changed value


    // TODO: call the change method from the counter component with value -1 
    
    // TODO: since this is Async use tick() to trigger changes
  }));
}) 