import { User } from './../../model/users';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent {
  users: User[] = [];

  constructor(private http: HttpClient){
    setTimeout(() => {
      http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        this.users = res;
      })
    }, 2000);
  }

  delete(user: User) {
    // console.log("[debug] delete", user)
    // FIRST METHOD
    // const index = this.users.indexOf(user)

    // SECOND METHOD
    // const index = this.users.findIndex((item) => item.id === user.id)
    // this.users.splice(index, 1)

    // THIRD METHOD
    this.users = this.users.filter(item => item.id !== user.id)
  }
}
