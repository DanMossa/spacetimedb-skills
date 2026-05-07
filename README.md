# SpacetimeDB Skills

Agent skills for working with SpacetimeDB projects. Skills are discovered by scanning `skills/` for directories that contain `SKILL.md`.

## Skills

| Skill                           | Purpose                                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| `spacetimedb`                   | Root router for the SpacetimeDB skill collection.                                            |
| `spacetimedb-quickstarts`       | Installation, architecture, and framework quickstarts.                                       |
| `spacetimedb-cli`               | `spacetime` CLI commands and standalone config.                                              |
| `spacetimedb-databases`         | Database module development, publishing, transactions, and migrations.                       |
| `spacetimedb-tables`            | Tables, columns, indexes, constraints, event tables, schedule tables, and table performance. |
| `spacetimedb-reducers`          | Reducers, lifecycle reducers, scheduled reducers, context, and error handling.               |
| `spacetimedb-procedures`        | Procedures, return values, HTTP requests, and external API work.                             |
| `spacetimedb-views`             | Views and derived data.                                                                      |
| `spacetimedb-clients`           | Cross-language client SDK concepts, codegen, subscriptions, cache, and connection lifecycle. |
| `spacetimedb-client-typescript` | TypeScript and JavaScript SDK usage and framework integrations.                              |
| `spacetimedb-client-rust`       | Rust client SDK usage.                                                                       |
| `spacetimedb-client-c-sharp`    | C# and Unity client SDK usage.                                                               |
| `spacetimedb-client-unreal`     | Unreal Engine client SDK usage.                                                              |
| `spacetimedb-auth`              | Authentication, authorization, claims, RLS, and connection rejection.                        |
| `spacetimedb-deploy`            | Maincloud, self-hosting, logging, key rotation, and PGWire.                                  |
| `spacetimedb-http`              | HTTP identity and database endpoints.                                                        |
| `spacetimedb-sql`               | SpacetimeDB SQL syntax and query guidance.                                                   |
| `spacetimedb-serialization`     | BSATN, SATS JSON, and WebAssembly ABI details.                                               |
| `spacetimedb-tutorials`         | Chat, Unity, and Unreal tutorial walkthroughs.                                               |
| `spacetimedb-upgrade`           | SpacetimeDB 1.0 to 2.0 migration guidance.                                                   |

## Structure

```text
skills/
  spacetimedb/
    SKILL.md
    references/
      index.md
  spacetimedb-*/
    SKILL.md
    references/
      *.md
```
