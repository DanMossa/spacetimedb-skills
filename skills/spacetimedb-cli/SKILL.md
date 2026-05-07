---
name: spacetimedb-cli
description: "Use when running or explaining SpacetimeDB CLI commands and standalone configuration. Covers `spacetime init`, `build`, `publish`, `generate`, `call`, `sql`, `logs`, `describe`, `dev`, `server`, `start`, login/logout, and `config.toml`. Triggers on: spacetime CLI, spacetime publish, spacetime generate, spacetime sql, spacetime logs, spacetime server."
license: MIT
---

Use this skill for `spacetime` command-line workflows.

## Reference map

| Need                     | Open                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| Command syntax and flags | [references/cli-reference.md](references/cli-reference.md)                                     |
| Standalone server config | [references/cli-reference-standalone-config.md](references/cli-reference-standalone-config.md) |

## Guidance

- Prefer exact CLI flags from the reference rather than recalling syntax from memory.
- Keep `spacetime generate` language, output directory, and module/database name aligned with the client SDK being used.
- Route publishing and migration behavior to [spacetimedb-databases](../spacetimedb-databases/SKILL.md) when schema changes matter.
