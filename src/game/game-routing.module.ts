import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'smack',
    loadChildren: './modules/smack/smack.module#SmackModule',
  },
  {
    path: 'mitarbeiter',
    loadChildren: './modules/mitarbeiter/mitarbeiter.module#MitarbeiterModule',
  },
  {
    path: 'gebaeude',
    loadChildren: './modules/gebaeude/gebaeude.module#GebaeudeModule',
  },
  {
    path: 'sendungen',
    loadChildren: './modules/sendungen/sendungen.module#SendungenModule',
  },
  {
    path: 'sendeplan',
    loadChildren: './modules/sendeplan/sendeplan.module#SendeplanModule',
  },
  {
    path: 'sponsoren',
    loadChildren: './modules/sponsoren/sponsoren.module#SponsorenModule',
  },
  {
    path: 'merchandise',
    loadChildren: './modules/merchandise/merchandise.module#MerchandiseModule',
  },
  {
    path: 'statistik',
    loadChildren: './modules/statistik/statistik.module#StatistikModule',
  },
  {
    path: '',
    redirectTo: 'smack',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }
