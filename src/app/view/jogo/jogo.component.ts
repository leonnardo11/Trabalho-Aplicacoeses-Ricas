import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { jogo } from 'src/app/model/jogo';
import { jogoService } from 'src/app/service/jogo.service';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';


@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class jogoComponent implements OnInit {

  jogos = new Array<jogo>();
  jogo?: jogo;
  editando = false;
  categorias = new Array<Categoria>();
  colunas = ['nome', 'status', 'nota', 'categoria', 'acoes'];

  constructor(private jogoService: jogoService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.jogoService.listar().subscribe(jogos => {
      this.jogos = jogos;
      this.jogo = undefined;
    });
  }


  novo() {
    this.jogo = new jogo();
    this.editando = false;
  }

  salvar() {
    if (this.jogo) {
      if (!this.editando){
        this.jogoService.inserir(this.jogo).subscribe(jogo => {
          this.listar();
          this.jogo = undefined;
        });

      }
      else {
        this.jogoService.atualizar(this.jogo).subscribe(jogo => {
          this.listar();
          this.jogo = undefined;
        });
    }
    }
  }
  excluir(id: number) {
    this.jogoService.remover(id).subscribe(() => {
    this.listar();
    });
  }

  editar(jogo: jogo) {
    this.jogo = jogo;
    this.editando = true;
  }



}
