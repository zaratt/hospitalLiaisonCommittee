import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var require: any;
const data: any = require('./data.json');

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit {
  listOfData = data.data;
  isVisible = false;
  isEdit = false;
  isOkLoading = false;
  isOkLoadingEdit = false;
  validateForm: FormGroup;

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  showModal(): void {
    this.isVisible = true;
  }
  showModalEdit(): void {
    this.isEdit = true;
  }
  handleOkEdit(): void {
    this.isOkLoadingEdit = true;
    setTimeout(() => {
      this.isEdit = false;
      this.isOkLoadingEdit = false;
    }, 3000);
  }
  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  handleCancelEdit(): void {
    this.isEdit = false;
  }



}
