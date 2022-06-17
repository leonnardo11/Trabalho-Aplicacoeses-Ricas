import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './view/categoria/categoria.component';
import { jogoComponent } from './view/jogo/jogo.component';
import { SobreComponent } from './view/sobre/sobre.component';


const routes: Routes = [
  {path: 'jogos', component: jogoComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'sobre', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
