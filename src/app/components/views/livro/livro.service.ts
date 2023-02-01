import { Livro } from "./livro.modelo";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LivroService {
  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  public buscarPorId(id: String): Observable<Livro>{
    return this.http.get<Livro>("http://localhost:8085/livros/"+id);
  }

  public listarLivrosService(id_categoria: String): Observable<any> {
    const url = "http://localhost:8085/livros?categoria=";
    return this.http.get<any>(url + id_categoria,);
  }
  
  public criarLivroService(id_categoria: String, livro: Livro): Observable<any> {
    const url = "http://localhost:8085/livros?categoria=";
    return this.http.post<any>(url + id_categoria, livro);
  }

  public updateLivroService(livro: Livro) {
    const url = "http://localhost:8085/livros/";
    return this.http.put(url + livro.id, livro);
  }

  public deleteLivroService(id: String): Observable<any>{
    return this.http.delete("http://localhost:8085/livros/"+id);
  }

  public listarTodosLivrosService(): Observable<any> {
    const url = "http://localhost:8085/livros/todos";
    return this.http.get<any>(url);
  }

  public mensagem(msg: string): void {
    this._snack.open(msg, "ok", {
      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000,
    });
  }
}
