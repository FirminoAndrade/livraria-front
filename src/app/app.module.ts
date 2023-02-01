import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavegacaoComponent } from "./components/template/navegacao/navegacao.component";
import { CategoriaReadComponent } from "./components/views/categoria/categoria-read/categoria-read.component";
import { HomeComponent } from "./components/views/home/home.component";
import { CategoriaService } from "./components/views/categoria/categoria.service";
import { MatButtonModule } from "@angular/material/button";
import { CategoriaCreateComponent } from "./components/views/categoria/categoria-create/categoria-create.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CategoriaDeleteComponent } from "./components/views/categoria/categoria-delete/categoria-delete.component";
import { CategoriaUpdateComponent } from "./components/views/categoria/categoria-update/categoria-update.component";
import { LivroReadComponent } from './components/views/livro/livro-read/livro-read.component';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroConteudoComponent } from './components/views/livro/livro-conteudo/livro-conteudo.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavegacaoComponent,
    HomeComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    LivroReadComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroConteudoComponent,
    LivroReadAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  providers: [CategoriaService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
