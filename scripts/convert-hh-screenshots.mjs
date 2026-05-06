import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const jobs = [
  {
    src: path.join(root, 'assets', 'Screenshot 2026-05-05 200835.png'),
    out: path.join(root, 'public', 'hh-networking-demo-desktop.webp'),
    width: 1160,
  },
  {
    src: path.join(root, 'assets', 'before_after', 'Screenshot 2026-05-06 095602.png'),
    out: path.join(root, 'public', 'hh-networking-demo-mobile.webp'),
    width: 600,
  },
];

for (const { src, out, width } of jobs) {
  await sharp(src)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(out);
  console.log(`wrote ${path.relative(root, out)}`);
}
