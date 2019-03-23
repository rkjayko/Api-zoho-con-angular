import {Component, Input, OnInit} from '@angular/core';
import {Empleado} from '../../Models/Empleado';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  @Input() empleado: Empleado;

  ngOnInit() {
  }

}
