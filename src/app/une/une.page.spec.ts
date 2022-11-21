import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnePage } from './une.page';

describe('UnePage', () => {
  let component: UnePage;
  let fixture: ComponentFixture<UnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
