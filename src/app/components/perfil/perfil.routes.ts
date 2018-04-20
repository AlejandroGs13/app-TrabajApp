import { RouterModule, Routes } from '@angular/router';
import {NourlComponent} from '../nourl/nourl.component';
import {InformacionComponent} from './informacion/informacion.component';
import {ConfiguracionComponent} from './configuracion/configuracion.component';

export const APP_ROUTES_PEFIL: Routes = [
  { path: 'NoValido', component: NourlComponent },
  { path: 'configuracion', component: ConfiguracionComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'NoValido' }];
