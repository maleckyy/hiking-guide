import { Component, OnInit } from '@angular/core';
import { posts } from 'src/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent{

  postsData = posts



}
