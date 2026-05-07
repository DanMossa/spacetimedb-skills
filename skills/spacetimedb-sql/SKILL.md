---
name: spacetimedb-sql
description: "Use when writing SpacetimeDB SQL for subscriptions, CLI queries, HTTP SQL, SELECT/FROM/WHERE, DML, system variables, data types, literals, identifiers, or performance. Triggers on: SQL, spacetime sql, subscription query, SELECT, WHERE, INSERT, DELETE, UPDATE, SHOW, identifier, literal."
license: MIT
---

Use this skill for SQL syntax and query behavior.

## Core SQL split

Subscription SQL is stricter than ad hoc query/DML SQL:

- Subscription form is `SELECT projection FROM relation [WHERE predicate]`.
- Subscriptions return full rows from one table only: `SELECT *` or `SELECT table.*`.
- Subscriptions can reference at most two tables with one join, and join columns must be indexed.
- Subscriptions do not support `INSERT`, `UPDATE`, `DELETE`, column projections, arithmetic expressions, or arbitrary joins.

Ad hoc SQL via CLI/HTTP supports:

- `SELECT` with column projections, `COUNT(*)`, joins, `WHERE`, and `LIMIT`.
- `INSERT INTO table (columns...) VALUES (...)`.
- `DELETE FROM table [WHERE ...]`; no joins.
- `UPDATE table SET column = literal [WHERE ...]`; no joins.
- Experimental `SET` and `SHOW` system-variable statements.

## Query guidance

- Table names in SQL are the exact schema table names, not generated accessor names.
- String literals use single quotes. Identifiers are case-sensitive; quote reserved words or unusual names with double quotes.
- Hex literals can represent identities, connection IDs, or binary values when the context type is known.
- Index filtered columns and join columns, especially for subscriptions.
- Place the most selective table/filter first in join-heavy ad hoc queries.

## Reference map

| Need                      | Open                                                       |
| ------------------------- | ---------------------------------------------------------- |
| SpacetimeDB SQL reference | [references/reference-sql.md](references/reference-sql.md) |

## Guidance

- Distinguish subscription SQL from mutation/query SQL when explaining allowed forms.
- Check table and index definitions before recommending query changes for performance.
- Route CLI execution details to [spacetimedb-cli](../spacetimedb-cli/SKILL.md).
