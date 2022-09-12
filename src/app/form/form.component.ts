import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  myForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    company: new FormControl(''),
    number: new FormControl('',
      [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10)
      ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl(''),
  })

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  get name() {
    return this.myForm.get('name');
  }

  get phone() {
    return this.myForm.get('number');
  }

  get email() {
    return this.myForm.get('email');
  }
}
