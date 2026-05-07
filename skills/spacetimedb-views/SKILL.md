---
name: spacetimedb-views
description: "Use when defining SpacetimeDB views, SQL-backed projections, derived client-facing data, view arguments, or view performance. Triggers on: view, views, derived data, SQL view, view argument, projection, client query."
license: MIT
---

Use this skill for derived data exposed through SpacetimeDB views.

## Reference map

| Need                          | Open                                                           |
| ----------------------------- | -------------------------------------------------------------- |
| View definitions and examples | [references/functions-views.md](references/functions-views.md) |

## Guidance

- Use views when the user needs derived or filtered data rather than duplicated stored rows.
- Check the SQL reference for expression or query syntax details.
- Check table indexes before adding views that may become hot subscription paths.
