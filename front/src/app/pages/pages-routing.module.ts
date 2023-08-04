import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
//Componentes de Pages
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';




const routes:Routes=[
  {path:'',
      children:[
      {path:'home', component:HomeComponent},
      {path:'catalogo', component:CatalogoComponent},
      {path:'quienes_somos', component:QuienesSomosComponent},
      {path:'contacto', component:ContactoComponent},
      {path: '**', component: HomeComponent}
          ]
  }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }
