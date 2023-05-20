import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const PROXY_CONFIG = [
    {
      context: [
        "/api" 
      ],
      target: "http://localhost:8000",
      secure: false,
      changeOrigin: true
    }
  ];
  