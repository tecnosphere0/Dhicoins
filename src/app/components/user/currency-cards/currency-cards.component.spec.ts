import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardsComponent } from './currency-cards.component';

describe('CurrencyCardsComponent', () => {
  let component: CurrencyCardsComponent;
  let fixture: ComponentFixture<CurrencyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
