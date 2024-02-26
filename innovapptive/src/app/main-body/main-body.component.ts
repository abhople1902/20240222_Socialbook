import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { MiddlebodyComponent } from '../middlebody/middlebody.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';


@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [LeftSidebarComponent, MiddlebodyComponent, RightSidebarComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {

}
