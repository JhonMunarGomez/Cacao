import {NgModule } from '@angular/core'
import {RouterModule,Routes,RunGuardsAndResolvers} from '@angular/router'
import { FincasComponent } from './component/fincas/fincas.component';
import { DetallefincaComponent } from './component/detallefinca/detallefinca.component'

const appRoutes:Routes=[
     {path:'',redirectTo:'Fincas',pathMatch:'full'},
     {path:'Fincas',component:FincasComponent},
    {path:'Finca/:cod',component:DetallefincaComponent}  
]

@NgModule({
   imports :[
       RouterModule.forRoot(appRoutes)
   ],
   exports:[
       RouterModule,
          ],
         
          
})
export class AppRoutingModule{
}