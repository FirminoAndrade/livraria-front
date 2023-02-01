import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { LivroConteudoComponent } from './components/views/livro/livro-conteudo/livro-conteudo.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriaCreateComponent } from "./components/views/categoria/categoria-create/categoria-create.component";
import { CategoriaDeleteComponent } from "./components/views/categoria/categoria-delete/categoria-delete.component";
import { CategoriaReadComponent } from "./components/views/categoria/categoria-read/categoria-read.component";
import { CategoriaUpdateComponent } from "./components/views/categoria/categoria-update/categoria-update.component";
import { HomeComponent } from "./components/views/home/home.component";
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "categorias", component: CategoriaReadComponent },
  { path: "categorias/create", component: CategoriaCreateComponent },
  { path: "categorias/delete/:id", component: CategoriaDeleteComponent },
  { path: "categorias/update/:id", component: CategoriaUpdateComponent },
  { path: "categorias/:id_categoria/livros", component: LivroReadComponent },
  { path: "categorias/:id_categoria/livros/create", component: LivroCreateComponent },
  { path: "categorias/:id_categoria/livros/:id/update", component: LivroUpdateComponent },
  { path: "categorias/:id_categoria/livros/:id/delete", component: LivroDeleteComponent },
  { path: "categorias/:id_categoria/livros/:id/conteudo", component: LivroConteudoComponent },
  { path: "categorias/read/all", component: LivroReadAllComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
