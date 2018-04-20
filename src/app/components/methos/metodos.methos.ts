import { AuthService } from '../../services/auth.service';
import {datos,profile,usuario,direccion} from '../Objetos/index';


export class getAuthProfile{

  _datos:datos = new datos();
  _usuario:usuario = new usuario();
  _direccion:direccion = new direccion();
  _profile:profile = new profile(this._datos,this._direccion,this._usuario);

  public getProfile(auth:AuthService):profile{
    let profile:any;
    profile = auth.userProfile;
    console.log("datos auth:",profile);
    if (profile.picture) {
        this._profile.informacion.foto = profile.picture;
    }
    if (profile.sub) {

        this._profile.usu.id  = profile.sub;
    }
    if (profile.name) {
        this._profile.informacion.nombre = profile.name;
    }
    return this._profile;
  }


}
