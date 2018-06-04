import { Component, OnInit } from '@angular/core';
import {Finca} from '../../clases/finca'
import {Config} from '../../clases/config';
import {Router,ActivatedRoute} from '@angular/router'
//import {ScrollService} from '../../servicio/scroll.service'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-detallefinca',
  templateUrl: './detallefinca.component.html',
  styleUrls: ['./detallefinca.component.css']
})
export class DetallefincaComponent implements OnInit {
  public cod:string;
 public finca:Finca;
 public urlSanada:SafeResourceUrl;
 public info:any[]=[{codigo:'HISTORIA',imagen:'assets/personas.png',titulo:'HISTORIA'},{codigo:'CACAO',imagen:'assets/cacao1.png',titulo:'CACAO'},{codigo:'SUELO',imagen:'assets/suelo.png',titulo:'SUELOS'},{codigo:'ESTRUCTURA',imagen:'assets/logocacao.png',titulo:'ESTRUCTURA'},{codigo:'PERFIL',imagen:'assets/perfilsensorial.png',titulo:'PERFIL SENSORIAL'}]
  constructor(public ServicioFinca:Finca,
  public param:ActivatedRoute,
public ruta:Router, public sanitizer: DomSanitizer,

) {
      
   }

  ngOnInit() {
    this.cod=this.param.snapshot.params['cod'];
    this.ConsultarFinca(this.cod);
    this.IrAlPrincipio(0);
  }

 async ConsultarFinca(cod){
  
       this.finca=await this.ServicioFinca.ConsultarFinca(cod);
       this.finca.imagen_finca=Config.host+this.finca.imagen_finca;
       this.urlSanada=this.cleanURL(this.finca.video_finca);
    
  }
  cleanURL(oldURL: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
   }

   IrSeccion(i){
     //this.Scroll.ScrollTo(i.codigo,1000);
     //this.animateScrollService.scrollToElement(i.codigo,1000);
    //this.ruta.navigateByUrl("Finca/"+this.param.snapshot.params['cod']+"#"+i.codigo);
 //[attr.href]="'Finca/'+cod+'#'+i.codigo" 
 let posicion=document.getElementById(i.codigo).offsetTop;
 $("html, body").animate({
   scrollTop: posicion  
 }, 1000); 
 }
Inicio(){
  let link=['Fincas']
  this.ruta.navigate(link);
}
 IrAlPrincipio(tiempo){
  $("html, body").animate({
    scrollTop: 0  
  }, tiempo); 

 }
 

}
