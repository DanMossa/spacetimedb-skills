---
name: spacetimedb-client-rust
description: "Use when writing SpacetimeDB Rust clients, generated Rust bindings, connection code, subscriptions, cache access, reducer invocation, callbacks, or identity handling. Triggers on: Rust client, Rust SDK, generated Rust bindings, Rust subscription, Rust reducer call, Rust callbacks."
license: MIT
---

Use this skill for Rust client implementation.

## Reference map

| Need         | Open                                                     |
| ------------ | -------------------------------------------------------- |
| Rust SDK API | [references/clients-rust.md](references/clients-rust.md) |

## Guidance

- Match generated module names and binding paths from the local project.
- Keep connection lifecycle, subscription callbacks, and reducer calls aligned with the Rust SDK reference.
- Route Rust server module schema or reducer code to table and reducer skills rather than this client skill.
