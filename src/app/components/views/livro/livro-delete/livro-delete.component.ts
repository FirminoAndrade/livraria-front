import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.modelo';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent {

  livro: Livro = { titulo: "", nome_autor: "", texto: "" };

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

  public deletarLivro(): void {
    this.service.deleteLivroService(this.livro.id!).subscribe((reposta) => {
      this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
      this.service.mensagem("Livro deletado com sucesso!")
    });
  }

  // metodo aciona o botao CANCELAR
  public navegarParaListaLivros() {
    this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
  }
}
