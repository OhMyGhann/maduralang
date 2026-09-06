import * as readlineSync from 'node:fs';

export const kocaaghi = (...args: any[]): void => {
  console.log(...args);
};

export const tanyaaghi = (promptText: string = ''): string => {
  if (promptText) {
    process.stdout.write(promptText);
  }
  const buffer = Buffer.alloc(1024);
  let bytesRead = 0;
  try {
    bytesRead = readlineSync.readSync(0, buffer, 0, 1024, null);
  } catch {
    return '';
  }
  return buffer.toString('utf8', 0, bytesRead).replace(/\r?\n$/, '');
};

export const MaduraStd = {
  kocaaghi,
  tanyaaghi,
  // Helper bawaan
  bhender: true,
  sala: false,
  tadhe: null,
  ta_tao: undefined,
  // Array & Math helper
  itong: (arrOrStr: any[] | string): number => arrOrStr.length,
  pacak: (min: number = 0, max: number = 100): number => Math.floor(Math.random() * (max - min + 1)) + min
};
