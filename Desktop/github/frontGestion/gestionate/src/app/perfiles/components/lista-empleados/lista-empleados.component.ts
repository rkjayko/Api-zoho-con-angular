import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListaEmpleadoService} from '../../services/lista-empleado.service';
import {Empleado} from '../../Models/Empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];
  nombresCampos: string[];

  constructor(
    private route: ActivatedRoute, private listaEmpleadoService: ListaEmpleadoService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    this.listaEmpleadoService.getEmpleados().subscribe(empleados => {
      this.empleados = empleados.body;
      this.nombresCampos = Object.keys(this.empleados[0]);
      console.log(this.empleados);
    });
  }

}
