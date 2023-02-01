import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.modelo';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit{
  
  displayedColumns: string[] = ["id", "titulo", "nome_autor"];

  livros: Livro[] = [];

  constructor(private service: LivroService){}
  
  ngOnInit(): void {
    this.listarLivros();
  }

  public listarLivros(): void {
    this.service.listarTodosLivrosService().subscribe((resposta) => {
      this.livros = resposta;
      console.log(this.livros)
    });
  }

}
