import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSettingsMenuOpen: boolean = false;
  profileIconUrl: string = 'https://i.postimg.cc/cHg22LhR/profile-pic.png';

  settingsMenuToggle(): void {
    this.isSettingsMenuOpen = !this.isSettingsMenuOpen;
  }
  
  imageUrls: string[] = [
    'https://i.postimg.cc/Fs3m1Djy/notification.png',
    'https://i.postimg.cc/YqGKZ8nc/inbox.png',
    'https://i.postimg.cc/xCzpgFjg/video.png'
  ];
}
