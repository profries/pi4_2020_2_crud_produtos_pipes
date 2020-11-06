import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  listaProdutos: Produto[] = [
    {id: 1, nome: 'Prod1', marca: 'Marca1', preco: 10, validade: new Date()},
    {id: 2, nome: 'Prod2', marca: 'Marca1', preco: 20, validade: new Date()},
    {id: 3, nome: 'Prod3', marca: 'Marca1', preco: 30, validade: new Date()},
    {id: 4, nome: 'Prod4', marca: 'Marca2', preco: 40, validade: new Date()},
    {id: 5, nome: 'Prod5', marca: 'Marca2', preco: 50, validade: new Date()},
  ];

  constructor() { }

  addProduto(produto: Produto) {
    this.listaProdutos.push(produto);
  }

  getProdutos() {
    return this.listaProdutos;
  }

}
