import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { GameNavbarComponent } from './components/game-navbar/game-navbar.component';
import { NavbarButtonComponent } from './components/game-navbar/navbar-button/navbar-button.component';
import { GameComponent } from './components/game.component';
import { SmackEffects } from './core/effects/smack.effects';
import { globalGameStateReducer } from './core/reducer/global-state.reducer';
import { mitarbeiterReducer } from './core/reducer/mitarbeiter.reducer';
import { smackReducer } from './core/reducer/smack.reducer';
import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    GameComponent,
    GameNavbarComponent,
    NavbarButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GameRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // NGRX-Store
    StoreModule.forRoot({}),
    StoreModule.forFeature('global', globalGameStateReducer),
    StoreModule.forFeature('smack', smackReducer),
    StoreModule.forFeature('mitarbeiter', mitarbeiterReducer),
    EffectsModule.forRoot([SmackEffects]),
    // Store devtools
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  exports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }],
  bootstrap: [GameComponent],
})
export class GameModule { }

registerLocaleData(localeDe);
