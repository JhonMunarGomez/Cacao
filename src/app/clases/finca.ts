import{HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import {Config} from './config'
@Injectable()
export class Finca{
    codigo_finca?:string;
    nombre_finca:string;
    nombre_departamento:string;
    ubicacion?:string;
    imagen_finca:string;
    video_finca:string;
    estructura?:string;
    suelo?:string;
    historia?:string;
    cacao?:string;
    diseno_finca?:string;
    activo:boolean=false;
    perfil_sensorial?:string;
      constructor(public http:HttpClient){

      }

    ConsultarFincas():Promise<any>{
        return this.http.get<any>(Config.host+'/consultarfincas/').toPromise();
    }
    ConsultarFinca(cod):Promise<any>{
        return this.http.get<any>(Config.host+'/consultarfincas/'+cod).toPromise();
    }
    ConsultarPerfilSensorial(cod):Promise<any>{
     
        return this.http.get<any>(Config.host+'/consultarperfilsensorial/'+cod).toPromise();
    }
    ConsultarProduccion(cod,tipo):Promise<any>{
        return this.http.get<any>(Config.host+'/consultarproduccion/'+cod+'&&'+tipo).toPromise();
    }
}