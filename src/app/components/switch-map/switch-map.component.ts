import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      from([1, 2, 3, 4, 5])
      .pipe(
        switchMap((value: number) => this.http.get(`https://jsonplaceholder.typicode.com/users/${value}`))
      )
      .subscribe((data: any) => {
        console.log(data)
      })

  }
}
