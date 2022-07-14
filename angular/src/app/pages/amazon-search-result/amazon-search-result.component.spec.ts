import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSearchResultComponent } from './amazon-search-result.component';

describe('AmazonSearchResultComponent', () => {
  let component: AmazonSearchResultComponent;
  let fixture: ComponentFixture<AmazonSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazonSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
