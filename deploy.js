// deploy.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const type = process.argv[2] || 'patch'; // patch, minor ou major
const msg = process.argv[3] || 'Deploy automático';

// Atualiza versão no package.json
function bumpVersion(type) {
  const pkgPath = path.resolve('package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const [major, minor, patch] = pkg.version.split('.').map(Number);

  let newVersion;
  if (type === 'major') newVersion = `${major + 1}.0.0`;
  else if (type === 'minor') newVersion = `${major}.${minor + 1}.0`;
  else newVersion = `${major}.${minor}.${patch + 1}`;

  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(`🔢 Versão atualizada para ${newVersion}`);
  return newVersion;
}

const newVersion = bumpVersion(type);

// Build do projeto
console.log('🔧 Compilando com Vite...');
execSync('vite build', { stdio: 'inherit' });

// Copiar arquivos da dist/ para a raiz
const distPath = path.resolve('dist');
const files = fs.readdirSync(distPath);

console.log('📦 Copiando arquivos da dist/ para a raiz...');
files.forEach(file => {
  const src = path.join(distPath, file);
  const dest = path.join('.', file);

  if (fs.existsSync(dest) && ['index.html', 'assets'].includes(file)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }

  fs.cpSync(src, dest, { recursive: true });
});

// Commit e push (somente se houver mudanças)
try {
  console.log('🚀 Fazendo commit e push...');
  execSync('git add .');
  execSync('git diff --cached --quiet || git commit -m "' + msg + '"');
  execSync('git push origin main', { stdio: 'inherit' });
  console.log('✅ Deploy finalizado com sucesso!');
} catch (err) {
  console.log('⚠️ Nenhuma alteração para commit ou erro no push.');
}