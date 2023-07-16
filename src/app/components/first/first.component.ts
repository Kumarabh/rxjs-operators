import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { first, last } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  arrOfNumbers = [1, 2, 3, 4, 5, 6, 8, 9];

  ngOnInit(): void {
    this.first().subscribe((data: any) => console.log(data))
    this.last().subscribe((data: any) => console.log(data))
  }

  first() {
    return from(this.arrOfNumbers)
      .pipe(
        // first()
        first((value: number) => value % 2 === 0)
      )
  }

  last() {
    return from(this.arrOfNumbers)
      .pipe(
        // last()
        last((value: number) => value % 3 === 0)
      )
  }

}
