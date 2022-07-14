import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSearchComponent } from './amazon-search.component';

describe('AmazonSearchComponent', () => {
  let component: AmazonSearchComponent;
  let fixture: ComponentFixture<AmazonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
