---
name: spacetimedb-sql
description: "Use when writing SpacetimeDB SQL for subscriptions, CLI queries, HTTP SQL, SELECT/FROM/WHERE, DML, system variables, data types, literals, identifiers, or performance. Triggers on: SQL, spacetime sql, subscription query, SELECT, WHERE, INSERT, DELETE, UPDATE, SHOW, identifier, literal."
license: MIT
---

Use this skill for SQL syntax and query behavior.

## Reference map

| Need                      | Open                                                       |
| ------------------------- | ---------------------------------------------------------- |
| SpacetimeDB SQL reference | [references/reference-sql.md](references/reference-sql.md) |

## Guidance

- Distinguish subscription SQL from mutation/query SQL when explaining allowed forms.
- Check table and index definitions before recommending query changes for performance.
- Route CLI execution details to [spacetimedb-cli](../spacetimedb-cli/SKILL.md).
