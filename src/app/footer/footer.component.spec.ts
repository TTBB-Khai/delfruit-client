import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserService } from '../user.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [MatToolbarModule,MatSnackBarModule,HttpClientTestingModule],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
