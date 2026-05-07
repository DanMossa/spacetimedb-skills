---
name: spacetimedb-client-c-sharp
description: "Use when writing SpacetimeDB C# or Unity clients, generated C# bindings, connection setup, subscriptions, cache access, reducer invocation, callbacks, or identity handling. Triggers on: C#, CSharp, Unity, C# SDK, generated C# bindings, Unity SDK, C# subscription, C# reducer call."
license: MIT
---

Use this skill for C# and Unity client implementation.

## Core C# patterns

Generate C# bindings and use the generated `DbConnection`, `RemoteTables`, and `RemoteReducers` names from the user's project:

```bash
spacetime generate --lang csharp --out-dir client/module_bindings --module-path spacetimedb
```

```csharp
var conn = DbConnection.Builder()
    .WithUri(new Uri("ws://localhost:3000"))
    .WithDatabaseName("my-database")
    .OnConnect((conn, identity, token) =>
    {
        conn.SubscriptionBuilder().SubscribeToAllTables();
    })
    .OnConnectError((ctx, err) => Log.Error(err.ToString()))
    .OnDisconnect((ctx, err) => Log.Info("Disconnected"))
    .Build();
```

## Runtime rules

- Call `conn.FrameTick()` from the main loop or Unity update path; callbacks and cache updates will not be applied otherwise.
- Do not run `FrameTick()` on a background thread while main-thread code reads `conn.Db`.
- Read subscribed rows through `conn.Db.<Table>.Iter()`, `Count`, and generated unique/index handles.
- Register table events with `OnInsert`, `OnDelete`, and `OnUpdate`; `OnUpdate` requires a primary key.
- Invoke reducers through `conn.Reducers.<ReducerName>(...)` and register generated reducer events when needed.
- Keep Unity lifecycle code in MonoBehaviours or service classes and leave generated bindings unedited.

## Reference map

| Need       | Open                                                           |
| ---------- | -------------------------------------------------------------- |
| C# SDK API | [references/clients-c-sharp.md](references/clients-c-sharp.md) |

## Guidance

- Use the generated C# binding names from the user's project when available.
- Keep Unity lifecycle code separate from generated binding code unless the project already combines them.
- Route full Unity tutorial work to [spacetimedb-tutorials](../spacetimedb-tutorials/SKILL.md).
