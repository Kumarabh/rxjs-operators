import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, range } from 'rxjs';
import { skip, skipLast, skipUntil, skipWhile } from 'rxjs/operators';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent implements OnInit {

  notifier = fromEvent(document, 'click')
  ngOnInit(): void {
      this.skipLast().subscribe(data => console.log(data))
  }

  skip() {
    return from([1, 2, 3, 4, 5, 6])
    .pipe(
      skip(2)
    )
  }

  skipUntil() {
    return interval(2000)
    .pipe(
      skipUntil(this.notifier)
    )
  }

  skipWhile() {
    return range(1, 100)
    .pipe(
      skipWhile(element => element < 10)
    )
  }

  skipLast() {
    return range(1, 10)
    .pipe(
      skipLast(2)
    )
  }

}
