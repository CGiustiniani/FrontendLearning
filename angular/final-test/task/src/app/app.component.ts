import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Component({ 
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    profileForm: FormGroup;
    profilePictureUrl: string;
    registerDate: string;
    submitted = false;
    user: any;

    constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService) { }

    ngOnInit() {
        this.createProfileForm();
        this.loadProfile();
    }

    createProfileForm(){
      // TODO1: create the profileForm (reactive Form) for the existing html
      // TODO2: add validators so each field is required and validate the email
    }

    loadProfile() {
      // TODO: check if user is already stored in userService else call the api and store the user in the service
      // TODO: load user data from https://randomuser.me/api/ via http get
      // and update the profileForm fields with the correct data
    }

    updateFormValues(user) {
      // TODO: update profileForm value & set profilePicture / registerDate
    }

    // convenience getter for easy access to form fields
    getFormValue(field) { 
      return this.profileForm.get(field).value; 
    }

    onUpdate() {
        this.submitted = true;

        //TODO: stop here if form is invalid
    }
}
