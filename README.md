# Portfólio Pessoal — Rafael Elyah

Este repositório contém o código-fonte e os arquivos de deploy do meu portfólio pessoal, publicado via GitHub Pages.

🔗 **Acesse o site:** [https://rafaelelyah.github.io](https://rafaelelyah.github.io)

---

## 🛠️ Tecnologias utilizadas

- [Vite](https://vitejs.dev/) — build ultra rápido para front-end moderno
- [Sass](https://sass-lang.com/) — pré-processador CSS
- JavaScript (ES Modules)
- GitHub Pages para hospedagem

---

## ⚙️ Scripts disponíveis

- `npm run dev` — Inicia o servidor local de desenvolvimento  
- `npm run build` — Gera os arquivos otimizados para produção  
- `npm run deploy` — Atualiza versão, compila e copia para `docs/`

> O deploy é feito manualmente via VS Code após gerar os arquivos em `docs/`.

---

## 📁 Estrutura do projeto

├── src/           # Código-fonte do site

├── docs/          # Arquivos finais para publicação

├── deploy.js      # Script de build e versão

├── vite.config.js # Configuração do Vite

├── package.json   # Dependências e scripts

└── .gitignore     # Arquivos ignorados pelo Git

---

## 📌 Observações

- O projeto está configurado para deploy direto na raiz (`base: '/'`)
- A pasta `docs/` é usada pelo GitHub Pages como fonte de publicação
- O controle de versão é automático via `deploy.js`, mas o commit é feito manualmente

---

Feito com 💻 por **Rafael Elyah**

