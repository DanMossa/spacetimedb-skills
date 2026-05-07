---
name: spacetimedb-procedures
description: "Use when writing SpacetimeDB procedures, returning values, making HTTP requests from server code, accessing the database from procedures, calling reducers from procedures, or integrating external APIs. Triggers on: procedure, procedures, HTTP request, return value, external API, AI API, call reducer from procedure."
license: MIT
---

Use this skill for procedures and server-side work that is not a reducer transaction entrypoint.

## Reference map

| Need                                                                           | Open                                                                     |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| Procedure definitions, database access, HTTP, reducer calls, and return values | [references/functions-procedures.md](references/functions-procedures.md) |

## Guidance

- Use reducers for transactional client-invoked state changes; use procedures when the reference indicates return values or external work are appropriate.
- Keep HTTP request and external API handling explicit about secrets, failures, and runtime expectations.
- Route table mutation details to [spacetimedb-reducers](../spacetimedb-reducers/SKILL.md) or [spacetimedb-tables](../spacetimedb-tables/SKILL.md) as needed.
