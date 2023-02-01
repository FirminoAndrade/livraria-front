import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.modelo";
import { LivroService } from "../livro.service";

@Component({
  selector: "app-livro-conteudo",
  templateUrl: "./livro-conteudo.component.html",
  styleUrls: ["./livro-conteudo.component.css"],
})
export class LivroConteudoComponent implements OnInit {
  livro: Livro = { id: "", titulo: "", nome_autor: "", texto: "" };

  id_categoria: String = "";

  constructor(
    private service: LivroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id_categoria = this.route.snapshot.paramMap.get("id_categoria")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.livro.id!).subscribe((resposta) => {
      this.livro.titulo = resposta.titulo;
      this.livro.nome_autor = resposta.nome_autor;
      this.livro.texto = resposta.texto;
    });
  }

  // metodo aciona o botao CANCELAR
  public navegarParaListaLivros() {
    this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
  }
}
