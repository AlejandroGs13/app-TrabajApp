import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
/******routes*****/
import {APP_ROUTING} from './app.routes';
/********services*********/

import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {UsuarioService} from './services/usuario.service';
import {ConnectionService} from './services/connection.service';

/*****components******/
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PortadaComponent } from './components/perfil/portada/portada.component';
import {NavbarPerfilComponent} from './components/perfil/navbar/navbar-perfil.component';
import { ConfiguracionComponent } from './components/perfil/configuracion/configuracion.component';
import { NourlComponent } from './components/nourl/nourl.component';
import {NoinfoComponent} from './components/noinfo/noinfo.component';
import {NoinfoInComponent} from './components/perfil/noinfo/noinfo.component';
import {InformacionComponent} from './components/perfil/informacion/informacion.component';
/**Pipes**/
import { PortadaPipe } from './pipes/portada.pipe';
import { ValueNullPipe } from './pipes/value-null.pipe';

@NgModule({
  declarations: [
    PortadaPipe,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PerfilComponent,
    PortadaComponent,
    NavbarPerfilComponent,
    ConfiguracionComponent,
    NourlComponent,
    NoinfoComponent,
    InformacionComponent,
    NoinfoInComponent,
    ValueNullPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UsuarioService,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
