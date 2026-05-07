---
name: spacetimedb-deploy
description: "Use when deploying or operating SpacetimeDB on Maincloud or self-hosted infrastructure, configuring standalone services, rotating keys, viewing logs, filtering logs, or using PGWire. Triggers on: deploy, Maincloud, self-host, standalone, systemd, Nginx, key rotation, logging, spacetime logs, PGWire, psql."
license: MIT
---

Use this skill for deployment, operations, and production diagnostics.

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
