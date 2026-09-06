import { Command } from 'commander';
import chalk from 'chalk';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as readline from 'node:readline';
import { compile, run } from '../index.js';

const BANNER = `
${chalk.red.bold('  __  __           _                 _                      ')}
${chalk.white.bold(' |  \\/  |         | |               | |                     ')}
${chalk.red.bold(' | \\  / | __ _  __| |_   _ _ __ __ _| |     __ _ _ __   __ _ ')}
${chalk.white.bold(' | |\\/| |/ _` |/ _` | | | | \'__/ _` | |    / _` | \'_ \\ / _` |')}
${chalk.red.bold(' | |  | | (_| | (_| | |_| | | | (_| | |___| (_| | | | | (_| |')}
${chalk.white.bold(' |_|  |_|\\__,_|\\__,_|\\__,_|_|  \\__,_|______\\__,_|_| |_|\\__, |')}
${chalk.red.bold('                                                        __/ |')}
${chalk.white.bold('                                                       |___/ ')}
  ${chalk.yellow.bold('Salam Settong Dhere!')} ${chalk.cyan('Bahasa Pemrograman Madura (v1.0.0)')}
`;

export function createCli(): Command {
  const program = new Command();

  program
    .name('madura')
    .description('CLI Resmi MaduraLang - Bahasa Pemrograman Khas Madura')
    .version('1.0.0');

  // Command: run
  program
    .command('run <file>')
    .description('Jalankan file kode MaduraLang (.mdr)')
    .action(async (filePath: string) => {
      try {
        const fullPath = path.resolve(process.cwd(), filePath);
        if (!fs.existsSync(fullPath)) {
          console.error(chalk.red(`[MaduraLang Sala] Berkas ta' e-temmo: ${filePath}`));
          process.exit(1);
        }

        const source = fs.readFileSync(fullPath, 'utf8');
        await run(source);
      } catch (err: any) {
        console.error(chalk.red(err.message || err));
        process.exit(1);
      }
    });

  // Command: build
  program
    .command('build <file>')
    .description('Kompilasi berkas Madura (.mdr) menjadi JavaScript (.js)')
    .option('-o, --output <output>', 'Nama berkas keluaran (.js)')
    .action((filePath: string, options: { output?: string }) => {
      try {
        const fullPath = path.resolve(process.cwd(), filePath);
        if (!fs.existsSync(fullPath)) {
          console.error(chalk.red(`[MaduraLang Sala] Berkas ta' e-temmo: ${filePath}`));
          process.exit(1);
        }

        const source = fs.readFileSync(fullPath, 'utf8');
        const jsOutput = compile(source, { includeRuntime: true });

        const outputPath = options.output
          ? path.resolve(process.cwd(), options.output)
          : fullPath.replace(/\.mdr$/, '') + '.js';

        // Pastikan direktori tujuan tersedia
        const dir = path.dirname(outputPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(outputPath, jsOutput, 'utf8');
        console.log(chalk.green(`✓ Sukses e-kompilasi ka: ${chalk.bold(outputPath)}`));
      } catch (err: any) {
        console.error(chalk.red(err.message || err));
        process.exit(1);
      }
    });

  // Command: repl
  program
    .command('repl')
    .description('Masuk ke terminal interaktif MaduraLang (REPL)')
    .action(() => {
      startRepl();
    });

  // Default action: if no args or first arg is a file
  program.action((args: any) => {
    if (process.argv.length <= 2) {
      startRepl();
    }
  });

  return program;
}

function startRepl(): void {
  console.log(BANNER);
  console.log(chalk.gray('Ketik kode MaduraLang langsung neng dinna\'. Ketik ".meto" otaba "exit" kaangghuy kalowar.\n'));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.yellow('madura> ')
  });

  rl.prompt();

  // Environment context untuk menyimpan state variabel di REPL
  const replContext: Record<string, any> = {};

  rl.on('line', async (line: string) => {
    const trimmed = line.trim();

    if (trimmed === '.meto' || trimmed === 'exit') {
      console.log(chalk.cyan('Mator sakalangkong! Salam settong dhere!'));
      process.exit(0);
    }

    if (trimmed.length > 0) {
      try {
        await run(trimmed, replContext);
      } catch (err: any) {
        console.error(chalk.red(err.message || err));
      }
    }

    rl.prompt();
  }).on('close', () => {
    console.log(chalk.cyan('\nMator sakalangkong! Salam settong dhere!'));
    process.exit(0);
  });
}
