import { Injectable, ElementRef, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { $ } from 'protractor';

@Injectable()
export class ScrollService {

 ScrollTo(name,duration){
   var posicion=document.getElementById(name).offsetTop;
   $("html, body").animate({
     scrollTop: posicion  
   }, 1000); 
 }
   
 

}
