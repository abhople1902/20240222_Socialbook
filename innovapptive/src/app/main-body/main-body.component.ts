import { Component } from '@angular/core';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [LeftSidebarComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css'
})
export class MainBodyComponent {

}
