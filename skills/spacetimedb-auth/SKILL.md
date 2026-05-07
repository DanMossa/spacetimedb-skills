---
name: spacetimedb-auth
description: "Use when implementing SpacetimeDB authentication or authorization, including SpacetimeAuth, Auth0, Clerk, OIDC, auth claims, subject/issuer checks, custom claims, roles, row-level security, and rejecting client connections. Triggers on: auth, authentication, authorization, SpacetimeAuth, Auth0, Clerk, OIDC, claims, RLS, row-level security."
license: MIT
---

Use this skill for identity, claims, access control, and authorization policy.

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
