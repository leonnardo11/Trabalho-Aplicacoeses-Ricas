import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class jogoService {

  constructor(private http: HttpClient) { }  //injetar algo

  listar(): Observable<jogo[]> {
    return this.http.get<jogo[]>(`${environment.apiEndPoint}/jogo`);
  }

  inserir(jogo: jogo): Observable<jogo> {
    return this.http.post<jogo>(`${environment.apiEndPoint}/jogo`, jogo);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/jogo/${id}`);
  }
  atualizar(jogo: jogo): Observable<jogo> {
    return this.http.put<jogo>(`${environment.apiEndPoint}/jogo/${jogo.id}`, jogo);
  }
 
}
