import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-sso',
  templateUrl: './custom-sso.component.html',
  styleUrls: ['./custom-sso.component.css'],
})
export class CustomSsoComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    let enco: any = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    // let body: any = new HttpParams();
    // return this.httpClient.post(
    //   'https://localhost:8000/session/check',
    //   {},
    //   {
    //     headers: enco,
    //     withCredentials: true,
    //   }
    // ).subscribe(d=>{
    //   console.log(d);
    // });

    // this.httpClient
    //   .get<any>('https://localhost:8000/session/check', {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //     }),
    //     withCredentials: true,
    //   })
    //   .subscribe((d) => {
    //     console.log(d);
    //   });
  }
}
