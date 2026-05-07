---
name: spacetimedb-client-unreal
description: "Use when writing SpacetimeDB Unreal Engine clients, generated Unreal bindings, Unreal plugin setup, `DbConnection`, ticking the connection, cache access, subscriptions, reducer invocation, or identity handling. Triggers on: Unreal, Unreal Engine, UE, Unreal SDK, URemoteTable, USubscriptionBuilder."
license: MIT
---

Use this skill for Unreal Engine client implementation.

## Core Unreal patterns

Generate Unreal bindings with the project module details:

```bash
spacetime generate --lang unrealcpp --uproject-dir path/to/Game.uproject --module-path spacetimedb --unreal-module-name Game
```

Connection shape:

```cpp
UDbConnection* Conn = UDbConnection::Builder()
    ->WithUri(TEXT("ws://localhost:3000"))
    ->WithDatabaseName(TEXT("my-database"))
    ->OnConnect(OnConnectDelegate)
    ->OnConnectError(OnConnectErrorDelegate)
    ->OnDisconnect(OnDisconnectDelegate)
    ->Build();
```

## Runtime rules

- The Unreal SDK processes messages automatically through WebSocket callbacks and `UDbConnection` ticking; do not add a manual polling loop unless the project already has one.
- Use generated `Conn->Db` table objects for subscribed cache reads and `Conn->Reducers` for reducer calls.
- Bind `OnInsert`, `OnDelete`, `OnUpdate`, and reducer delegates before subscribing when startup events matter.
- `SubscribeToAllTables()` is useful for examples; production code should subscribe to specific SQL/query sets.
- Use generated Unreal class and delegate names from the project. Do not copy sample `UUserTable` or `FUserType` identifiers unless they exist locally.
- Keep plugin setup, generated code, and gameplay classes separate unless the existing project layout combines them.

## Reference map

| Need           | Open                                                         |
| -------------- | ------------------------------------------------------------ |
| Unreal SDK API | [references/clients-unreal.md](references/clients-unreal.md) |

## Guidance

- Keep Unreal connection ticking and callback binding patterns consistent with the reference.
- Use generated Unreal class names from the local project rather than copying sample identifiers blindly.
- Route complete Unreal tutorial work to [spacetimedb-tutorials](../spacetimedb-tutorials/SKILL.md).
