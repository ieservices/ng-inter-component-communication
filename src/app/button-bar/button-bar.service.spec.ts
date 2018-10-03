import {TestBed, inject} from '@angular/core/testing';
import {ButtonBarService} from './button-bar.service';


describe('ButtonBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ButtonBarService]
    });
  });

  it('should be created', inject([ButtonBarService], (service: ButtonBarService) => {
    expect(service).toBeTruthy();
  }));
});
