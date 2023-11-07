import { Component, Input } from '@angular/core';
import { Posts } from 'src/data/data';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  faArrowRight=faArrowRight
  @Input() post:any;

}
