import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountFeatureUsersComponent } from './account-feature-users.component';

describe('AccountFeatureUsersComponent', () => {
  let component: AccountFeatureUsersComponent;
  let fixture: ComponentFixture<AccountFeatureUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountFeatureUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountFeatureUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
