# SpacetimeDB Skills: Full Index

Detailed routing table for the SpacetimeDB skill collection. Each entry lists the skill's full description, trigger keywords, and copied reference files.

## Foundations

### spacetimedb-quickstarts

Start or understand a SpacetimeDB project. Covers installation, login, local development, architecture overview, FAQ, and quickstarts for TypeScript, React, Angular, Vue, Svelte, Next.js, Nuxt, Remix, TanStack, Browser, Node.js, Bun, Deno, Rust, C#, and C++.

**Triggers:** install SpacetimeDB, quickstart, getting started, architecture, state mirroring, FAQ, React, Angular, Vue, Svelte, Next.js, Nuxt, Remix, TanStack, Browser, Node.js, Bun, Deno, Rust, C#, C++.

**References:** `docs.md`, `intro-*.md`, `quickstarts-*.md`.

### spacetimedb-cli

Use the `spacetime` command-line tool. Covers `init`, `build`, `publish`, `generate`, `call`, `sql`, `logs`, `describe`, `dev`, `server`, `start`, login/logout, and standalone `config.toml`.

**Triggers:** spacetime CLI, spacetime init, spacetime build, spacetime publish, spacetime generate, spacetime call, spacetime sql, spacetime logs, spacetime dev, spacetime server, config.toml.

**References:** `cli-reference.md`, `cli-reference-standalone-config.md`.

### spacetimedb-databases

Develop, build, publish, and migrate SpacetimeDB database modules. Covers project setup, local iteration, transactions and atomicity, publishing, automatic and incremental migrations, and the database cheat sheet.

**Triggers:** database module, spacetime publish, build module, migration, automatic migration, incremental migration, transaction, atomicity, cheat sheet, developing module.

**References:** `databases*.md`.

### spacetimedb-upgrade

Migrate from SpacetimeDB 1.0 to 2.0. Covers reducer callbacks, event tables, event type changes, subscriptions, table accessor naming, database-name connections, `sender()` method, update methods, scheduled functions, private codegen, light mode, `CallReducerFlags`, and confirmed reads.

**Triggers:** upgrade, migrate 1.0 to 2.0, breaking changes, reducer callbacks, event tables, event type changes, subscription API, table accessor, confirmed reads, light mode.

**References:** `upgrade.md`.

## Module Schema And Logic

### spacetimedb-tables

Define and optimize module tables. Covers table attributes, column types, access permissions, auto-increment, constraints, default values, event tables, file storage, indexes, schedule tables, and table performance.

**Triggers:** table, column, primary key, unique, index, btree, direct index, access permissions, auto increment, constraint, default value, event table, file storage, schedule table, table performance.

**References:** `tables*.md`.

### spacetimedb-reducers

Write reducers and reducer-adjacent code. Covers reducer definition, transactional execution, table access, inserts, deletes, updates, indexed lookups, reducer isolation, scheduling, lifecycle reducers, reducer context, and error handling.

**Triggers:** reducer, ReducerContext, ctx, sender, client_connected, client_disconnected, init, scheduled reducer, reducer error, table mutation, insert row, delete row, update row.

**References:** `functions.md`, `functions-reducers*.md`.

### spacetimedb-procedures

Write procedures for server-side work that can return values and perform HTTP calls. Covers procedure definition, database access, HTTP requests, calling reducers from procedures, observing return values, and external API calls.

**Triggers:** procedure, procedures, HTTP request, call reducer from procedure, return value, external API, AI API.

**References:** `functions-procedures.md`.

### spacetimedb-views

Define views for derived, queryable data. Covers view definitions, SQL-backed projections, arguments, client usage, and performance considerations.

**Triggers:** view, views, derived data, SQL view, view argument, projected table, client-facing query.

**References:** `functions-views.md`.

### spacetimedb-auth

Implement authentication and authorization. Covers SpacetimeAuth, Auth0, Clerk, auth claims, subject/issuer checks, custom claims, role/user concepts, row-level security, and rejecting client connections.

**Triggers:** auth, authentication, authorization, SpacetimeAuth, Auth0, Clerk, OIDC, auth claims, subject, issuer, role, RLS, row-level security, reject client connection.

**References:** `core-concepts-authentication*.md`, `how-to-rls.md`, `how-to-reject-client-connections.md`.

## Clients

### spacetimedb-clients

