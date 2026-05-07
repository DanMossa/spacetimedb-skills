---
name: spacetimedb-upgrade
description: "Use when migrating from SpacetimeDB 1.0 to 2.0 or fixing code affected by 2.0 breaking changes. Covers reducer callbacks, event tables, event type changes, subscription API, table accessor naming, database-name connections, `sender()` method, update methods, scheduled functions, private codegen, light mode, `CallReducerFlags`, and confirmed reads. Triggers on: upgrade, migrate, 1.0, 2.0, breaking changes."
license: MIT
---

Use this skill for SpacetimeDB 1.0 to 2.0 migration work.

## Reference map

| Need                          | Open                                           |
| ----------------------------- | ---------------------------------------------- |
| Migration guide and checklist | [references/upgrade.md](references/upgrade.md) |

## Guidance

- Identify the exact breaking change before editing code; the guide has separate remedies for callbacks, events, subscriptions, table naming, connection names, `sender`, updates, scheduling, codegen, light mode, flags, and confirmed reads.
- Prefer event tables over old reducer callback patterns when the guide recommends them.
- Check generated client APIs after changing module names, table accessors, visibility, or private items.
