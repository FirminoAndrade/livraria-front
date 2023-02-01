import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Livro } from "../livro.modelo";
import { LivroService } from './../livro.service';

@Component({
  selector: "app-livro-read",
  templateUrl: "./livro-read.component.html",
  styleUrls: ["./livro-read.component.css"],
})
export class LivroReadComponent implements OnInit {
  
  displayedColumns: string[] = ["id", "titulo", "livros", "acoes"];

  id_categoria: String = "";

  livros: Livro[] = [];

  constructor(private service: LivroService, private router: Router, private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.id_categoria = this.route.snapshot.paramMap.get("id_categoria")!
    this.listarLivros();
  }

  public listarLivros(): void {
    this.service.listarLivrosService(this.id_categoria).subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros)
    });
  }

  public navegarParaLivroCreate(){
    this.router.navigate(["categorias/" + this.id_categoria + "/livros/create"])
  }
}
