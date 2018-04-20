import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService,UsuarioService,ConnectionService} from '../../../services';
import {datos,profile,usuario,direccion} from '../../Objetos/index';
import "rxjs/add/operator/catch";
import {getAuthProfile} from '../../methos/metodos.methos';
@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styles: []
})
export class PortadaComponent implements OnInit {

  //url Portada
  url:string ="https://tecnicorichard.files.wordpress.com/2014/07/portadas-twitter-1500x500-nuevas-2.jpg"
  //instanciamos la clase metodos
  _getAuth:getAuthProfile = new getAuthProfile();
  //creado el objeto UsuarioService
  _datos:datos = new datos();
  _usuario:usuario = new usuario();
  _direccion:direccion = new direccion();
  _profile:profile = new profile(this._datos,this._direccion,this._usuario);

  constructor(private auth: AuthService,private router: Router,
    private usuSer:UsuarioService, private connection:ConnectionService) {
    }

    ngOnInit() {
      this.getProfile();
      let band:boolean = false;
      setTimeout(() =>
      {
          this.connection.stillr(this._profile.usu.id).
          subscribe(
            data =>{
            if (data[0]) {
              let temp = data[0];
              this._profile.usu.id = temp.id;
              this._profile.usu.correo = temp.correo;
              this._profile.usu.completo = (temp.completo==1);
              band = true;
            }
          },
          err =>{
            console.log("este es el error:",err)
          },
          () => {
            //console.log("usuario**:",this._profile.usu);
            if(band){
              console.log("entro");
            }else{
              console.log("entro222");
              this.connection.register(this._profile.usu.id);
            }
          } );
      },
      1500);
    }

    private getProfile(){
        if (this.auth.userProfile) {
          this._profile = this._getAuth.getProfile(this.auth);
        }
        else {
          this.auth.getProfile((err, profile) => {
            this._profile = this._getAuth.getProfile(this.auth);
          });
    }
}

}
