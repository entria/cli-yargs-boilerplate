/**
 * @flow
 */

type CliOptions = {
  arg1: string,
};
export default async function execute({
  arg1,
}: CliOptions) {
  console.log('arg1 echo: ', arg1);
}
