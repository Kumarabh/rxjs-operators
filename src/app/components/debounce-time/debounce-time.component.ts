import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import {debounceTime} from 'rxjs/operators';

interface Error {
  required: string,
  email: string
}

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit{

  email: FormControl = new FormControl('', [Validators.minLength(10), Validators.email]);
  validationMessages: string[] = [];

  ngOnInit(): void {
      this.email.valueChanges.pipe(
        debounceTime(2000)
      )
      .subscribe((data) => this.setEmailValidation())
  }

  setEmailValidation() {
    this.validationMessages = [];
    const validationMessagesTypes: any = {
        required: "Email field is required",
        email: "Please enter a valid Email",
        minlength: 'Minimum length required is 10'
    }
    if( (this.email.dirty || this.email.touched) && this.email.errors) {
      // validationMessage = Object.keys(this.email.errors).map((key) => validationMessages[key]).join(' ')
      Object.keys(this.email.errors).forEach((error: string) => {
        console.log(error)
        this.validationMessages.push(validationMessagesTypes[error])
      })
    }

  }
}
