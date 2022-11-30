import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient){}
    posts: any[] = [];
    loadPosts(){
      this.http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe((posts: any)=>{
        this.posts = posts;
      });
    }
    createPosts(){
      this.http.post("https://jsonplaceholder.typicode.com/posts", {})
      .subscribe((posts:any)=>{
        this.posts = posts;
      })
    }
}

