---
name: spacetimedb-views
description: "Use when defining SpacetimeDB views, SQL-backed projections, derived client-facing data, view arguments, or view performance. Triggers on: view, views, derived data, SQL view, view argument, projection, client query."
license: MIT
---

Use this skill for derived data exposed through SpacetimeDB views.

## Core view patterns

Views expose read-only, derived data to clients. Use them for filtered or joined results that should be computed server side instead of duplicating rows into another table.

TypeScript view shape:

```typescript
export const high_scorers = spacetimedb.anonymousView(
  { name: "high_scorers", public: true },
  t.array(players.rowType),
  (ctx) =>
    ctx.from.players
      .where((p) => p.score.gte(1000n))
      .where((p) => p.name.ne("BOT")),
);
```

## Design rules

- Views must be public and have explicit names.
- Views are read-only. Use reducers for writes and tables for stored state.
- Use `anonymousView`/`AnonymousViewContext` when every caller sees the same result; SpacetimeDB can share one materialized result across subscribers.
- Use per-user `ViewContext` only when the result depends on the caller, such as "my inventory" or private messages.
- Keep the read set small. Prefer indexed lookups or the module-side query builder for filters and joins.
- Do not default to `.iter()` for views; load the reference for query-builder syntax, `.iter()` limitations, and primary-key inference details.

## Reference map

| Need                          | Open                                                           |
| ----------------------------- | -------------------------------------------------------------- |
| View definitions and examples | [references/functions-views.md](references/functions-views.md) |

## Guidance

- Use views when the user needs derived or filtered data rather than duplicated stored rows.
- Check the SQL reference for expression or query syntax details.
- Check table indexes before adding views that may become hot subscription paths.
