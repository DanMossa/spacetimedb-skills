---
name: spacetimedb-http
description: "Use when calling SpacetimeDB HTTP endpoints for identity, database operations, reducer calls, SQL execution, schema metadata, logs, energy endpoints, or authorization headers. Triggers on: HTTP API, REST, Authorization header, bearer token, /v1/identity, /v1/database, HTTP reducer call, HTTP SQL."
license: MIT
---

Use this skill for SpacetimeDB HTTP route behavior and request construction.

## Reference map

| Need                           | Open                                                                 |
| ------------------------------ | -------------------------------------------------------------------- |
| Authorization headers and ping | [references/http-authorization.md](references/http-authorization.md) |
| Database endpoints             | [references/http-database.md](references/http-database.md)           |
| Identity endpoints             | [references/http-identity.md](references/http-identity.md)           |

## Guidance

- Include the required bearer token behavior when giving endpoint examples.
- Route SQL syntax questions to [spacetimedb-sql](../spacetimedb-sql/SKILL.md).
- Route SDK connection questions to [spacetimedb-clients](../spacetimedb-clients/SKILL.md).
