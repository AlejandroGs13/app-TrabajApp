import { Injectable } from '@angular/core';
import {usuario} from '../components/Objetos/usuario.objecto';

@Injectable()
export class UsuarioService {

  usu:usuario;

  constructor() {

  }

  setUsuario(usu:usuario){
    this.usu = usu;
  }

  getUsuario(){
    return this.usu;
  }

}
