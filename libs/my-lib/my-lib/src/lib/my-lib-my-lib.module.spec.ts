import { async, TestBed } from '@angular/core/testing';
import { MyLibMyLibModule } from './my-lib-my-lib.module';

describe('MyLibMyLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyLibMyLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyLibMyLibModule).toBeDefined();
  });
});
