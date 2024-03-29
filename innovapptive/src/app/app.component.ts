import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { MainProComponent } from './main-pro/main-pro.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { myData } from './shared/data';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, MainBodyComponent, LogoComponent, MainProComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // imageUrl: string = "innovapptive/src/assets/images/my-image.jpg";
  // data = myData;
}
