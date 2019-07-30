const path = require('path');
const fs = require('fs');

const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
  const files = await imagemin([path.join(__dirname, '../image_draft/*.{jpg,png}')], {
    destination: path.join(__dirname, '../image'),
    plugins: [
      imageminJpegtran(),
      imageminPngquant()
    ]
  });

  files.forEach(file => {
    fs.unlinkSync(file.sourcePath);
  });
})();
