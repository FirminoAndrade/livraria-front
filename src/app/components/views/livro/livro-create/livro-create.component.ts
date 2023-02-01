import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Livro } from "../livro.modelo";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-create",
  templateUrl: "./livro-create.component.html",
  styleUrls: ["./livro-create.component.css"],
})
export class LivroCreateComponent implements OnInit {
  livro: Livro = { titulo: "", nome_autor: "", texto: "" };

  id_categoria: String = "";

  constructor(
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_categoria = this.route.snapshot.paramMap.get("id_categoria")!;
  }

  // metodo criar categoria com mensagem de exceções
  public criarLivro(): void {
    this.service.criarLivroService(this.id_categoria, this.livro).subscribe((resposta) => {
      this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
      this.service.mensagem("Livro criado com sucesso!");
    },
    (err) => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem("Campos Obrigatórios!")
      }
    });
  }

  // metodo aciona o botao CANCELAR
  public navegarParaListaLivros() {
    this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
  }
}
