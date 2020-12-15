import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './app/shared/custom-prototypes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      try {
        window['ngRef'].destroy();
      } catch (error) {
        console.error('[main.ts] Unable to destroy window["ngRef"]', error);
      }
    }
    window['ngRef'] = ref;
  })
  .catch((err) => console.error(err));
