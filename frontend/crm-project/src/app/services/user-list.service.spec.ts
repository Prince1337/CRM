import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserListService } from './user-list.service';

describe('UserListService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ], // HttpClientTestingModule hinzufügen
      providers: [ UserListService ]
    });
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
