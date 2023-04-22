import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ArchivedTaskService } from './archived-task.service';

describe('ArchivedTaskService', () => {
  let service: ArchivedTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], // HttpClientTestingModule hinzufügen
      providers: [ ArchivedTaskService ]
    });
    service = TestBed.inject(ArchivedTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
