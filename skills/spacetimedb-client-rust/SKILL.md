---
name: spacetimedb-client-rust
description: "Use when writing SpacetimeDB Rust clients, generated Rust bindings, connection code, subscriptions, cache access, reducer invocation, callbacks, or identity handling. Triggers on: Rust client, Rust SDK, generated Rust bindings, Rust subscription, Rust reducer call, Rust callbacks."
license: MIT
---

Use this skill for Rust client implementation.

## Core Rust patterns

Generate Rust bindings and import generated names from the local module:

```bash
spacetime generate --lang rust --out-dir client/src/module_bindings --module-path spacetimedb
```

```rust
use module_bindings::DbConnection;

let conn = DbConnection::builder()
    .with_uri("ws://localhost:3000")
    .with_database_name("my-database")
    .on_connect(|ctx, identity, _token| {
        log::info!("connected: {identity}");
        ctx.subscription_builder().subscribe_to_all_tables();
    })
    .on_connect_error(|_ctx, err| log::error!("connect error: {err}"))
    .on_disconnect(|_ctx, err| log::info!("disconnected: {err:?}"))
    .build()?;

conn.run_threaded();
```

## Runtime rules

- Advance the connection with `run_threaded`, `run_async`, or `frame_tick`; callbacks and cache updates require one of these.
- Read subscribed rows through `conn.db.<table>().iter()`, `.count()`, and generated unique/index handles.
- Register `on_insert`, `on_delete`, and `on_update` callbacks on generated table handles; `on_update` requires a primary key.
- Use `conn.reducers.<reducer>(...)` or `ctx.reducers()` in trait-generic callback contexts.
- Keep generated binding module names and feature flags aligned with the local project.

## Reference map

| Need         | Open                                                     |
| ------------ | -------------------------------------------------------- |
| Rust SDK API | [references/clients-rust.md](references/clients-rust.md) |

## Guidance

- Match generated module names and binding paths from the local project.
- Keep connection lifecycle, subscription callbacks, and reducer calls aligned with the Rust SDK reference.
- Route Rust server module schema or reducer code to table and reducer skills rather than this client skill.
