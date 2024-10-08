This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Developing

Module architecture is based on the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.


### [Design patterns:](https://refactoring.guru/design-patterns)
- Facade
- Factory
- Adapter
- Composite
- SOLID
- Index Pattern


### Folder
Every Folder have to have an `index.tsx` file that exports the main file. Index does not have to have any logic, just import and export the main file.


### [Use Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes

### Use Git Trunk Based Development
- Main branch is `main`
- Feature branches are `feat/feature-name`
- Hotfix branches are `hotfix/hotfix-name`
- Release branches are `release/release-name`
- Bugfix branches are `fix/bugfix-name`
