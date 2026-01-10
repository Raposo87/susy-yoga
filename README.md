# Pranavida Yoga — Susy Santos 🧘‍♀️

**Descrição curta**

Pranavida Yoga é um site simples e responsivo para a instrutora Susy Santos, destinado a apresentar serviços, modalidades e planos de aulas de yoga, meditação e técnicas de respiração. O projeto é implementado com HTML, CSS e JavaScript puros (sem frameworks) e foi pensado para ser leve, acessível e fácil de personalizar.

---

## Índice 📚

- Visão geral
- Demonstração e como rodar
- Funcionalidades
- Estrutura do projeto
- Arquivos principais (resumo)
- Como personalizar
- Desenvolvimento e boas práticas
- Testes, acessibilidade e performance
- Deploy
- Contribuições
- Troubleshooting
- Licença

---

## Visão geral ✨

Este repositório contém um site estático que apresenta:

- Seção "Início" (hero) com chamada para ação;
- Seções "Sobre", "Modalidades", "Planos" (com troca de moeda/país) e "Contato";
- Menu responsivo com toggle para mobile;
- Scripts para scroll suave, alternância de planos (PT/BR), e mensagem de feedback do formulário (front-end);
- Estilização moderna com variáveis CSS, grade responsiva e atenção a tipografia e contraste.

---

## Demonstração e como rodar ▶️

Requisitos mínimos:

- Navegador moderno (Chrome, Edge, Firefox, Safari)

Opções para rodar localmente:

1. Abrir `index.html` diretamente no navegador (arrastar/abrir arquivo).
2. Usar uma extensão/servidor leve (recomendado):
   - Live Server (VS Code) — clique com botão direito em `index.html` e escolha "Open with Live Server".
   - Python: `python -m http.server 8000` (no diretório do projeto) e abrir `http://localhost:8000`.

---

## Funcionalidades principais ✅

- Layout responsivo (menu mobile, hero, cards e grid adaptáveis);
- Scroll suave nas âncoras do menu;
- Toggle de planos por país (`Portugal/Europa` e `Brasil`) com navegação automática para o conteúdo ativo;
- Formulário de contato local (feedback exibido no front-end; sem envio para servidor por padrão);
- Inserção dinâmica do ano atual no rodapé.

---

## Estrutura do projeto e arquivos 🌲

Raiz do projeto:

- `index.html` — marcação HTML, estrutura das seções e inclusão de `style.css` e `script.js`.
- `style.css` — estilos, variáveis CSS (cores, tipografia, responsividade) e componentes visuais.
- `script.js` — scripts para interação (menu mobile, scroll suave, toggle de planos, feedback do formulário e ano no rodapé).
- imagens: `logo-pranavida.png`, `yoga1.jpeg` (não obrigatórias - substitua pelos seus arquivos).

---

## Destaques do código 🔧

Excertos relevantes (explicação breve):

- Menu mobile (toggle):

```js
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
```

- Scroll suave ao clicar em links de âncora:

```js
link.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  nav.classList.remove('open');
});
```

- Alternar planos por país (usa `data-country` e classes `active`):

```js
btn.addEventListener('click', () => {
  // marca active no botão e mostra a div `#planos-pt` ou `#planos-br`
});
```

- Formulário de contato: comportamento local (mensagem de agradecimento) — se desejar envio real, integrar API/endpoint (ex.: Netlify Functions, Formspree, endpoint próprio).

---

## Como personalizar 🖌️

- Textos: edite `index.html` (hero, sobre, planos, contatos).
- Preços/planos: edite os blocos em `#planos` (`#planos-pt` e `#planos-br`).
- Imagens: substitua `logo-pranavida.png` e `yoga1.jpeg` por suas imagens (respeitar caminhos e atributos `alt`).
- Cores/tema: editar variáveis CSS em `:root` no `style.css` (`--accent`, `--bg`, etc.).
- Comportamentos JS: ver `script.js` (pontos fáceis de estender: integração com calendário, pagamento, analytics).

---

## Desenvolvimento & Boas práticas 🧾

Sugestões para manter o projeto saudável:

- Versionamento: use Git com mensagens claras (convênio: `feat:`, `fix:`, `docs:`, `chore:`).
- Linting: adicione Prettier/ESLint se for evoluir o JavaScript.
- Estrutura: se o site crescer, considere separar CSS em componentes ou migrar para um pré-processador (Sass) e dividir JS em módulos.
- Internacionalização (i18n): para multi-idiomas, extraia strings estáticas para arquivos JSON e renderize dinamicamente.

---

## Testes, Acessibilidade & Performance ⚡

- Acessibilidade (A11y):
  - Certifique-se que botões e links têm `aria-label` quando necessário (o botão do menu já tem).
  - Verifique contraste de cores, navegação por teclado e foco visível.
- Performance:
  - Otimize imagens (WebP ou compressão), use `loading="lazy"` quando for aplicável;
  - Minificar CSS/JS no deploy.
- Auditoria: use Lighthouse (Chrome DevTools) para avaliar A11y, Performance, SEO e aplicar recomendações.

---

## Deploy 🚀

Opções simples:

- GitHub Pages:
  1. Commit e push para `main`/`master` ou branch `gh-pages` e habilitar Pages nas configurações do repositório.
  2. Para projetos estáticos sem build, definina a pasta raiz como fonte.

- Netlify / Vercel:
  - Conectar repositório e configurar o build (não há build se for só estático).

CI/CD:
- Recomendo um workflow simples (GitHub Actions) que rode linter, testes e, se desejar, publique automaticamente para GitHub Pages quando tag for criada.

---

## Contribuições 🤝

Se quiser colaborar:

1. Fork do repositório
2. Nova branch: `feat/nome-da-mudanca` ou `fix/descricao`
3. PR descrevendo a alteração

Inclua testes e detalhes da modificação. Se quiser, crie um `ISSUE` com o que deseja alterar antes de abrir PR.

---

## Troubleshooting (Problemas comuns) ⚠️

- "Página não abre" → verifique se está abrindo o `index.html` correto ou se há bloqueio de CORS ao usar recursos locais.
- "Formulário não envia" → comportamento intencional; o formulário apenas mostra feedback local. Para envio real é preciso integrar um servidor.
- Problemas de layout em mobile → limpar cache do navegador e verificar responsividade em devtools.

---

## Checklist / Próximos passos sugeridos ✅

- [ ] Adicionar formulário com back-end (ex.: Netlify Functions, Formspree ou endpoint próprio).
- [ ] Inserir arquivo `LICENSE` (recomendo MIT).
- [ ] Adicionar testes de UI (Playwright) e unitários (Jest) se o front evoluir.
- [ ] Automatizar deploy com GitHub Actions.

---

## Licença 📜

Sugestão: MIT. Se concordar, adicione um arquivo `LICENSE` com o texto da MIT License.

---

## Contato / Créditos

- Projeto: Susy Santos — Pranavida Yoga
- Autor do template: você/maintainer

> Dúvidas ou melhorias: abra uma issue ou me peça para criar/ajustar arquivos (LICENSE, CONTRIBUTING, .github workflows).

---

Obrigado — se quiser, posso:

- Gerar o arquivo `LICENSE` (MIT),
- Traduzir o README para inglês,
- Criar um workflow de CI/CD de exemplo para deploy automático.

Quer que eu gere algum desses agora? 🌿
