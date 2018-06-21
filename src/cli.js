/**
 * @flow
 */
import 'babel-polyfill';
import yargs from 'yargs';
import execute from './runCLI';

export type Path = string;
export type Argv = {|
  arg1: string,
|};

const usage = 'Usage: $0 --args1 <arg1>';
const docs = 'Documentation: https://github.com/entria/cli-yargs-boilerplate';
const options = {
  arg1: {
    default: 'arg1',
    description: 'first argument',
  },
};

export function run(argv?: Argv, project?: Path) {
  argv = yargs(argv || process.argv.slice(2))
    .usage(usage)
    .options(options)
    .epilogue(docs)
    .help()
    .argv;

  execute({
    arg1: argv.arg1,
  });
}

