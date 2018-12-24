import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GameNavbarComponent } from './components/game-navbar/game-navbar.component';
import { NavbarButtonComponent } from './components/game-navbar/navbar-button/navbar-button.component';
import { GameComponent } from './components/game.component';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    GameComponent,
    GameNavbarComponent,
    NavbarButtonComponent,
  ],
  imports: [
    BrowserModule,
    GameRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [GameComponent],
})
export class GameModule { }

registerLocaleData(localeDe);
