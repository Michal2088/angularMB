import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNFComponent } from './pnf.component';

describe('PNFComponent', () => {
  let component: PNFComponent;
  let fixture: ComponentFixture<PNFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PNFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PNFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
