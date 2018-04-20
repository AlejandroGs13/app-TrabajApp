import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';
import {PerfilComponent} from './components/perfil/perfil.component';
import {NourlComponent} from './components/nourl/nourl.component';
/*components*/
import {HomeComponent} from './components/home/home.component';

/****children******/
import {APP_ROUTES_PEFIL} from './components/perfil/perfil.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'NoValido', component: NourlComponent },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuardService],
    children: APP_ROUTES_PEFIL
   },
  // {
  //   path: 'trabajos',
  //   component: TrabajosComponent,
  //   canActivate: [AuthGuardService]
  // },
  // {
  //   path: 'talentos',
  //   component: TalentosComponent,
  //   canActivate: [AuthGuardService]
  // },
  { path: '**', pathMatch: 'full', redirectTo: 'NoValido' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
