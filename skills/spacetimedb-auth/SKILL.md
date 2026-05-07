---
name: spacetimedb-auth
description: "Use when implementing SpacetimeDB authentication or authorization, including SpacetimeAuth, Auth0, Clerk, OIDC, auth claims, subject/issuer checks, custom claims, roles, row-level security, and rejecting client connections. Triggers on: auth, authentication, authorization, SpacetimeAuth, Auth0, Clerk, OIDC, claims, RLS, row-level security."
license: MIT
---

Use this skill for identity, claims, access control, and authorization policy.

## Core auth patterns

- SpacetimeDB derives an `Identity` from the JWT `sub` and `iss` claims. Use identity for stable ownership; use JWT claims for provider, audience, role, and policy decisions.
- Authenticated modules should reject unauthenticated clients in `client_connected`/`clientConnected` before they can subscribe or call reducers.
- Always validate issuer and audience before trusting subject or custom claims. Claim names and expected values are deployment-specific.
- Treat `senderAuth`/`SenderAuth`/`sender_auth()` as the source of JWT details, not the client-provided identity alone.
- Use role or custom-claim helpers inside reducers for authorization checks; return sender-facing errors for expected denials.
- RLS is experimental. Its rules are SQL filters, use `:sender` for the caller identity, return full rows from one table, and multiple rules for a table are ORed together. Module owners bypass RLS.

TypeScript connection rejection pattern:

```typescript
import { SenderError } from "spacetimedb/server";

const OIDC_CLIENT_IDS = ["client_..."];

export const onConnect = spacetimedb.clientConnected((ctx) => {
  const jwt = ctx.senderAuth.jwt;
  if (jwt == null) throw new SenderError("Unauthorized: JWT is required");
  if (jwt.issuer !== "https://auth.spacetimedb.com/oidc") {
    throw new SenderError("Unauthorized: invalid issuer");
  }
  if (!jwt.audience.some((aud) => OIDC_CLIENT_IDS.includes(aud))) {
    throw new SenderError("Unauthorized: invalid audience");
  }
});
```

## Reference map

| Need                                        | Open                                                                                                                                                                                                       |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Auth overview                               | [references/core-concepts-authentication.md](references/core-concepts-authentication.md)                                                                                                                   |
| SpacetimeAuth                               | `references/core-concepts-authentication-spacetimeauth*.md`                                                                                                                                                |
| Third-party providers                       | [references/core-concepts-authentication-auth0.md](references/core-concepts-authentication-auth0.md), [references/core-concepts-authentication-clerk.md](references/core-concepts-authentication-clerk.md) |
| Claims in module code                       | [references/core-concepts-authentication-usage.md](references/core-concepts-authentication-usage.md)                                                                                                       |
| Row-level security and connection rejection | [references/how-to-rls.md](references/how-to-rls.md), [references/how-to-reject-client-connections.md](references/how-to-reject-client-connections.md)                                                     |

## Guidance

- Keep authentication identity checks separate from table visibility and row-level authorization choices.
- Treat claim names, issuers, and audiences as deployment-specific; do not hard-code sample values unless they are already in the user's project.
- Route HTTP token mechanics to [spacetimedb-http](../spacetimedb-http/SKILL.md) when the task is endpoint-level.
