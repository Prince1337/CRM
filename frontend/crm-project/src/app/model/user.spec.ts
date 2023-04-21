import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("Heiko1", "123456")).toBeTruthy();
  });
});
