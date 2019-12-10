import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgArtistComponent } from './img-artist.component';

describe('ImgArtistComponent', () => {
  let component: ImgArtistComponent;
  let fixture: ComponentFixture<ImgArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
