const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const inputPath = path.join(__dirname, 'public', 'mobile_images', 'favicon-48x48.png');
  const outputPath = path.join(__dirname, 'public');
  
  // Create favicon.ico with multiple sizes
  const sizes = [16, 32, 48];
  const images = [];
  
  for (const size of sizes) {
    const buffer = await sharp(inputPath)
      .resize(size, size)
      .png()
      .toBuffer();
    images.push(buffer);
  }
  
  // Write favicon.ico
  await fs.promises.writeFile(
    path.join(outputPath, 'favicon.ico'),
    Buffer.concat(images)
  );
  
  // Create additional PNG favicons
  const pngSizes = [16, 32, 48, 192, 512];
  for (const size of pngSizes) {
    await sharp(inputPath)
      .resize(size, size)
      .png()
      .toFile(path.join(outputPath, `favicon-${size}x${size}.png`));
  }
  
  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error);