Use client SDK concepts across languages. Covers codegen, connection lifecycle, identity, local cache, subscription APIs, subscription semantics, reducer invocation, and update callbacks.

**Triggers:** client SDK, generated bindings, codegen, DbConnection, connection lifecycle, identity, local cache, subscription, subscribe, reducer invocation, update callback.

**References:** `clients.md`, `clients-api.md`, `clients-codegen.md`, `clients-connection.md`, `clients-subscriptions*.md`.

### spacetimedb-client-typescript

Use the TypeScript SDK and framework integrations. Covers generated TypeScript bindings, `DbConnection`, `DbContext`, query builders, subscriptions, cache callbacks, reducer events, React provider/hooks, and Vue/Svelte integration.

**Triggers:** TypeScript, JavaScript, TS SDK, DbConnection, DbContext, query builder, useSpacetimeDB, useTable, React, Vue, Svelte, browser, Node, Bun, Deno, Next.js, Nuxt, Remix, TanStack, Angular.

**References:** `clients-typescript.md`.

### spacetimedb-client-rust

Use the Rust client SDK. Covers generated Rust bindings, connections, subscriptions, cache access, reducer invocation, callbacks, and identity types.

**Triggers:** Rust client, rust SDK, generated Rust bindings, Rust subscription, Rust reducer call, Rust callbacks.

**References:** `clients-rust.md`.

### spacetimedb-client-c-sharp

Use the C# and Unity client SDK. Covers generated C# bindings, connection setup, callbacks, subscriptions, cache access, reducer invocation, and identity types.

**Triggers:** C#, CSharp, Unity, C# SDK, generated C# bindings, C# subscription, Unity SDK, reducer call.

**References:** `clients-c-sharp.md`.

### spacetimedb-client-unreal

Use the Unreal Engine client SDK. Covers Unreal plugin setup, generated bindings, `DbConnection`, ticking the connection, cache access, subscriptions, reducer invocation, and Unreal identity types.

**Triggers:** Unreal, Unreal Engine, UE, Unreal SDK, generated Unreal bindings, tick connection, URemoteTable, USubscriptionBuilder.

**References:** `clients-unreal.md`.

## Operations And Reference

### spacetimedb-deploy

Deploy and operate SpacetimeDB. Covers Maincloud deployment, self-hosting with systemd and Nginx, self-hosted key rotation, logging, log filtering, and PGWire connections.

**Triggers:** deploy, Maincloud, self-host, standalone, systemd, Nginx, key rotation, logging, spacetime logs, PGWire, psql.

**References:** `how-to-deploy-*.md`, `how-to-self-hosted-key-rotation.md`, `how-to-logging.md`, `how-to-pg-wire.md`.

### spacetimedb-http

Use SpacetimeDB HTTP endpoints. Covers authorization headers, identity routes, database routes, reducer calls, SQL over HTTP, schema/metadata routes, logs, and energy endpoints.

**Triggers:** HTTP API, REST, Authorization header, bearer token, /v1/identity, /v1/database, HTTP reducer call, HTTP SQL, database endpoint.

**References:** `http-*.md`.

### spacetimedb-sql

Write SpacetimeDB SQL. Covers subscription SQL, SELECT/FROM/WHERE, DML statements, system variables, data types, literals, identifiers, and SQL performance guidance.

**Triggers:** SQL, SELECT, WHERE, FROM, INSERT, DELETE, UPDATE, SHOW, subscription query, identifier, literal, spacetime sql.

**References:** `reference-sql.md`.

### spacetimedb-serialization

Work with low-level data formats and module ABI details. Covers BSATN values/types, SATS JSON, AlgebraicValue, AlgebraicType, WebAssembly ABI, logging, buffers, scheduling, table mutation, and querying host calls.

**Triggers:** BSATN, SATS, sats-json, AlgebraicValue, AlgebraicType, WebAssembly ABI, wasm ABI, module ABI, host calls, bindings.h.

**References:** `bsatn.md`, `sats-json.md`, `webassembly-abi.md`.

### spacetimedb-tutorials

Follow complete examples. Covers the chat app tutorial, Unity Blackhol.io parts, and Unreal Blackhol.io parts.

**Triggers:** tutorial, chat app, Unity tutorial, Unreal tutorial, Blackhol.io, multiplayer example, game tutorial.

**References:** `tutorials-*.md`.
