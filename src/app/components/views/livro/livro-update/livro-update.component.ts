import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Livro } from '../livro.modelo';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit{
  
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

  public updateLivro(): void {
    this.service.updateLivroService(this.livro).subscribe((resposta) => {
      this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
     this.service.mensagem("Livro atualizado com sucesso!")
    }, err => {
     this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
    })
 }

  // metodo aciona o botao CANCELAR
  public navegarParaListaLivros() {
    this.router.navigate(["categorias/" + this.id_categoria + "/livros"]);
  }
}
