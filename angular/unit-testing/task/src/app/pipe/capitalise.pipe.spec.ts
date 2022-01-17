import {inject, TestBed} from '@angular/core/testing';
import {CapitalisePipe} from './capitalise.pipe';

describe('Pipe: CapitalisePipe', () => {
  let pipe;
  
  //setup
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ CapitalisePipe ]
  }));
  
  beforeEach(inject([CapitalisePipe], p => {
    pipe = p;
  }));
  
  //specs
  it('should work with empty string', () => {
    // TODO: expect the pipe to work with empty string
  });
  
  it('should capitalise', () => {
    // TODO: expect the pipe to capitalise the string
  });
  
  it('should throw with invalid values', () => {
    // TODO: expect the pipe to throw an error when undefined or null is used
  });
})