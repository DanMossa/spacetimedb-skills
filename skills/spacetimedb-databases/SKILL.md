---
name: spacetimedb-databases
description: "Use when creating, developing, building, publishing, migrating, or reasoning about SpacetimeDB database modules. Covers local development, module build/publish flow, transactions, automatic migrations, incremental migrations, and the database cheat sheet. Triggers on: database module, spacetime publish, build module, migration, transaction, atomicity, developing module."
license: MIT
---

Use this skill for database module lifecycle and migration work.

## Core patterns

- A module is the code and schema; a database is a published instance identified by name or identity.
- `spacetime publish <DATABASE_NAME>` builds, uploads, runs `init` if present, and starts serving the module.
- Publishing an existing database attempts an automatic migration and hot-swaps the module atomically while maintaining active client connections.
- Regenerate and ship client bindings after public schema, reducer, procedure, or view surface changes.
- Reducers run in automatic transactions; procedures open transactions manually when they need database writes.

## Migration checklist

- Safe: add tables, add indexes, add or remove auto-increment annotations, make private tables public, add reducers, remove unique constraints.
- Potentially breaking: add a column at the end with a default, change or remove reducers, make a public table private, remove primary keys, remove indexes used by subscriptions.
- Forbidden by automatic migration: remove tables, remove/rename/reorder/change existing columns, add columns without defaults, add columns in the middle, change schedule-table status, add unique or primary-key constraints.
- During development, `--delete-data` can reset data. Do not use it for production unless permanent data loss is intended.
- For forbidden production changes, use an additive migration strategy: add new shape, dual-write/backfill, move clients, then retire old shape later.

## Reference map

| Need                       | Open                                                                                                                                                                                           |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Overview and learning path | [references/databases.md](references/databases.md)                                                                                                                                             |
| Local development          | [references/databases-developing.md](references/databases-developing.md)                                                                                                                       |
| Build and publish          | [references/databases-building-publishing.md](references/databases-building-publishing.md)                                                                                                     |
| Migration rules            | [references/databases-automatic-migrations.md](references/databases-automatic-migrations.md), [references/databases-incremental-migrations.md](references/databases-incremental-migrations.md) |
| Transaction behavior       | [references/databases-transactions-atomicity.md](references/databases-transactions-atomicity.md)                                                                                               |
| Dense syntax examples      | [references/databases-cheat-sheet.md](references/databases-cheat-sheet.md)                                                                                                                     |

## Guidance

- Check migration safety before changing table shape, names, indexes, constraints, or public/private visibility.
- For schema definitions, load [spacetimedb-tables](../spacetimedb-tables/SKILL.md).
- For reducer transaction behavior, load [spacetimedb-reducers](../spacetimedb-reducers/SKILL.md).
