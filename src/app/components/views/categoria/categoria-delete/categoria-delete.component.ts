import { Router } from '@angular/router';
import { Categoria } from './../categoria.modelo';
import { CategoriaService } from './../categoria.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit{

  categoria: Categoria = {id: "", nome:"", descricao:""}
  
  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
   this.categoria.id = this.route.snapshot.paramMap.get("id")!;
   this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.categoria.id!).subscribe((resposta) => {
      this.categoria = resposta;
    })
  }

  public deleteCategoria(): void {
    this.service.deleteService(this.categoria.id!).subscribe((reposta) => {
      this.router.navigate(["categorias"])
      this.service.mensagem("Categoria deletada com sucesso!")
    },
    (err) => {
        this.service.mensagem("Categoria não pode ser deletada! Possui livros associados")
      }
    )
  }

   // metodo aciona o botao CANCELAR
   public navegarParaListaCategorias(){
    this.router.navigate(["categorias"])
  }
}
