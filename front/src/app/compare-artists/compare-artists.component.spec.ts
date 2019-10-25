import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareArtistsComponent } from './compare-artists.component';

describe('CompareArtistsComponent', () => {
  let component: CompareArtistsComponent;
  let fixture: ComponentFixture<CompareArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
