---
name: spacetimedb-reducers
description: "Use when writing SpacetimeDB reducers, lifecycle reducers, scheduled reducers, reducer context code, table mutations, indexed lookups, reducer isolation logic, or reducer error handling. Triggers on: reducer, ReducerContext, ctx, sender, client_connected, client_disconnected, init, scheduled reducer, insert row, delete row, update row."
license: MIT
---

Use this skill for reducer implementation and transactional server logic.

## Core reducer patterns

Reducers are the transactional entrypoints for table mutation. A successful reducer commits all table changes; a thrown exception, returned error, or panic rolls all of them back.

TypeScript reducer shape:

```typescript
export const create_user = spacetimedb.reducer(
  { name: t.string(), email: t.string() },
  (ctx, { name, email }) => {
    if (name === "") throw new Error("Name cannot be empty");
    ctx.db.user.insert({ id: 0n, name, email });
  },
);
```

Language-specific signatures:

- TypeScript: `spacetimedb.reducer(args, (ctx, args) => { ... })`, or `spacetimedb.reducer((ctx) => { ... })` for no args.
- C#: `[SpacetimeDB.Reducer] public static void Name(ReducerContext ctx, ...)`.
- Rust: `#[spacetimedb::reducer] pub fn name(ctx: &ReducerContext, ...) -> Result<(), String>`; import `spacetimedb::Table` for table methods.
- Lifecycle reducers use `init`, `client_connected`, and `client_disconnected` variants in the language's syntax.

## Table access

- Insert rows through the generated table handle; use the trigger value (`0`, `0n`, etc.) for auto-increment fields.
- Find one row through a primary key or unique index: TypeScript `ctx.db.user.id.find(id)`, C# `ctx.Db.User.Id.Find(id)`, Rust `ctx.db.user().id().find(id)`.
- Filter many rows through indexed columns. Avoid full `iter()` scans on hot paths unless the table is known to be small.
- Update by finding a row, modifying it, then calling the update method on the same primary-key index.
- Delete by primary key/unique value or indexed filters when possible.
- Use `ctx.sender` in TypeScript/C# and `ctx.sender()` in Rust/C++ for the caller identity on SpacetimeDB 2.0.

## Transaction guidance

- Keep reducers short and deterministic; move external I/O to procedures.
- Nested reducer calls share the same transaction; they are not separate commits.
- Use sender-facing errors for expected validation failures when the language exposes them; reserve panics or unchecked exceptions for programmer errors.
- Scheduled reducers run from schedule-table rows and may have no client sender.

## Reference map

| Need                            | Open                                                                                                 |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Reducer basics and table access | [references/functions-reducers.md](references/functions-reducers.md)                                 |
| Lifecycle reducers              | [references/functions-reducers-lifecycle.md](references/functions-reducers-lifecycle.md)             |
| Reducer context                 | [references/functions-reducers-reducer-context.md](references/functions-reducers-reducer-context.md) |
| Error handling                  | [references/functions-reducers-error-handling.md](references/functions-reducers-error-handling.md)   |
| Function categories             | [references/functions.md](references/functions.md)                                                   |

## Guidance

- Treat reducers as transactions: keep side effects and error behavior aligned with the reference semantics.
- Use `ctx.sender`/`ctx.sender()` according to the project's SpacetimeDB version; load [spacetimedb-upgrade](../spacetimedb-upgrade/SKILL.md) for 1.0 to 2.0 migrations.
- Route schema questions to [spacetimedb-tables](../spacetimedb-tables/SKILL.md).
