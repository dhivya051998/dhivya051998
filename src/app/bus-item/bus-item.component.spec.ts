import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusItemComponent } from './bus-item.component';

describe('BusItemComponent', () => {
  let component: BusItemComponent;
  let fixture: ComponentFixture<BusItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
