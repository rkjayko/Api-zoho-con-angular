import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DetalleEmpleadoService} from '../../services/detalle-empleado.service';
import {Empleado} from '../../Models/Empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  empleado: Empleado;
  id: string;
  tabActual: number;

  constructor(private route: ActivatedRoute, private detalleEmpleadoService: DetalleEmpleadoService) { }

  ngOnInit() {
    this.tabActual = 0;
    this.route.params.subscribe(params => {
      this.id = params[`idEmpleado`];
      this.getDetalleEmpleado();
    });
  }

  getDetalleEmpleado(): void {
    this.detalleEmpleadoService.getEmpleado(this.id).subscribe(empleado => this.empleado = empleado.body);
  }

  toggle(tab: number) {
    this.tabActual = tab;
  }
}
