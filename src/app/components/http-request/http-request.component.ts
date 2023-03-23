import { Users } from './../../model/users';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent {
  users: Users[] = [];

  constructor(private http: HttpClient){
    setTimeout(() => {
      http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.users = res;
      })
    }, 2000);
  }
}
