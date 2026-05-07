---
name: spacetimedb-client-typescript
description: "Use when writing SpacetimeDB TypeScript or JavaScript clients, generated TS bindings, `DbConnection`, `DbContext`, query builders, subscriptions, reducer events, cache callbacks, React provider/hooks, Vue, Svelte, browser, Node, Bun, Deno, Next.js, Nuxt, Remix, TanStack, or Angular integrations. Triggers on: TypeScript SDK, JavaScript SDK, useSpacetimeDB, useTable."
license: MIT
---

Use this skill for TypeScript and JavaScript client implementation.

## Core TypeScript patterns

Generate bindings into the client source tree, then import generated names from that path:

```bash
spacetime generate --lang typescript --out-dir client/src/module_bindings --module-path spacetimedb
```

```typescript
import { DbConnection, tables } from "./module_bindings";

const conn = DbConnection.builder()
  .withUri("ws://localhost:3000")
  .withDatabaseName("my-database")
  .onConnect((ctx, identity, token) => {
    console.log("Connected", identity.toHexString());
    ctx.subscriptionBuilder().subscribe(tables.user);
  })
  .onConnectError((_ctx, err) => console.error(err))
  .onDisconnect(() => console.log("Disconnected"))
  .build();
```

## Query and cache rules

- Prefer generated query builders: `tables.user`, `tables.user.where((u) => u.online.eq(true))`, and arrays of table refs.
- Use raw SQL subscriptions only for advanced cases that the query builder cannot express.
- `subscribeToAllTables()` cannot be canceled after it is initiated; use specific subscriptions for lifecycle control.
- Row callbacks (`onInsert`, `onDelete`, `onUpdate`) run for rows entering/leaving/updating the local cache, including subscription application/removal.
- Use generated reducers from the binding; method names and argument shape come from generated code.
- For React, pass a `DbConnection.builder()` to `SpacetimeDBProvider` without calling `.build()`. Use `useTable(tables.foo)` and `useReducer(reducers.foo)` for reactive data and calls.
- `@clockworklabs/spacetimedb-sdk` is deprecated; use the `spacetimedb` package with CLI 1.4.0 or later.

## Reference map

| Need                                          | Open                                                                 |
| --------------------------------------------- | -------------------------------------------------------------------- |
| TypeScript SDK API and framework integrations | [references/clients-typescript.md](references/clients-typescript.md) |

## Guidance

- Use generated binding names from the actual project when available; examples in the reference are patterns, not guaranteed local identifiers.
- Keep subscription setup, cache reads, reducer observations, and reducer calls in the order shown by the SDK reference.
- Route framework bootstrapping back to [spacetimedb-quickstarts](../spacetimedb-quickstarts/SKILL.md) when project setup is the main task.
