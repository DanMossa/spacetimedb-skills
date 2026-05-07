---
name: spacetimedb-serialization
description: "Use when working with SpacetimeDB low-level formats and ABI details: BSATN, SATS JSON, AlgebraicValue, AlgebraicType, WebAssembly module ABI, host calls, buffers, reducer scheduling, table mutation, querying, or `bindings.h`. Triggers on: BSATN, SATS, AlgebraicValue, AlgebraicType, wasm ABI, module ABI, host calls."
license: MIT
---

Use this skill for low-level encoding, wire formats, and module ABI work.

## Core encoding facts

- Prefer generated SDKs and module APIs unless the task is explicitly custom tooling, protocol inspection, ABI work, or serialization debugging.
- BSATN encodes product values as field values in order; field names are not encoded.
- BSATN encodes strings as `u32` byte length followed by UTF-8 bytes.
- BSATN encodes integer and float primitive payloads in little-endian form; floats use their raw IEEE bit representation.
- SATS JSON product values can be arrays by field order or objects by field name.
- SATS JSON encodes integer types as JSON numbers, so large 64-bit, 128-bit, and 256-bit values can lose precision in normal JavaScript number handling.
- Sum values are tagged unions; the tag is the variant index or name depending on the format.

## ABI cautions

- WebAssembly ABI functions use the C ABI on `wasm32` and often communicate through pointer/length pairs.
- Most host functions return `u16`, with `0` meaning success; outputs are written through out pointers.
- Some UTF-8 handling is lossy; invalid bytes may be replaced.
- Buffer functions have explicit ownership rules. Do not reuse consumed host buffers.

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
