---
name: spacetimedb-quickstarts
description: "Use when starting a SpacetimeDB project, installing the CLI, logging in, understanding architecture, or following quickstarts for TypeScript, React, Angular, Vue, Svelte, Next.js, Nuxt, Remix, TanStack, Browser, Node.js, Bun, Deno, Rust, C#, or C++. Triggers on: install SpacetimeDB, quickstart, getting started, architecture, state mirroring, FAQ, new app."
license: MIT
---

Use this skill for first-contact SpacetimeDB work and framework quickstarts.

## Core flow

1. Install the `spacetime` CLI and run `spacetime login` for Maincloud publishing.
2. For local development, start standalone with `spacetime start`; it listens on port `3000` by default and does not support SSL.
3. Create or open a project, build/publish the module, generate client bindings, then connect the client to the database name.
4. Keep server module language, package manager, database name, module path, and generated binding path consistent across all commands.

Use `spacetime dev` for integrated local loops when possible:

```bash
spacetime dev --template basic-ts
```

Use focused skills once the quickstart reaches implementation details:

- Tables and schema: [spacetimedb-tables](../spacetimedb-tables/SKILL.md)
- Reducers and transactions: [spacetimedb-reducers](../spacetimedb-reducers/SKILL.md)
- Client SDK code: the matching language-specific client skill
- Publish and migration behavior: [spacetimedb-databases](../spacetimedb-databases/SKILL.md)

## Reference map

| Need                                        | Open                                     |
| ------------------------------------------- | ---------------------------------------- |
| Install, login, run locally, and next steps | [references/docs.md](references/docs.md) |
| Product model, workflow, and architecture   | `references/intro-*.md`                  |
| Language or framework setup                 | `references/quickstarts-*.md`            |

## Guidance

- Route SDK-specific questions to the matching client skill once the quickstart reaches generated bindings or runtime code.
- Preserve the quickstart's server module language and package manager unless the user asks to switch.
- When giving commands, keep database names, module names, and generated binding paths consistent across CLI and client steps.
