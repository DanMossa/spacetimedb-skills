---
name: spacetimedb-cli
description: "Use when running or explaining SpacetimeDB CLI commands and standalone configuration. Covers `spacetime init`, `build`, `publish`, `generate`, `call`, `sql`, `logs`, `describe`, `dev`, `server`, `start`, login/logout, and `config.toml`. Triggers on: spacetime CLI, spacetime publish, spacetime generate, spacetime sql, spacetime logs, spacetime server."
license: MIT
---

Use this skill for `spacetime` command-line workflows.

## Core patterns

- Local iteration usually starts with `spacetime dev`; use `--template`, `--client-lang`, `--module-path`, and `--module-bindings-path` when the project layout is not the default.
- Module lifecycle commands are `spacetime init`, `spacetime build`, `spacetime publish`, and `spacetime generate`.
- Runtime/debug commands are `spacetime call [DATABASE] <FUNCTION> [ARGS...]`, `spacetime sql [DATABASE] "<QUERY>"`, `spacetime logs [DATABASE]`, and `spacetime describe --json [DATABASE]`.
- `spacetime generate` supports `--lang csharp|typescript|rust|unrealcpp`, `--out-dir`, `--module-path`, and `--include-private`.
- `spacetime publish [name|identity]` builds by default. Use `--server` for non-default hosts and read migration guidance before `--break-clients` or `--delete-data`.
- Database names are lowercase ASCII words separated by hyphens.

## Common command shapes

```bash
spacetime dev --template basic-ts
spacetime build --module-path spacetimedb
spacetime publish my-database
spacetime generate --lang typescript --out-dir client/src/module_bindings --module-path spacetimedb
spacetime call my-database add Alice
spacetime sql my-database "SELECT * FROM person"
spacetime logs my-database --follow --level info
```

## Reference map

| Need                     | Open                                                                                           |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| Command syntax and flags | [references/cli-reference.md](references/cli-reference.md)                                     |
| Standalone server config | [references/cli-reference-standalone-config.md](references/cli-reference-standalone-config.md) |

## Guidance

- Prefer exact CLI flags from the reference when writing final commands for uncommon options.
- Keep `spacetime generate` language, output directory, and module/database name aligned with the client SDK being used.
- Route publishing and migration behavior to [spacetimedb-databases](../spacetimedb-databases/SKILL.md) when schema changes matter.
