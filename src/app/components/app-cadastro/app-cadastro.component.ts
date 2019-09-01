import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.css']
})
export class AppCadastroComponent implements OnInit {

  tituloCadastro = "Cadastro de Clientes";

  colecaoEstados;
  colecaoCidades;

  constructor() { }

  ngOnInit() {
    this.getEstados ();
  }

  getEstados (){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => response.json()).then(jsonArray => {
      this.colecaoEstados = jsonArray;
    });
  }

  getMunicipios(inputState) {
    let codigoUF = inputState.split("-");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + codigoUF[0] + "/municipios")
    .then(response => response.json()).then(jsonArray => {
      this.colecaoCidades = jsonArray;
    });
  }
}
