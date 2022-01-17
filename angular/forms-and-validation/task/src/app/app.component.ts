import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        // TODO: add validators to the form fields
        this.registerForm = this.formBuilder.group({
            title: [''],
            firstName: [''],
            lastName: [''],
            email: [''],
            password: [''],
            confirmPassword: [''],
            acceptTerms: [false]
        });
    }

    // convenience getter for easy access to form fields
    get form() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        //TODO: stop here if form is invalid
        

        // display form values on success
        alert('SUCCESS: \n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}
