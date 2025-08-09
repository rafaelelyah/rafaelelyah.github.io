// deploy.js
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const validTypes = ['patch', 'minor', 'major'];
const type = process.argv[2] || 'patch';

if (!validTypes.includes(type)) {
  console.error(`❌ Tipo de versão inválido: "${type}". Use patch, minor ou major.`);
  process.exit(1);
}

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
try {
  console.log('🔧 Compilando com Vite...');
  execSync('vite build', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Erro na compilação:', err.message);
  process.exit(1);
}

// Copiar arquivos da dist/ para docs/
const distPath = path.resolve('dist');
const targetPath = path.resolve('docs');

console.log('📦 Atualizando pasta docs/...');
if (fs.existsSync(targetPath)) {
  fs.rmSync(targetPath, { recursive: true, force: true });
}
fs.mkdirSync(targetPath);
fs.cpSync(distPath, targetPath, { recursive: true });

// Criar .nojekyll (opcional)
fs.writeFileSync(path.join(targetPath, '.nojekyll'), '');

console.log(`✅ Deploy local gerado com sucesso! Versão: ${newVersion}`);
console.log('📁 Arquivos prontos em docs/. Faça o commit manual no VS Code.');