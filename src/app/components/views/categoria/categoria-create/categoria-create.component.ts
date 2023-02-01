import { Router } from "@angular/router";
import { Categoria } from "./../categoria.modelo";
import { CategoriaService } from "./../categoria.service";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-categoria-create",
  templateUrl: "./categoria-create.component.html",
  styleUrls: ["./categoria-create.component.css"],
})
export class CategoriaCreateComponent implements OnInit {
  categoria: Categoria = { nome: "", descricao: "" };

  constructor(private service: CategoriaService, private router: Router) {}

  ngOnInit(): void {}

  // metodo criar categoria com mensagem de exceções
  public criarCategoria(): void {
    this.service.criarCategoriaService(this.categoria).subscribe(
      (resposta) => {
        this.router.navigate(["categorias"]);
        this.service.mensagem("Categoria criada com sucesso!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.mensagem("Campos Obrigatórios!")
        }
      }
    );
  }

   // metodo aciona o botao CANCELAR
   public navegarParaListaCategorias(){
    this.router.navigate(["categorias"])
  }
}
