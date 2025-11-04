import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

// Copy .htaccess to dist folder after build
const sourceHtaccess = join(process.cwd(), 'dist', '.htaccess');
const distHtaccess = join(process.cwd(), 'dist', '.htaccess');

if (existsSync(sourceHtaccess)) {
  console.log('✅ .htaccess file is already in dist folder');
} else {
  console.log('❌ .htaccess file not found in dist folder');
  console.log('Please ensure the .htaccess file is in the dist folder before deploying');
}
                                                                                                                                                                                                                                                                 