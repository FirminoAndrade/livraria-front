import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriaService } from "../categoria.service";
import { Categoria } from "./../categoria.modelo";

@Component({
  selector: "app-categoria-read",
  templateUrl: "./categoria-read.component.html",
  styleUrls: ["./categoria-read.component.css"],
})
export class CategoriaReadComponent implements OnInit {
  
  displayedColumns: string[] = ["id", "nome", "descricao", "livros", "acoes"];

  categorias: Categoria[] = [];

  constructor(private service: CategoriaService, private router: Router) {}

  // metodo carrega pagina com as categorias
  public ngOnInit(): void {
    this.listarCategorias();
  }

  // metodo lista todas categorias
  public listarCategorias() {
    this.service.listarCategoriasService().subscribe((resposta) => {
      this.categorias = resposta;
    });
  }
  // metodo aciona o botao de categoria-read
  public navegarParaCategoriaCreate(){
    this.router.navigate(["categorias/create"])
  }
}
