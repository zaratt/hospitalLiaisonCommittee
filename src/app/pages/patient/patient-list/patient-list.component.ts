import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
declare var require: any;
const data: any = require('./data.json');

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {
  listOfData = data.data;
  isVisible = false;
  isEdit = false;
  isOkLoading = false;
  isOkLoadingEdit = false;
  validateForm: FormGroup;
  selectedValue = null;
  listOfOption: Array<{ value: string; text: string }> = [];
  nzFilterOption = () => true;

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private nzMessageService: NzMessageService) { }

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
  search(value: string): void {
    this.httpClient
      .jsonp<{ result: Array<[string, string]> }>(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, 'callback')
      .subscribe(data => {
        const listOfOption: Array<{ value: string; text: string }> = [];
        data.result.forEach(item => {
          listOfOption.push({
            value: item[0],
            text: item[0]
          });
        });
        this.listOfOption = listOfOption;
      });
  }

  cancel(): void {
    this.nzMessageService.info('Delete cancelled');
  }

  confirm(): void {
    this.nzMessageService.info('Delete confirmed');
  }
}
