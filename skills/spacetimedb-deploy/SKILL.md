---
name: spacetimedb-deploy
description: "Use when deploying or operating SpacetimeDB on Maincloud or self-hosted infrastructure, configuring standalone services, rotating keys, viewing logs, filtering logs, or using PGWire. Triggers on: deploy, Maincloud, self-host, standalone, systemd, Nginx, key rotation, logging, spacetime logs, PGWire, psql."
license: MIT
---

Use this skill for deployment, operations, and production diagnostics.

## Core deployment patterns

- Maincloud publish:

```bash
spacetime publish my-database --server maincloud
```

- Maincloud clients use `https://maincloud.spacetimedb.com` as the URI and the database name or identity as `withDatabaseName`/`WithDatabaseName`.
- Updating an existing database hot-swaps the module and runs migration checks; load database migration guidance before schema-changing deploys.
- Self-hosted production should run SpacetimeDB as a dedicated user behind a reverse proxy. Keep publish/admin routes restricted unless the host is intentionally open.
- Standalone mode is suitable for local development; SSL is not supported directly in standalone.
- Logs can be viewed with `spacetime logs <database> --follow --level info` or via the HTTP logs endpoint for owners.
- PGWire uses the SpacetimeDB auth token as the PostgreSQL password; treat it as a secret and avoid logging it.

## Production cautions

- Key rotation can invalidate tokens or cause 401/403 behavior if identity continuity is not planned.
- Do not expose broad Nginx proxy rules for `/` unless public database creation and management are intended.
- For self-hosted WebSockets, the reverse proxy must support `Upgrade` and `Connection: Upgrade` headers for `/v1/database/<db>/subscribe`.

## Reference map

| Need                 | Open                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| Maincloud deployment | [references/how-to-deploy-maincloud.md](references/how-to-deploy-maincloud.md)                 |
| Self-hosting         | [references/how-to-deploy-self-hosting.md](references/how-to-deploy-self-hosting.md)           |
| Key rotation         | [references/how-to-self-hosted-key-rotation.md](references/how-to-self-hosted-key-rotation.md) |
| Logging              | [references/how-to-logging.md](references/how-to-logging.md)                                   |
| PGWire               | [references/how-to-pg-wire.md](references/how-to-pg-wire.md)                                   |

## Guidance

- Be explicit about whether the target is Maincloud, local standalone, or self-hosted production.
- Avoid mixing CLI publishing instructions with server installation steps unless the user needs both.
- Treat key rotation and auth material as sensitive; prefer describing required configuration over exposing values.
