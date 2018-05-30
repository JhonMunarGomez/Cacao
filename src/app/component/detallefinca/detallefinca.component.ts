import { Component, OnInit } from '@angular/core';
import {Finca} from '../../clases/finca'
import {Config} from '../../clases/config';
import {Router,ActivatedRoute} from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-detallefinca',
  templateUrl: './detallefinca.component.html',
  styleUrls: ['./detallefinca.component.css']
})
export class DetallefincaComponent implements OnInit {
 public finca:Finca;
 public urlSanada:SafeResourceUrl;
 public info:any[]=[{codigo:'HISTORIA',imagen:'assets/personas.png',titulo:'HISTORIA'},{codigo:'CACAO',imagen:'assets/cacao1.png',titulo:'CACAO'},{codigo:'SUELOS',imagen:'assets/suelo.png',titulo:'SUELOS'},{codigo:'ESTRUCTURA',imagen:'assets/logocacao.png',titulo:'ESTRUCTURA'},{codigo:'PERFIL',imagen:'assets/perfilsensorial.png',titulo:'PERFIL SENSORIAL'}]
  constructor(public ServicioFinca:Finca,
  public param:ActivatedRoute,
public ruta:Router, public sanitizer: DomSanitizer) {
      
   }

  ngOnInit() {
    
    this.ConsultarFinca(this.param.snapshot.params['cod'])
  }

 async ConsultarFinca(cod){
  
       this.finca=await this.ServicioFinca.ConsultarFinca(cod);
       this.finca.imagen_finca=Config.host+this.finca.imagen_finca;
       this.urlSanada=this.cleanURL(this.finca.video_finca);
    
  }
  cleanURL(oldURL: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
   }
 

}
