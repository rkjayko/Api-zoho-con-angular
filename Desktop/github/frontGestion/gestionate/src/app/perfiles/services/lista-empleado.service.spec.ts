import { TestBed } from '@angular/core/testing';

import { ListaEmpleadoService } from './lista-empleado.service';

describe('ListaEmpleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaEmpleadoService = TestBed.get(ListaEmpleadoService);
    expect(service).toBeTruthy();
  });
});
