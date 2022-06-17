import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-Categoria',
  templateUrl: './Categoria.component.html',
  styleUrls: ['./Categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  Categorias = new Array<Categoria>();
  Categoria?: Categoria;
  editando = false;
  colunas = ['nome', 'acoes'];

  constructor(private CategoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.CategoriaService.listar().subscribe(Categorias => {
      this.Categorias = Categorias;
      this.Categoria = undefined;
    });
  }

  novo() {
    this.Categoria = new Categoria();
    this.editando = false;
  }

  salvar() {
    if (this.Categoria) {
      if (!this.editando){
        this.CategoriaService.inserir(this.Categoria).subscribe(Categoria => {
          this.listar();
          this.Categoria = undefined;
        });
      }
      else {
        this.CategoriaService.atualizar(this.Categoria).subscribe(Categoria => {
          this.listar();
          this.Categoria = undefined;
        });
    }
    }
  }
  excluir(id: number) {
    this.CategoriaService.remover(id).subscribe(() => {
      this.listar();
    });
  }

  editar(Categoria: Categoria) {
    this.Categoria = Categoria;
    this.editando = true;
  }
}
