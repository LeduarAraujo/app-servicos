import { Component, OnInit } from '@angular/core';

// Rotas
import { Rotas } from '../../utils/utils';

@Component({
  selector: 'app-temp-nav',
  templateUrl: './temp-nav.component.html',
  styleUrls: ['./temp-nav.component.css']
})
export class TempNavComponent implements OnInit {

  titulo = "Projeto Servico";
  rota = Rotas;

  constructor() { }

  ngOnInit() {
  }

}
