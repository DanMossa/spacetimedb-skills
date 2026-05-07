---
name: spacetimedb-tutorials
description: "Use when following, adapting, or debugging complete SpacetimeDB tutorials, including the chat app tutorial, Unity Blackhol.io tutorial, Unreal Blackhol.io tutorial, multiplayer examples, and game tutorial code. Triggers on: tutorial, chat app, Unity tutorial, Unreal tutorial, Blackhol.io, multiplayer example, game tutorial."
license: MIT
---

Use this skill for full walkthroughs and larger example applications.

## Core tutorial workflow

- Load only the tutorial and part needed for the current step. Unity and Unreal parts are long and depend on prior state.
- Preserve part ordering: setup, server module, bindings/connection, gameplay/client behavior, deployment.
- Keep the tutorial's database name, module path, generated binding path, and package/tooling choices consistent unless the user asks to adapt them.
- When adapting a tutorial into an existing app, map tutorial concepts to local project names before copying code.
- Route narrow API questions to the matching focused skill rather than loading a full tutorial part.

## Tutorial map

- Chat app: full server and client walkthrough with tables, reducers, publish, SQL, and generated clients.
- Unity Blackhol.io: Part 1 setup, Part 2 server and connection, Part 3 spawning/login/arena/client objects, Part 4 movement/collisions/Maincloud.
- Unreal Blackhol.io: Part 1 setup, Part 2 server and connection, Part 3 spawning/Blueprints/player controller, Part 4 movement/collisions/Maincloud.

## Reference map

| Need            | Open                                                                 |
| --------------- | -------------------------------------------------------------------- |
| Chat app        | [references/tutorials-chat-app.md](references/tutorials-chat-app.md) |
| Unity tutorial  | `references/tutorials-unity*.md`                                     |
| Unreal tutorial | `references/tutorials-unreal*.md`                                    |

## Guidance

- Keep tutorial part ordering intact; later files assume project state from earlier parts.
- Route SDK-specific snippets to the C# or Unreal client skills when the question is localized to client API use.
- Route server module schema and reducer edits to table and reducer skills.
