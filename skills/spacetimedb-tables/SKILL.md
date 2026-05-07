---
name: spacetimedb-tables
description: "Use when defining or changing SpacetimeDB tables, columns, constraints, primary keys, unique constraints, indexes, auto-increment fields, default values, event tables, schedule tables, access permissions, file storage, or table performance. Triggers on: table, column, primary key, unique, index, btree, direct index, event table, schedule table."
license: MIT
---

Use this skill for module schema and table performance.

## Reference map

| Need                                | Open                                                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Table definitions and core patterns | [references/tables.md](references/tables.md)                                                                                                           |
| Access control                      | [references/tables-access-permissions.md](references/tables-access-permissions.md)                                                                     |
| IDs and defaults                    | [references/tables-auto-increment.md](references/tables-auto-increment.md), [references/tables-default-values.md](references/tables-default-values.md) |
| Types and constraints               | [references/tables-column-types.md](references/tables-column-types.md), [references/tables-constraints.md](references/tables-constraints.md)           |
| Index design                        | [references/tables-indexes.md](references/tables-indexes.md)                                                                                           |
| Event and schedule tables           | [references/tables-event-tables.md](references/tables-event-tables.md), [references/tables-schedule-tables.md](references/tables-schedule-tables.md)   |
| Storage and performance             | [references/tables-file-storage.md](references/tables-file-storage.md), [references/tables-performance.md](references/tables-performance.md)           |

## Guidance

- Check migration implications in [spacetimedb-databases](../spacetimedb-databases/SKILL.md) before changing existing schemas.
- Favor indexed lookups for reducer paths that run often or touch large tables.
- Use event tables for append-only client notifications, especially when replacing reducer result callback patterns.
