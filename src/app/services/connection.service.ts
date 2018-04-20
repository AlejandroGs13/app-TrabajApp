import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ConnectionService {

  usuario:any;
    url:string = 'http://localhost/scriptsPhpTrabajaap/'
  constructor(private _http:Http) {

  }


  stillr(id:string){
    let url:string = `${this.url}stillr.php?id=${id}`;
    return this._http.get(url).map(
      resp=>{
        return resp.json();
      }
    );
  }

  register(iden:string){

    let contenido:any ={
      id:iden,
      correo:"nocorreo",
      completo:"0"
    }
    let body = JSON.stringify(contenido);
    console.log("json",body);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${this.url}register2.php`
    console.log("***",url);


    return this._http.post(
      url,
      body
    ).subscribe(
        res =>{
          console.log("bien",res)
        },
        err =>{
          console.log("eee***",err)
        },
        () =>{

        }
      );


  }


}
