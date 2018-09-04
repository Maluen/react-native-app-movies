import { persistor } from '../store';

export function reset() {
  persistor.purge();
  return {
    type: 'ROOT_RESET',
  };
}
