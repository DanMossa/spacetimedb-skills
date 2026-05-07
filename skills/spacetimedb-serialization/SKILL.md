---
name: spacetimedb-serialization
description: "Use when working with SpacetimeDB low-level formats and ABI details: BSATN, SATS JSON, AlgebraicValue, AlgebraicType, WebAssembly module ABI, host calls, buffers, reducer scheduling, table mutation, querying, or `bindings.h`. Triggers on: BSATN, SATS, AlgebraicValue, AlgebraicType, wasm ABI, module ABI, host calls."
license: MIT
---

Use this skill for low-level encoding, wire formats, and module ABI work.

## Reference map

| Need                   | Open                                                           |
| ---------------------- | -------------------------------------------------------------- |
| BSATN                  | [references/bsatn.md](references/bsatn.md)                     |
| SATS JSON              | [references/sats-json.md](references/sats-json.md)             |
| WebAssembly module ABI | [references/webassembly-abi.md](references/webassembly-abi.md) |

## Guidance

- Prefer high-level SDK and module APIs unless the user's task is explicitly about serialization, ABI, or custom tooling.
- Keep byte-level examples tied to the reference notation.
- Route normal client/server code back to the relevant SDK, reducer, table, or procedure skill.
