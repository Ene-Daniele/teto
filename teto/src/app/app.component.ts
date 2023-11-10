import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Root } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boolets = []
  constructor(private http: HttpClient) {

  }
  lol(ineedmoreboolets: HTMLInputElement) {
    this.boolets = []
    //@ts-ignore
    this.http.get<Root>("https://cors-anywhere.herokuapp.com/https://ch.tetr.io/api/users/" + ineedmoreboolets.value).subscribe(boolet => this.boolets.push(boolet))
  }

}
