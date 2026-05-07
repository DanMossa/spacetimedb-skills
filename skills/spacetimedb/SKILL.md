---
name: spacetimedb
description: "Use this skill first for any SpacetimeDB task; it routes to focused skills for modules, tables, reducers, procedures, views, clients, subscriptions, CLI commands, auth, RLS, HTTP APIs, SQL, deployment, serialization, tutorials, quickstarts, and upgrades. Triggers on: spacetime, spacetimedb, SpacetimeDB, stdb, module, reducer, table, procedure, view, subscription, DbConnection, spacetime generate, spacetime publish, spacetime sql, BSATN, SATS, row-level security, RLS, Maincloud, standalone, Unity, Unreal."
license: MIT
---

Entry point for the SpacetimeDB skill collection. SpacetimeDB combines a database, server-side application logic, and realtime client sync into one programmable backend.

## How to use this skill

1. Find the specialized skill in the router below that best matches the task.
2. Load that skill's `SKILL.md` and follow its guidance.
3. Open only the referenced Markdown files that match the current subtask.
4. If no sub-skill fits, search copied references in the most likely skill before falling back to external docs.

Do not load every SpacetimeDB reference file by default. Start with the focused skill body, then load a reference only when the body says the details are needed or the task requires exact API syntax.

## Core model

- A database is a published instance of a module; the module defines tables, reducers, procedures, views, and public client surface.
- Tables store state. Public tables can be subscribed to by clients; private tables are server-only unless exposed through views or reducers.
- Reducers are transactional entrypoints for state changes. Failed reducers roll back their table mutations.
- Procedures can return values and perform external work such as HTTP requests; open transactions explicitly when they need database writes.
- Views expose derived, read-only data. Prefer anonymous views when the result does not depend on the caller.
- Clients use generated bindings, connect with `DbConnection`, subscribe to rows, read the local cache, and invoke reducers or procedures.

For longer descriptions and trigger keywords for every skill, see [references/index.md](references/index.md).

## Skill router

### Foundations

| Skill                                                          | Load when...                                                                                                                                    |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| [spacetimedb-quickstarts](../spacetimedb-quickstarts/SKILL.md) | Installing SpacetimeDB, understanding the architecture, starting a new app, or choosing a framework quickstart.                                 |
| [spacetimedb-cli](../spacetimedb-cli/SKILL.md)                 | Running `spacetime` commands: `init`, `build`, `publish`, `generate`, `call`, `sql`, `logs`, `dev`, server configuration, or standalone config. |
| [spacetimedb-databases](../spacetimedb-databases/SKILL.md)     | Creating, developing, publishing, migrating, or operating SpacetimeDB database modules.                                                         |
| [spacetimedb-upgrade](../spacetimedb-upgrade/SKILL.md)         | Migrating projects from SpacetimeDB 1.0 to 2.0 or fixing code affected by those breaking changes.                                               |

### Module Schema And Logic

| Skill                                                        | Load when...                                                                                                                           |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| [spacetimedb-tables](../spacetimedb-tables/SKILL.md)         | Defining tables, columns, indexes, constraints, primary keys, event tables, schedule tables, access permissions, or table performance. |
| [spacetimedb-reducers](../spacetimedb-reducers/SKILL.md)     | Writing reducers, lifecycle reducers, reducer context code, scheduled reducers, table mutations, or reducer error handling.            |
| [spacetimedb-procedures](../spacetimedb-procedures/SKILL.md) | Writing procedures, calling reducers from procedures, making HTTP requests, or returning procedure values.                             |
| [spacetimedb-views](../spacetimedb-views/SKILL.md)           | Defining views, view arguments, SQL-backed projections, and client-facing derived data.                                                |
| [spacetimedb-auth](../spacetimedb-auth/SKILL.md)             | Authentication, SpacetimeAuth, Auth0, Clerk, auth claims, authorization, row-level security, or rejecting client connections.          |

### Clients

| Skill                                                                      | Load when...                                                                                                                             |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [spacetimedb-clients](../spacetimedb-clients/SKILL.md)                     | General client SDK concepts: codegen, connection lifecycle, local cache, subscriptions, reducer invocation, and update semantics.        |
| [spacetimedb-client-typescript](../spacetimedb-client-typescript/SKILL.md) | TypeScript, JavaScript, React, Vue, Svelte, browser, Node, Bun, Deno, Next.js, Nuxt, Remix, TanStack, Angular, or generated TS bindings. |
| [spacetimedb-client-rust](../spacetimedb-client-rust/SKILL.md)             | Rust client SDK usage, Rust generated bindings, Rust connection code, callbacks, subscriptions, and reducer calls.                       |
| [spacetimedb-client-c-sharp](../spacetimedb-client-c-sharp/SKILL.md)       | C# or Unity client SDK usage, generated C# bindings, callbacks, subscriptions, reducer calls, and Unity integration.                     |
| [spacetimedb-client-unreal](../spacetimedb-client-unreal/SKILL.md)         | Unreal Engine client SDK usage, Unreal generated bindings, connection ticking, subscriptions, and reducers.                              |

### Operations And Reference

| Skill                                                              | Load when...                                                                                                      |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| [spacetimedb-deploy](../spacetimedb-deploy/SKILL.md)               | Deploying to Maincloud, self-hosting, standalone service setup, key rotation, logging, or PGWire.                 |
| [spacetimedb-http](../spacetimedb-http/SKILL.md)                   | Using HTTP endpoints for identity, database operations, reducer calls, SQL, or authorization headers.             |
| [spacetimedb-sql](../spacetimedb-sql/SKILL.md)                     | Writing SpacetimeDB SQL for subscriptions, CLI queries, HTTP SQL, DML, literals, identifiers, or SQL performance. |
| [spacetimedb-serialization](../spacetimedb-serialization/SKILL.md) | BSATN, SATS JSON, AlgebraicType/AlgebraicValue encoding, WebAssembly ABI, or low-level module host calls.         |
| [spacetimedb-tutorials](../spacetimedb-tutorials/SKILL.md)         | Following or adapting chat app, Unity Blackhol.io, or Unreal Blackhol.io tutorials.                               |

## Fallback

If the task references a SpacetimeDB API not covered by the router, search the copied reference files in the most likely skill's `references/` directory, then inspect `src/raw-data-output` if this repository is available.
