import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Root, Root2, User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@ts-ignore
  boolets: Root2 = {}
  once: boolean = true;
  //@ts-ignore
  user: User = {}
  constructor(private http: HttpClient) {

  }
  lol(ineedmoreboolets: HTMLInputElement) {
    //@ts-ignore
    this.boolets = {}
    //@ts-ignore
    this.http.get<Root>("https://cors-anywhere.herokuapp.com/https://ch.tetr.io/api/users/" + ineedmoreboolets.value).subscribe/*and hit the notification bell so you dont miss another video*/(boolet => {
    //@ts-ignore  
      this.boolets = boolet;
      this.user = this.boolets.data.user;
      this.once = false; 
    })
    
  }

}
