import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      
    from([1, 2, 3, 4, 5])
    .pipe(
      concatMap((value: number) => this.http.get(`https://jsonplaceholder.typicode.com/users/${value}`))
    )
    .subscribe((data: any) => console.log(data))
  }
}
