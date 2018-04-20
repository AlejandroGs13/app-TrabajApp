import { Component, OnInit } from '@angular/core';
import {datos,profile,usuario,direccion} from '../../Objetos/index';
import {AuthService,ConnectionService} from '../../../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styles: []
})
export class ConfiguracionComponent implements OnInit {
  activo:boolean = true;

  dato:boolean = true;

  _datos:datos = new datos();
  _usuario:usuario = new usuario();
  _direccion:direccion = new direccion();
  _profile:profile = new profile(this._datos,this._direccion,this._usuario);

  constructor(private auth:AuthService,private connection:ConnectionService) { }

  ngOnInit() {
    setTimeout(() =>
    {
      let pro:any;
      pro = this.auth.userProfile;
      this.connection.stillr(pro.sub).subscribe(data=>{
        let temp = data[0];
        this._profile.usu.id = temp.id;
        this._profile.usu.correo = temp.correo;
        this._profile.usu.completo = (temp.completo==1);
        this.activo = this._profile.usu.completo;
      });
      console.log("{}",this._profile)
    },1000);

  }

  setData(forma){
     console.log("<<<<<>",forma);
     console.log("<<<<<>",this._profile);
  }

  activos(){
    this.activo = !this.activo;
  }

  datos(){
    this.dato = !this.dato;
  }
}
