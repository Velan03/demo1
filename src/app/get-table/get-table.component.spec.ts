import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTableComponent } from './get-table.component';

describe('GetTableComponent', () => {
  let component: GetTableComponent;
  let fixture: ComponentFixture<GetTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
