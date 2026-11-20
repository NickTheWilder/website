# Notes for `package.json`

Package upgrade decisions live here because `package.json` does not support comments.

## Deferred upgrades

### TypeScript 7

Keep TypeScript on 6.x for now. TypeScript 7.0 does not provide the compiler API used by some tools, and the TypeScript team recommends that projects using MDX continue with TypeScript 6. This site builds MDX content with Next.js and uses `@typescript-eslint/parser`.

Revisit the upgrade when Next.js, MDX tooling, and typescript-eslint support the TypeScript 7 compiler in this build. Upgrade TypeScript separately, then run lint and a production build before keeping it.

- [TypeScript 7 release and migration guidance](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/)
