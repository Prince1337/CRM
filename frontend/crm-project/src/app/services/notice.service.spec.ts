import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoticeService } from './notice.service';

describe('NoticeService', () => {
  let service: NoticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], // HttpClientTestingModule hinzufügen
      providers: [ NoticeService ]
    });
    service = TestBed.inject(NoticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
