import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreFeatueProductsComponent } from './store-featue-products.component';

describe('StoreFeatueProductsComponent', () => {
  let component: StoreFeatueProductsComponent;
  let fixture: ComponentFixture<StoreFeatueProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreFeatueProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreFeatueProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
