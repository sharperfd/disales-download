import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', // รีเซ็ตตำแหน่ง Scroll เมื่อเปลี่ยน route
        anchorScrolling: 'enabled', // เปิดใช้งาน Anchor Scrolling
      }),
    ),
    provideAnimations(),
  ],
};
