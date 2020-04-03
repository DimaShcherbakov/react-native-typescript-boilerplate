import { observable as o, action as a } from 'mobx';

export class TestStore {
  @o authToken: string = '';

  @a
  setAuthToken(token: string) {
    this.authToken = token;
  }
}
