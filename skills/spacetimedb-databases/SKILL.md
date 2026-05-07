---
name: spacetimedb-databases
description: "Use when creating, developing, building, publishing, migrating, or reasoning about SpacetimeDB database modules. Covers local development, module build/publish flow, transactions, automatic migrations, incremental migrations, and the database cheat sheet. Triggers on: database module, spacetime publish, build module, migration, transaction, atomicity, developing module."
license: MIT
---

Use this skill for database module lifecycle and migration work.

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
