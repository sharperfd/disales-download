import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  imports: [CommonModule]
})
export class HomeComponent {
  links = [
    {
      name: 'Play Store',
      url: 'https://disales-download.vercel.app/assets/app-installer/di-sales.apk',
      icon: 'android'
    },
    {
      name: 'App Store',
      url: 'itms-services://?action=download-manifest&url=https://disales-download.vercel.app/assets/app-installer/manifest.plist',
      icon: 'apple'
    },
  ];
}