---
name: spacetimedb-reducers
description: "Use when writing SpacetimeDB reducers, lifecycle reducers, scheduled reducers, reducer context code, table mutations, indexed lookups, reducer isolation logic, or reducer error handling. Triggers on: reducer, ReducerContext, ctx, sender, client_connected, client_disconnected, init, scheduled reducer, insert row, delete row, update row."
license: MIT
---

Use this skill for reducer implementation and transactional server logic.

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
