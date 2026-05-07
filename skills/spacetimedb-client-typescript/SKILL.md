---
name: spacetimedb-client-typescript
description: "Use when writing SpacetimeDB TypeScript or JavaScript clients, generated TS bindings, `DbConnection`, `DbContext`, query builders, subscriptions, reducer events, cache callbacks, React provider/hooks, Vue, Svelte, browser, Node, Bun, Deno, Next.js, Nuxt, Remix, TanStack, or Angular integrations. Triggers on: TypeScript SDK, JavaScript SDK, useSpacetimeDB, useTable."
license: MIT
---

Use this skill for TypeScript and JavaScript client implementation.

## Reference map

| Need                                          | Open                                                                 |
| --------------------------------------------- | -------------------------------------------------------------------- |
| TypeScript SDK API and framework integrations | [references/clients-typescript.md](references/clients-typescript.md) |

## Guidance

- Use generated binding names from the actual project when available; examples in the reference are patterns, not guaranteed local identifiers.
- Keep subscription setup, cache reads, reducer observations, and reducer calls in the order shown by the SDK reference.
- Route framework bootstrapping back to [spacetimedb-quickstarts](../spacetimedb-quickstarts/SKILL.md) when project setup is the main task.
