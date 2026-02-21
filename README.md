# LinkeTree (React + Firebase)

Projeto de Link in Bio com painel administrativo. Permite cadastrar links personalizados, definir cores, e gerenciar redes sociais. Usa Firebase Auth para login e Firestore para persistencia dos dados.

## Visao geral
- Home publica com lista de links e icones sociais
- Login com Firebase Authentication
- Painel admin privado para cadastrar/remover links
- Pagina de redes sociais para salvar urls
- Roteamento com React Router e protecao de rotas

## Rotas
- `/` - Home publica
- `/login` - Login
- `/admin` - Admin (links)
- `/admin/social` - Redes sociais
- `*` - 404

## Stack
- React 19 + TypeScript
- Vite
- React Router 7
- Firebase (Auth + Firestore)
- Tailwind CSS v4
- React Icons

## Estrutura do Firestore
Colecoes usadas:
- `links`
  - `name` (string)
  - `url` (string)
  - `bg` (string, cor)
  - `color` (string, cor)
  - `created` (timestamp)
- `social` / doc `link`
  - `facebook` (string)
  - `instagram` (string)
  - `youtube` (string)

## Variaveis de ambiente
Crie um arquivo `.env` na raiz com:
```
VITE_API_KEY=... 
VITE_AUTH_DOMAIN=...
VITE_PROJECTID=...
VITE_STORAGE_BUCKET=...
VITE_MESSAGING_SENDERID=...
VITE_APP_ID=...
```

## Como rodar
```bash
# instalar deps
npm install

# ambiente de desenvolvimento
npm run dev

# build de producao
npm run build

# preview do build
npm run preview
```

## Autenticacao
O acesso a `/admin` e `/admin/social` e protegido. Ao logar, os dados do usuario sao armazenados em `localStorage` e a rota e liberada.

## Observacoes
- O titulo e o nome exibido na Home podem ser ajustados no arquivo `src/pages/home/index.tsx`.
- Os links e redes sociais sao carregados do Firestore em tempo real na area admin.

## Deploy
Projeto pronto para deploy na Vercel (existe `vercel.json`).

---
Feito no curso Sujeito Programador - ReactJS.
