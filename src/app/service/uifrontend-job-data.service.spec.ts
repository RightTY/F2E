import { TestBed } from '@angular/core/testing';

import { UIFrontendJobDataService } from './uifrontend-job-data.service';

describe('GetUIFrontendJobDataService', () => {
  let service: UIFrontendJobDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIFrontendJobDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
