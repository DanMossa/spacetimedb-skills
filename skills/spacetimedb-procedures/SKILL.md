---
name: spacetimedb-procedures
description: "Use when writing SpacetimeDB procedures, returning values, making HTTP requests from server code, accessing the database from procedures, calling reducers from procedures, or integrating external APIs. Triggers on: procedure, procedures, HTTP request, return value, external API, AI API, call reducer from procedure."
license: MIT
---

Use this skill for procedures and server-side work that is not a reducer transaction entrypoint.

## Core procedure patterns

Procedures are server functions that can return values and perform work that reducers should not do, including external HTTP calls. Use reducers for client-invoked transactional state changes; use procedures when the caller needs a return value or the function must do external work.

TypeScript procedure shape:

```typescript
export const add_two_numbers = spacetimedb.procedure(
  { lhs: t.u32(), rhs: t.u32() },
  t.u64(),
  (_ctx, { lhs, rhs }) => BigInt(lhs) + BigInt(rhs),
);
```

Language notes:

- TypeScript procedures return the declared `t.*` type and receive `(ctx, args)`.
- C# procedures are unstable; add `#pragma warning disable STDB_UNSTABLE` and use `[SpacetimeDB.Procedure]`.
- Rust procedures are unstable; enable the `unstable` feature and use `#[spacetimedb::procedure]` with `&mut ProcedureContext`.
- C++ procedures are unstable; define `SPACETIMEDB_UNSTABLE_FEATURES` before including the header.

## Transactions and HTTP

- Procedures do not automatically run in a transaction.
- Wrap database writes in the language's transaction helper, such as TypeScript `ctx.withTx(...)`.
- Do not hold a transaction open while making HTTP requests. Fetch first, then open a short transaction to write results or call reducer logic.
- Treat external API secrets and failures explicitly; do not log tokens or response bodies that may contain private data.
- If a procedure calls reducer logic, keep the shared state-changing logic transaction-safe and reusable from reducer context.

## Reference map

| Need                                                                           | Open                                                                     |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Procedure definitions, database access, HTTP, reducer calls, and return values | [references/functions-procedures.md](references/functions-procedures.md) |

## Guidance

- Use reducers for transactional client-invoked state changes; use procedures when the reference indicates return values or external work are appropriate.
- Keep HTTP request and external API handling explicit about secrets, failures, and runtime expectations.
- Route table mutation details to [spacetimedb-reducers](../spacetimedb-reducers/SKILL.md) or [spacetimedb-tables](../spacetimedb-tables/SKILL.md) as needed.
