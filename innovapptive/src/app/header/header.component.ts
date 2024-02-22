import { Component } from '@angular/core';
import { MainProComponent } from '../main-pro/main-pro.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainProComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
