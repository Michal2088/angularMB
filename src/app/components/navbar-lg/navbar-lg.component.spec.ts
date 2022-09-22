import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLgComponent } from './navbar-lg.component';

describe('NavbarLgComponent', () => {
  let component: NavbarLgComponent;
  let fixture: ComponentFixture<NavbarLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
