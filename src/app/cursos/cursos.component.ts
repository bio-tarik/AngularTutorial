import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor() {
    this.nomePortal = 'http://loiane.training';
    this.cursos = ['Java', 'Ext JS', 'Angular'];
  }

  ngOnInit() {
  }

}
