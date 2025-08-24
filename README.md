# KM Associados - Site Institucional

Site institucional da KM Associados, especializada em Direito Previdenciário.

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy Automático (Recomendado)

1. **Crie um novo repositório no GitHub**:
   - Acesse [github.com/new](https://github.com/new)
   - Nome do repositório: `kmassociados-site` (ou outro nome de sua preferência)
   - Deixe público para usar GitHub Pages gratuitamente

2. **Configure o repositório local**:
   ```bash
   # No diretório do projeto
   git remote add origin https://github.com/SEU_USUARIO/kmassociados-site.git
   git branch -M main
   git add .
   git commit -m "Primeiro commit - Site KM Associados"
   git push -u origin main
   ```

3. **Ative o GitHub Pages**:
   - Vá para Settings → Pages no seu repositório
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Clique em Save

### Opção 2: Deploy Manual

1. **Faça o upload dos arquivos diretamente**:
   - Vá para [github.com](https://github.com)
   - Crie um novo repositório
   - Faça upload de todos os arquivos HTML, CSS e imagens
   - Ative o GitHub Pages nas configurações

## 📁 Estrutura do Projeto

```
kmprev/
├── index.html          # Página principal
├── blog.html           # Página de blog
├── elementor-style.css # Estilos adicionais
├── style.css          # Estilos principais
├── server.js          # Servidor Node.js (desenvolvimento)
├── package.json       # Configurações do projeto
├── robots.txt         # SEO
├── sitemap.xml        # SEO
└── README.md          # Este arquivo
```

## 🛠️ Desenvolvimento Local

### Com Node.js:
```bash
npm install
npm start
# Acesse: http://localhost:8001
```

### Com Python:
```bash
python -m http.server 8001
# Acesse: http://localhost:8001
```

## ✨ Funcionalidades

- ✅ Design responsivo
- ✅ Botão "voltar ao topo"
- ✅ Menu fixo no topo
- ✅ Vídeo com pausa automática ao rolar
- ✅ Integração com WhatsApp
- ✅ Formulário de contato
- ✅ SEO otimizado

## 📱 Tecnologias Utilizadas

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- Vimeo API
- Font Awesome
- Google Fonts

## 🔗 Links Importantes

- [GitHub Pages](https://pages.github.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)

## 📞 Contato

Para suporte ou dúvidas sobre o site, entre em contato através do WhatsApp: (21) 97187-2236