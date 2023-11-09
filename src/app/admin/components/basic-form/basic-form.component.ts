import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: [''],
      phone: [''],
      color: ['#000000'],
      date: [''],
      age: [12],
      category: [''],
      tag: [''],
      agree: [false],
      gender: [''],
      zone: [''],
    });
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
