import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdiconComponent } from './mdicon.component';

describe('MdiconComponent', () => {
  let component: MdiconComponent;
  let fixture: ComponentFixture<MdiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
