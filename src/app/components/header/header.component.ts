import { Component } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faCircleUser = faCircleUser
}
