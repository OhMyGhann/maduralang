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
  ${chalk.yellow.bold('Salam Settong Dhere!')} ${chalk.cyan('Bahasa Pemrograman Madura (v2.1.0)')}
`;

export function createCli(): Command {
  const program = new Command();

  program
    .name('madura')
    .description('CLI Resmi MaduraLang - Bahasa Pemrograman Khas Madura')
    .version('2.1.0');

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

  // Command: wilayah
  program
    .command('wilayah [query]')
    .description('Cari informasi wilayah 4 Kabupaten di Madura (Kecamatan, Kode Pos, Kepulauan)')
    .action(async (query?: string) => {
      try {
        const { cariWilayah, daftarKabupaten, getKabupaten, ringkasanStatistik } = await import('../stdlib/wilayah/index.js');
        
        if (!query) {
          const stats = ringkasanStatistik();
          console.log(chalk.red.bold('\n=== DATA GEOGRAFIS PULAU MADURA ==='));
          console.log(chalk.white(`Provinsi       : ${stats.provinsi}`));
          console.log(chalk.white(`Total Kabupaten: ${chalk.yellow.bold(stats.totalKabupaten)} (Bangkalan, Sampang, Pamekasan, Sumenep)`));
          console.log(chalk.white(`Total Kecamatan: ${chalk.yellow.bold(stats.totalKecamatan)} Kecamatan`));
          console.log(chalk.white(`Total Desa/Kel : ${chalk.yellow.bold(stats.totalDesaResmi)} Desa/Kelurahan Resmi Kemendagri`));
          console.log(chalk.white(`Total Luas     : ${stats.totalLuasKm2} km²`));
          console.log(chalk.gray('Gunakan: madura wilayah <nama_desa / kecamatan / kode_pos / kabupaten>\n'));

          console.log(chalk.cyan.bold('DAFTAR KABUPATEN:'));
          for (const kab of daftarKabupaten()) {
            console.log(`- ${chalk.yellow.bold(kab.nama)} (${kab.namaLengkap}): ${chalk.gray(kab.julukan)} [${kab.jumlahKecamatan} Kecamatan]`);
          }
          console.log('');
          return;
        }

        const hasil = cariWilayah(query);
        if (hasil.length === 0) {
          console.log(chalk.yellow(`\n[!] Ta' nemmo data wilayah kaangghuy: "${query}"`));
          return;
        }

        console.log(chalk.green.bold(`\nMenemukan ${hasil.length} data wilayah untuk "${query}":\n`));
        for (const item of hasil) {
          const tag = chalk.bgRed.white.bold(` ${item.tipe} `);
          console.log(`${tag} ${chalk.bold.yellow(item.nama)} - ${chalk.cyan(item.kabupaten)}`);
          console.log(`    ${chalk.white(item.info)}`);
          console.log(`    ${chalk.gray(`Koordinat: ${item.koordinat.lat}, ${item.koordinat.lng}`)}\n`);
        }
      } catch (err: any) {
        console.error(chalk.red(err.message || err));
      }
    });

  // Command: kamus
  program
    .command('kamus [kata]')
    .description('Cari kata dalam Kamus Bahasa Madura (Ondhaggha Bhasa / Tingkatan Bahasa)')
    .action(async (kata?: string) => {
      try {
        const { cariKata, ringkasanKamus, parbhasan } = await import('../stdlib/kamus/index.js');

        if (!kata) {
          const stats = ringkasanKamus();
          console.log(chalk.red.bold('\n=== KAMUS DWIBAHASA MADURALANG ==='));
          console.log(chalk.white(`Total Entri Kata : ${chalk.yellow.bold(stats.totalEntriKata)} Kosakata Resmi`));
          console.log(chalk.white(`Total Parbhasan  : ${chalk.yellow.bold(stats.totalParbhasan)} Peribahasa Khas Madura`));
          console.log(chalk.gray('Tingkatan Tutur  : Enja\'-Iya (Akrab), Engghi-Enten (Sopan), Engghi-Bhunten (Halus)\n'));

          const randomParbhasan = parbhasan(true) as any;
          console.log(chalk.cyan.bold('💡 PARBHASAN MADURA HARI INI:'));
          console.log(chalk.yellow.bold(`"${randomParbhasan.teks}"`));
          console.log(chalk.white(`Arti  : ${randomParbhasan.artiHarfiah}`));
          console.log(chalk.gray(`Makna : ${randomParbhasan.maknaFilosofis}`));
          console.log(chalk.gray('\nGunakan: madura kamus <kata> atau madura terjemah <kalimat>\n'));
          return;
        }

        const hasil = cariKata(kata);
        if (!hasil) {
          console.log(chalk.yellow(`\n[!] Kata "${kata}" ta' e-temmo neng kamus.`));
          return;
        }

        console.log(chalk.green.bold(`\n📖 HASIL KAMUS: "${hasil.kataDasar}"`));
        console.log(chalk.white(`Arti Indonesia : ${chalk.yellow.bold(hasil.artiIndonesia.join(', '))}`));
        console.log(chalk.white(`Kelas Kata     : ${chalk.cyan(hasil.kelasKata)} (Kategori: ${hasil.kategori})`));
        console.log(chalk.white('\n--- ONDHAGGHA BHASA (TINGKATAN TUTUR) ---'));
        console.log(`• Enja'-Iya (Akrab/Santai)   : ${chalk.green.bold(hasil.tingkatan.enjaIya)}`);
        if (hasil.tingkatan.engghiEnten) {
          console.log(`• Engghi-Enten (Sopan/Sedang): ${chalk.yellow.bold(hasil.tingkatan.engghiEnten)}`);
        }
        if (hasil.tingkatan.engghiBhunten) {
          console.log(`• Engghi-Bhunten (Halus/Krama): ${chalk.magenta.bold(hasil.tingkatan.engghiBhunten)}`);
        }

        if (hasil.contohKalimat) {
          console.log(chalk.white('\n--- CONTOH KALIMAT ---'));
          console.log(chalk.cyan(`Madura    : "${hasil.contohKalimat.madura}"`));
          console.log(chalk.gray(`Indonesia : "${hasil.contohKalimat.indonesia}"`));
        }
        console.log('');
      } catch (err: any) {
        console.error(chalk.red(err.message || err));
      }
    });

  // Command: terjemah
  program
    .command('terjemah <teks>')
    .description('Terjemahkan kalimat Indonesia ke Madura')
    .option('-t, --tingkat <tingkat>', 'Tingkat bahasa: santai (enja-iya), sopan (engghi-enten), halus (engghi-bhunten)', 'santai')
    .action(async (teks: string, options: { tingkat?: string }) => {
      try {
        const { terjemahKaMadura } = await import('../stdlib/kamus/index.js');
        let level: any = 'enja-iya';
        if (options.tingkat === 'halus' || options.tingkat === 'engghi-bhunten') {
          level = 'engghi-bhunten';
        } else if (options.tingkat === 'sopan' || options.tingkat === 'engghi-enten') {
          level = 'engghi-enten';
        }

        const hasil = terjemahKaMadura(teks, level);
        console.log(chalk.red.bold('\n=== PENERJEMAH BAHASA MADURA ==='));
        console.log(chalk.gray(`Input     : "${teks}"`));
        console.log(chalk.gray(`Tingkatan : ${level}`));
        console.log(chalk.green.bold(`Hasil     : "${hasil}"\n`));
      } catch (err: any) {
        console.error(chalk.red(err.message || err));
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
