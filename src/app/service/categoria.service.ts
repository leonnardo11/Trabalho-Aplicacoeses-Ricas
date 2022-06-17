import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }  

  listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${environment.apiEndPoint}/Categoria`);
  }

  inserir(Categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${environment.apiEndPoint}/Categoria`, Categoria);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/Categoria/${id}`);
  }
  atualizar(Categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${environment.apiEndPoint}/Categoria/${Categoria.id}`, Categoria);
  }

}
