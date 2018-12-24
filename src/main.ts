import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { GameModule } from './game/game.module';
import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(GameModule)
  .catch(err => console.error(err));
