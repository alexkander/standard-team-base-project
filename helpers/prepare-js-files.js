const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './test-files';
const TARGET_DIR = './src'

const files = fs.readdirSync(SOURCE_DIR);

files.forEach((file) => {
  const sourcePath = path.join(SOURCE_DIR, file);
  const targetPath = path.join(TARGET_DIR, path.basename(path.basename(file, '.txt')).concat('.js'));
  const directory = path.dirname(targetPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive:true })
  }
  fs.copyFileSync(sourcePath, targetPath)
})