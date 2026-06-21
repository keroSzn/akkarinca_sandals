const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'public', 'images');
const MAX_WIDTH = 1200;
const QUALITY = 82;

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const stats = fs.statSync(filePath);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if wider than MAX_WIDTH
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    // Compress based on format
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: QUALITY, effort: 10, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
    }

    const buffer = await pipeline.toBuffer();
    const newSizeMB = (buffer.length / (1024 * 1024)).toFixed(2);
    const savings = (((stats.size - buffer.length) / stats.size) * 100).toFixed(1);

    fs.writeFileSync(filePath, buffer);
    console.log(`  ✓ ${path.basename(filePath)}: ${sizeMB} MB → ${newSizeMB} MB (${savings}% saved)`);
  } catch (err) {
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else {
      await compressImage(fullPath);
    }
  }
}

(async () => {
  console.log('🔧 Compressing images...\n');
  await processDirectory(IMAGES_DIR);
  console.log('\n✅ Done!');
})();
