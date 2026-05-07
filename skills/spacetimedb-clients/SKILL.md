---
name: spacetimedb-clients
description: "Use when working with general SpacetimeDB client SDK concepts: generated bindings, connection lifecycle, identity, local cache, subscriptions, subscription semantics, reducer invocation, and update callbacks. Triggers on: client SDK, codegen, generated bindings, DbConnection, subscribe, local cache, reducer invocation, update callback."
license: MIT
---

Use this skill for SDK concepts shared across languages.

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
