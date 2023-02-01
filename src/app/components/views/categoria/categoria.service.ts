import { environment } from './../../../../enviroment/enviroment';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Categoria } from './categoria.modelo';

@Injectable({
  providedIn: "root",
})
export class CategoriaService {

 
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public listarCategoriasService(): Observable<any> {
    return this.http.get("http://localhost:8085/categorias");
  }

  public criarCategoriaService(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>("http://localhost:8085/categorias",categoria);
  }

  public buscarPorId(id: String): Observable<Categoria>{
    return this.http.get<Categoria>("http://localhost:8085/categorias/"+id);
  }

  public deleteService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8085/categorias/"+id);
  }

  public updateService(categoria: Categoria) {
    const url = "http://localhost:8085/categorias/";
    return this.http.put(url + categoria.id, categoria);
  }

  public mensagem(msg: string): void {
    this._snack.open(msg,"ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    })
  }
}
