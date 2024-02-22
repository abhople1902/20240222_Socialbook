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
  isSettingsMenuOpen: boolean = false;

  settingsMenuToggle(): void {
    this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
  }
  
  imageUrls: string[] = [
    'https://i.postimg.cc/Fs3m1Djy/notification.png',
    'https://i.postimg.cc/YqGKZ8nc/inbox.png',
    'https://i.postimg.cc/xCzpgFjg/video.png'
  ];
}
