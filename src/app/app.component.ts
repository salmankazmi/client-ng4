import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserService } from './user/user.service';


interface UserResponse {
  id: number;
  userId: number;
  title: string;
  body: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit(): void {
    /* this.http.get<UserResponse>('http://jsonplaceholder.typicode.com/posts').subscribe(
      response => {
        //console.log(response);
        this.posts = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    ) */

    /* this.http.post('http://jsonplaceholder.typicode.com/posts', {
      userId: 1, title: 'foo', body: 'bar'
    }).subscribe(
      response => {
        console.log('Response ' + JSON.stringify(response));
      }, error => {
        console.log('Error ' + + JSON.stringify(error));
      }
      ) */
  }
}