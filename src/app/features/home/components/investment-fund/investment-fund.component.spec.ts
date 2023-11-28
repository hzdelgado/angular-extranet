import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentFundComponent } from './investment-fund.component';

describe('InvestmentFundComponent', () => {
  let component: InvestmentFundComponent;
  let fixture: ComponentFixture<InvestmentFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentFundComponent]
    });
    fixture = TestBed.createComponent(InvestmentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
