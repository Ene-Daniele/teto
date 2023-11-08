import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  boolets = []
  lol(ineedmoreboolets: HTMLInputElement, http: HttpClient) {
    console.log(ineedmoreboolets.value);
    //@ts-ignore
    
    http.get("https://tetr.io/about/api/users" + ineedmoreboolets.value).subscribe(boolet => this.boolets.push(boolet))
  }

}
