---
name: spacetimedb-clients
description: "Use when working with general SpacetimeDB client SDK concepts: generated bindings, connection lifecycle, identity, local cache, subscriptions, subscription semantics, reducer invocation, and update callbacks. Triggers on: client SDK, codegen, generated bindings, DbConnection, subscribe, local cache, reducer invocation, update callback."
license: MIT
---

Use this skill for SDK concepts shared across languages.

## Core client flow

1. Generate module bindings from the current module, not stale checked-in examples.
2. Build a `DbConnection` with the host URI, database name or identity, optional auth token, and connection callbacks.
3. Start or tick the connection according to the SDK. Some SDKs do not process callbacks until advanced.
4. Register row/reducer/subscription callbacks before relying on them.
5. Subscribe to tables or queries; subscribed rows appear in the local cache after the subscription is applied.
6. Read data from the local cache through generated table handles.
7. Invoke reducers through generated reducer handles; observe reducer outcomes through SDK-specific events or event tables.

## Cross-SDK rules

- The subscription handle manages lifecycle, not row data. Rows live in the connection's local cache.
- `subscribeToAllTables` is convenient but hard to cancel or optimize. Prefer specific typed queries for production clients.
- Subscribe before reading from the cache. Empty cache usually means no applied subscription, not no rows in the database.
- Unsubscribe is asynchronous; rows may remain until the server confirms the unsubscribe.
- Public tables and public reducers/procedures are generated for normal clients. Use `--include-private` only for trusted tooling.
- Generated names follow the module schema. Do not guess accessors when local bindings are available.
- Subscriptions that join tables need indexes on join columns; overlapping subscriptions can duplicate work and complicate cache expectations.

## Reference map

| Need                                 | Open                                                                                                                                                                       |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SDK overview and choosing a language | [references/clients.md](references/clients.md)                                                                                                                             |
| General API concepts                 | [references/clients-api.md](references/clients-api.md)                                                                                                                     |
| Code generation                      | [references/clients-codegen.md](references/clients-codegen.md)                                                                                                             |
| Connection lifecycle                 | [references/clients-connection.md](references/clients-connection.md)                                                                                                       |
| Subscriptions and semantics          | [references/clients-subscriptions.md](references/clients-subscriptions.md), [references/clients-subscriptions-semantics.md](references/clients-subscriptions-semantics.md) |

## Guidance

- Load a language-specific client skill when writing concrete SDK code.
- Subscribe before reading from the local cache unless the selected SDK reference says otherwise.
- Keep reducer call patterns consistent with the generated binding names and the SpacetimeDB version.
