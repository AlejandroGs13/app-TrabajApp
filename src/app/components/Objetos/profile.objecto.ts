import {datos,usuario,direccion} from './index';

export class profile{

  informacion:datos;
  usu:usuario;
  domicilio:direccion;

  constructor(informacion:datos,domicilio:direccion,usu:usuario){
    this.informacion = informacion;
    this.usu = usu;
    this.domicilio = domicilio;
  }

}
