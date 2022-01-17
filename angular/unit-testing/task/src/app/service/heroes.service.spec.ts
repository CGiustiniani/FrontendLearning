import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Hero } from './hero';
import { HeroesService } from './heroes.service';
import { HttpErrorHandler } from '../http-error-handler.service';
import { MessageService } from '../message.service';

describe('Service: HeroService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let heroService: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        HeroesService,
        HttpErrorHandler,
        MessageService
      ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    heroService = TestBed.get(HeroesService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// HeroService method tests begin ///

  describe('#getHeroes', () => {
    let expectedHeroes: Hero[];

    beforeEach(() => {
      heroService = TestBed.get(HeroesService);
      expectedHeroes = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
       ] as Hero[];
    });

    it('should return expected heroes (called once)', () => {
      // TODO: subscribe to the getHeroes() method and expect it to return the mocked expectedHeroes


      // TODO: use expectOne on the httpTestingController with the URL
      // TODO: then expect the request method to be 'GET'
      

      // TODO: respond with the mock heroes (expectedHeroes)
    });

    it('should be OK returning no heroes', () => {
      // TODO: subscribe to the getHeroes() method and expect it to return an empty array

      // TODO: use the httpTestingController and respond with an empty array
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 into an empty heroes result', () => {
      // TODO: subscribe to the getHeroes() method and expect it to return an empty array

      // TODO: use expectOne on the httpTestingController with the URL

      // TODO: respond with a 404 and the error message in the body
      const errorMsg = 'deliberate 404 error';
      const error = {status: 404, statusText: 'Not Found'};
    });

    it('should return expected heroes (called multiple times)', () => {
      // TODO: subscribe 3 tiems to the getHeroes() method and expect it to return the expectedHeroes

      // TODO: use httpTestingController.match with the url and expect to be 3 requests
     

      // TODO: Respond to each request with different mock hero results
    });
  });

  describe('#updateHero', () => {
    // Expecting the query form of URL so should not 404 when id not found
    const makeUrl = (id: number) => `${heroService.heroesUrl}/?id=${id}`;

    it('should update a hero and return it', () => {

      const updateHero: Hero = { id: 1, name: 'A' };

      // TODO: call updateHero and expect the response to equal updateHero


      // TODO: expect heroservice to have made one request to PUT hero
      // TODO: expect request body to be updateHero


      // TODO: create HttpResponse and expect server to return the hero after PUT
    });

    // This service reports the error but finds a way to let the app keep going.
    it('should turn 404 error into return of the update hero', () => {
      const updateHero: Hero = { id: 1, name: 'A' };

      heroService.updateHero(updateHero).subscribe(
        data => expect(data).toEqual(updateHero, 'should return the update hero'),
        fail
      );

      const req = httpTestingController.expectOne(heroService.heroesUrl);

      // respond with a 404 and the error message in the body
      const msg = 'deliberate 404 error';
      req.flush(msg, {status: 404, statusText: 'Not Found'});
    });
  });
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/