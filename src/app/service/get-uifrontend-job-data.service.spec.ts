import { TestBed } from '@angular/core/testing';

import { GetUIFrontendJobDataService } from './get-uifrontend-job-data.service';

describe('GetUIFrontendJobDataService', () => {
  let service: GetUIFrontendJobDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUIFrontendJobDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
