import { Component } from '@angular/core';
// import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-pro',
  standalone: true,
  imports: [],
  templateUrl: './main-pro.component.html',
  styleUrl: './main-pro.component.css'
})
export class MainProComponent {
  imageElement: HTMLImageElement = new Image();
    constructor() {
        this.imageElement.src = 'innovapptive/src/assets/images/my-image.jpg';
    }
}
