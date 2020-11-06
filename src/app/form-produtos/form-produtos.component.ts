import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  mensagem = '';
  produto = new Produto();
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtoService.addProduto(this.produto);
    this.mensagem = this.produto.nome + ' cadastrado com sucesso';
    this.produto = new Produto();
  }

}
