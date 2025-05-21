import { ComponentFixture, TestBed } from '@angular/core/testing';
import { favoritosComponent } from './favoritos.component';

describe('FavoritosComponent', () => {
  let component: favoritosComponent;
  let fixture: ComponentFixture<favoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [favoritosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(favoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
