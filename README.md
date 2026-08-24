# Portfolio Bastien Autem

Portfolio développé avec Next.js, React, Tailwind CSS et Bun. Les projets et
leurs études de cas sont décrits dans `src/data/projects.js` puis générés
statiquement.

## Prérequis

- Bun 1.3.14 ou plus récent
- Node.js 24.x

## Installation

```bash
bun install
```

Copier ensuite `.env.example` vers `.env` et renseigner
`NEXT_PUBLIC_SITE_URL` avec l'URL publique du portfolio. Sur Vercel, l'URL de
production est utilisée automatiquement si cette variable n'est pas définie.

## Développement

```bash
bun dev
```

Le site est ensuite disponible sur `http://localhost:3000`.

## Vérifications

```bash
bun run lint
bun run build
```

## Production

```bash
bun run build
bun start
```
