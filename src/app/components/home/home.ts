// home.component.ts
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

type Mode = 'prod' | 'uat';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  mode: Mode = 'prod';

  get isUAT() {
    return this.mode === 'uat';
  }

  // base ที่แตกต่างกันระหว่าง prod และ uat
  private get baseDownloadPath() {
    return this.isUAT ? '/assets/app-installer/uat' : '/assets/app-installer';
  }

  links: Array<{ name: string; url: string; icon: 'android' | 'apple' }> = [];

  ngOnInit() {
    // อ่านค่า mode จาก route data (มาจาก router config ด้านบน)
    const data: Data = this.route.snapshot.data;
    this.mode = (data['mode'] as Mode) ?? 'prod';

    const base = this.baseDownloadPath;

    this.links = [
      {
        name: 'Play Store',
        url: `${base}/di-sales.apk`,
        icon: 'android',
      },
      {
        name: 'App Store',
        url: `itms-services://?action=download-manifest&url=${location.origin}${base}/manifest.plist`,
        icon: 'apple',
      },
    ];
  }
}
