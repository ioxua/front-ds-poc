import { Command } from 'commander';
import buildLit from './build-lit';

const program = new Command();

program
  .name('build-scripts')
  .description('CLI to some JavaScript string utilities')
  // get from package.json
  .version('0.8.0');

program.command('lit')
  .description('build lit')
  .argument('<src-dir>', 'source dir')
  .option('--serve')
  .action((srcdir, serve) => buildLit({
    serve: Boolean(serve),
  }))

program.parse()