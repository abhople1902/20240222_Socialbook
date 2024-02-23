import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  impLinks = [
    { title: "Latest News", url: "https://i.postimg.cc/RCj4MjnC/news.png" },
    { title: "Friends", url: "https://i.postimg.cc/MpBwMtV0/friends.png" },
    { title: "Groups", url: "https://i.postimg.cc/44FRWj1b/group.png" },
    { title: "Marketplace", url: "https://i.postimg.cc/0jh39RtT/marketplace.png" },
    { title: "Watch", url:"https://i.postimg.cc/VsXHCTVk/watch.png" }
  ]
  userShortcuts = [
    { title: "GPFans", url: "https://www.gpfans.com/en/f1-news/1013576/f1-announce-major-statement-on-horner-and-red-bull-investigation/"},
    { title: "GPFans", url: "https://www.gpfans.com/en/f1-news/1013576/f1-announce-major-statement-on-horner-and-red-bull-investigation/"},
    { title: "GPFans", url: "https://www.gpfans.com/en/f1-news/1013576/f1-announce-major-statement-on-horner-and-red-bull-investigation/"},
    { title: "GPFans", url: "https://www.gpfans.com/en/f1-news/1013576/f1-announce-major-statement-on-horner-and-red-bull-investigation/"}
  ]
}
