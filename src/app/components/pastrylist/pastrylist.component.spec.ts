import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrylistComponent } from './pastrylist.component';

describe('PastrylistComponent', () => {
  let component: PastrylistComponent;
  let fixture: ComponentFixture<PastrylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastrylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
