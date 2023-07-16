import { Component, OnInit } from '@angular/core';
import {fromEvent, interval, range, timer} from 'rxjs';
import {take, takeLast, takeUntil, takeWhile} from 'rxjs/operators'
@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit{

  domClick = fromEvent(document, 'click')
  ngOnInit(): void {
      // this.take();
      // this.takeUntil();
      // this.takeWhile();
      this.takeLast(5);

  }


  take() {
    interval(2000)
    .pipe(
      take(5)
    )
    .subscribe((data: number) => {console.log(data)})
  }

  takeUntil() {
    interval(2000)
    .pipe(
      takeUntil(this.domClick)
    )
    .subscribe((data: number) => console.log(data))
  }

  takeWhile() {
    interval(2000)
    .pipe(
      takeWhile((value: number) => value < 5)
    )
    .subscribe((data:any) => console.log(data))
  }

  takeLast(n: number) {
    range(1, 50)
    .pipe(
      takeLast(n)
    )
    .subscribe((data: number) => console.log(data))
  }

}
