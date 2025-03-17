import { unlink } from 'fs/promises';
import { join } from 'path';

const filePath = join(process.cwd(), '.demo', 'demo.json');

async function removeFile() {
  try {
    await unlink(filePath);
    console.log(`Successfully removed ${filePath}`);
  } catch (error) {
    console.error(`Error removing file: ${error}`);
  }
}

removeFile();