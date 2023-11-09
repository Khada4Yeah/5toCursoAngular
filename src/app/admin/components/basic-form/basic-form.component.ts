import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl(12),

    category: new FormControl('category-2'),
    tag: new FormControl(),

    agree: new FormControl(false),
    gender: new FormControl(false),
    zone: new FormControl(false),
  });

  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    console.log(this.form.value);
  }

  get nameField() {
    return this.form.get('name') as FormControl;
  }

  get emailField() {
    return this.form.get('email') as FormControl;
  }

  get phoneField() {
    return this.form.get('phone') as FormControl;
  }

  get colorField() {
    return this.form.get('color') as FormControl;
  }

  get dateField() {
    return this.form.get('date') as FormControl;
  }

  get ageField() {
    return this.form.get('age') as FormControl;
  }

  get categoryField() {
    return this.form.get('category') as FormControl;
  }

  get tagField() {
    return this.form.get('tag') as FormControl;
  }

  get agreeField() {
    return this.form.get('agree') as FormControl;
  }

  get genderField() {
    return this.form.get('gender') as FormControl;
  }

  get zoneField() {
    return this.form.get('zone') as FormControl;
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }
}
