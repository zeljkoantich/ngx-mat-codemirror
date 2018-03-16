import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCodemirrorComponent } from './mat-codemirror.component';

describe('MatCodemirrorComponent', () => {
  let component: MatCodemirrorComponent;
  let fixture: ComponentFixture<MatCodemirrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCodemirrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCodemirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
