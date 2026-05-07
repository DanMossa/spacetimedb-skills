---
name: spacetimedb-upgrade
description: "Use when migrating from SpacetimeDB 1.0 to 2.0 or fixing code affected by 2.0 breaking changes. Covers reducer callbacks, event tables, event type changes, subscription API, table accessor naming, database-name connections, `sender()` method, update methods, scheduled functions, private codegen, light mode, `CallReducerFlags`, and confirmed reads. Triggers on: upgrade, migrate, 1.0, 2.0, breaking changes."
license: MIT
---

Use this skill for SpacetimeDB 1.0 to 2.0 migration work.

## Core migration checks

- Reducer callbacks changed. Prefer event tables for durable, subscribable result notifications; use per-call `_then()` style callbacks only when the guide's limitations are acceptable.
- Event types changed. Update client event handling before assuming old reducer-result event shapes still exist.
- Subscription APIs and table accessor names changed. Regenerate bindings and update calls to the generated names rather than patching guessed identifiers.
- Clients connect by database name or identity, not the old module naming assumptions.
- In Rust and C++, `sender` is now a method: use `ctx.sender()`. TypeScript and C# property syntax is unchanged.
- Only primary keys get generated update methods. For other changes, update through the primary-key index or delete and insert when the primary key changes.
- Scheduled functions, private codegen, light mode, `CallReducerFlags`, and confirmed reads all have separate migration notes. Load the guide section before editing those areas.

## Reference map

| Need                          | Open                                           |
| ----------------------------- | ---------------------------------------------- |
| Migration guide and checklist | [references/upgrade.md](references/upgrade.md) |

## Guidance

- Identify the exact breaking change before editing code; the guide has separate remedies for callbacks, events, subscriptions, table naming, connection names, `sender`, updates, scheduling, codegen, light mode, flags, and confirmed reads.
- Prefer event tables over old reducer callback patterns when the guide recommends them.
- Check generated client APIs after changing module names, table accessors, visibility, or private items.
