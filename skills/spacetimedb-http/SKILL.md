---
name: spacetimedb-http
description: "Use when calling SpacetimeDB HTTP endpoints for identity, database operations, reducer calls, SQL execution, schema metadata, logs, energy endpoints, or authorization headers. Triggers on: HTTP API, REST, Authorization header, bearer token, /v1/identity, /v1/database, HTTP reducer call, HTTP SQL."
license: MIT
---

Use this skill for SpacetimeDB HTTP route behavior and request construction.

## Core HTTP patterns

- Most HTTP endpoints accept `Authorization: Bearer <token>`. Without it, database endpoints usually allocate or use an anonymous identity with public-table access only.
- `POST /v1/identity` returns `{ "identity": string, "token": string }`.
- `POST /v1/database/:name_or_identity/call/:reducer` invokes a reducer or procedure. The request body is a JSON array of arguments.
- `POST /v1/database/:name_or_identity/sql` runs one or more SQL statements separated by `;` and returns JSON statement results with `schema` and `rows`.
- `GET /v1/database/:name_or_identity/schema?version=...` returns `RawModuleDef` JSON and maps to `spacetime describe`.
- `GET /v1/database/:name_or_identity/logs` requires database ownership and maps to `spacetime logs`.
- WebSocket subscriptions use `/v1/database/:name_or_identity/subscribe` with the `v1.bsatn.spacetimedb` or `v1.json.spacetimedb` subprotocol; prefer SDKs unless building custom tooling.

## Request cautions

- Management endpoints are primarily for tooling, debugging, and administration; use SDK WebSocket clients for normal app traffic.
- Anonymous HTTP reducer calls pass an anonymous identity to `ReducerContext`; module auth logic may reject them.
- HTTP SQL sees only public rows for anonymous callers and is subject to RLS.
- Route SQL syntax to [spacetimedb-sql](../spacetimedb-sql/SKILL.md) before writing non-trivial query strings.

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
