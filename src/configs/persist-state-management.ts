import { create } from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

import { TestStore } from './test.state';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

export class RootState {
  TestStore = TestStore

  constructor() {
    Promise.all([
      hydrate('test', this.TestStore)
    ])
  }
}
