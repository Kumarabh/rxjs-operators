import { Component, OnInit } from '@angular/core';
import {from, range} from 'rxjs';
import {defaultIfEmpty, every, find, findIndex, throttleTime} from 'rxjs/operators';
@Component({
  selector: 'app-conditional-and-boolean',
  templateUrl: './conditional-and-boolean.component.html',
  styleUrls: ['./conditional-and-boolean.component.scss']
})
export class ConditionalAndBooleanComponent implements OnInit {

  ngOnInit(): void {
      this.throttleTime().subscribe((data) => console.log(data))
  }
  
  defaultIfEmpty() {
    return from([1, 2, 3, 4, 5])
    .pipe(
      defaultIfEmpty('No values provided.')
    )
  }

  every() {
    return from ([1, 2, 3, 4, 5])
    .pipe(
      every((value) => value < 10)
    )
  }

  find() {
    return from ([1, 2, 10, 4, 5])
    .pipe(
      find((value) => value < 10)
    )
  }

  findIndex() {
    return from ([1, 2, 3, 4, 5])
    .pipe(
      findIndex((value) => value < 10)
    )
  }

  throttleTime() {
    return from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(
      throttleTime(1000)
    )
  }
  
}
