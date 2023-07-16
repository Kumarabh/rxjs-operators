import { Component, OnInit } from '@angular/core';
import {from, of} from 'rxjs';
import { delay, distinctUntilChanged, distinctUntilKeyChanged, filter } from 'rxjs/operators';

interface User {
  id: number,
  name: string
}

type Product = {
  id: number,
  name: string,
  code: string
}

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit{

  arrOfNumbers = [1, 2, 3, 3, 4, 5];
  // arrOfUsers: User[] = [{id: 1, name: 'John Doe'}, {id: 2, name: 'James Smith'}, {id: 1, name: 'John Doe'}];
  arrOfUserss: User[] = 
  [
    { id: 1, name: 'James Smith' },
    { id: 2, name: 'John Doe' },
    { id: 2, name: 'John Doe' },
    { id: 4, name: 'James Sue' }
  ]

  ngOnInit(): void {
    this.getDistinctUntilKeyChanged();
    // this.getDistinctUntilChanged();
  }

  getDistinctUntilKeyChanged() {
     from(this.arrOfUserss)
    .pipe(
     distinctUntilKeyChanged('id')
    )
    .subscribe((data: any) => console.log(data))
  }

  getDistinctUntilChanged() {
    from(this.arrOfUserss)
    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);
  }


}
