import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSocioDemograficaComponent } from './info-socio-demografica.component';

describe('InfoSocioDemograficaComponent', () => {
  let component: InfoSocioDemograficaComponent;
  let fixture: ComponentFixture<InfoSocioDemograficaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSocioDemograficaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSocioDemograficaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
