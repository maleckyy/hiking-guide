import { Component } from '@angular/core';
import { posts } from 'src/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  posts = posts



}
