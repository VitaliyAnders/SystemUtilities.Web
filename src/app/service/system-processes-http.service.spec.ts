import { TestBed, inject } from '@angular/core/testing';

import { SystemProcessesHttpService } from './system-processes-http.service';

describe('SystemProcessesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemProcessesHttpService]
    });
  });

  it('should be created', inject([SystemProcessesHttpService], (service: SystemProcessesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
