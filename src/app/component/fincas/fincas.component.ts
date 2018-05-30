import { Component, OnInit } from '@angular/core';
import { trigger, style ,state,transition,animate} from '@angular/animations';
import {Finca} from '../../clases/finca'
import {Config} from '../../clases/config'
import {Router} from '@angular/router'
@Component({
  selector: 'app-fincas',
  templateUrl: './fincas.component.html',
  styleUrls: ['./fincas.component.css'],
  animations:[ trigger('ampliar',[
    state('true',style({
      height:'*',
      opacity:'1'
    })),
    state('false',style({
      height:'0px',
      opacity:'0'
 
    })), 
    transition('false => true', animate(500)),
    transition('true => false', animate(500))
  
  ])]
})
export class FincasComponent implements OnInit {
  public lista:any[]=[];
  constructor(public ServicioFinca:Finca,
  public ruta:Router) { }

  ngOnInit() {
    this.ConsultarFincas();
  }
  Activar(i){
    i.activo=!i.activo;

  }
    async ConsultarFincas(){
      this.lista=await this.ServicioFinca.ConsultarFincas();
      this.lista.forEach(element=>{
        element.imagen_finca=Config.host+element.imagen_finca
        element.activo=false;
      })
    }

    DetalleFinca(i){
      let link=['Finca',i.codigo_finca]
      this.ruta.navigate(link);
    }
  

}
