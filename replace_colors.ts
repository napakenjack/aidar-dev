import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/text-white/g, 'text-foreground');
  content = content.replace(/bg-white/g, 'bg-foreground');
  content = content.replace(/border-white/g, 'border-foreground');
  content = content.replace(/from-white/g, 'from-foreground');
  content = content.replace(/to-white/g, 'to-foreground');
  content = content.replace(/text-black/g, 'text-background');
  content = content.replace(/bg-black/g, 'bg-background');
  content = content.replace(/ring-white/g, 'ring-foreground');
  fs.writeFileSync(filePath, content, 'utf8');
}

const pagesDir = path.join(process.cwd(), 'src', 'pages');
fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    replaceInFile(path.join(pagesDir, file));
  }
});
