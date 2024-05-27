import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyTileComponent} from './currency-tile.component';

describe('CurrencyTileComponent', () => {
  let component: CurrencyTileComponent;
  let fixture: ComponentFixture<CurrencyTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyTileComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
