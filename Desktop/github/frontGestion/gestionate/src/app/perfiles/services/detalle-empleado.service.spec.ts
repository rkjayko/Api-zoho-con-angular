import { TestBed } from '@angular/core/testing';

import { DetalleEmpleadoService } from './detalle-empleado.service';

describe('DetalleEmpleadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleEmpleadoService = TestBed.get(DetalleEmpleadoService);
    expect(service).toBeTruthy();
  });
});
