import { Router, ActivatedRoute } from "@angular/router";
import { CategoriaService } from "./../categoria.service";
import { Categoria } from "./../categoria.modelo";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = { id: "", nome: "", descricao: "" };

  constructor(
    private service: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.buscarPorId();
  }

  public buscarPorId(): void {
    this.service.buscarPorId(this.categoria.id!).subscribe((resposta) => {
      this.categoria.nome = resposta.nome;
      this.categoria.descricao = resposta.descricao;
    });
  }

  public update(): void {
     this.service.updateService(this.categoria).subscribe((resposta) => {
      this.router.navigate(["categorias"]);
      this.service.mensagem("Categoria atualizada com sucesso!")
     }, err => {
      this.service.mensagem("Validar se todos os campos estão preenchidos corretamente!")
     })
  }
  // metodo aciona o botao CANCELAR
  public navegarParaListaCategorias(){
    this.router.navigate(["categorias"]);
  }
}