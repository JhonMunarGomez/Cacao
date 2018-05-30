import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {Finca} from './clases/finca';
import { FincasComponent } from './component/fincas/fincas.component';
import { DetallefincaComponent } from './component/detallefinca/detallefinca.component'
import {AppRoutingModule} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    FincasComponent,
    DetallefincaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [Finca],
  bootstrap: [AppComponent]
})
export class AppModule { }
