// @flow
import 'babel-polyfill';
import execute from './runCLI';

(async () => {
  execute({
    arg1: 'arg1',
  });
})();
