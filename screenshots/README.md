# Screenshots

## v2 (current pages)

`v2/` holds the screenshots used by the Start here, role and desk pages. They were captured on Nov 14, 2026 from a **local** run of `Ojhojojo/rakkii-cars` (`develop` @ `3fc38df`), with the seeded **Demo / Showcase** data and made-up practice records (customer "Maria Santos (practice)", plate `GDE 101`; inquiry "Juan Cruz (practice)", plate `PRC 202`). Light mode. Desk pages are 1440 × 900; technician pages are phone size (390 × 844 at 2×).

File name prefixes:

| Prefix | Area |
|---|---|
| `a` | Desk job flow and navigation |
| `b` | Technician (phone) |
| `c` | Sales and Me hub |
| `d` | Owner hubs: board, finance, HR, admin |

### Retaking them

1. Start the local stack (`scripts/dev-start.sh` in the app repo). On a fresh local database, set `EnableDemoBranch=true` so the local seed can add the test staff.
2. Sign in with **Quick sign-in** (local PIN from `dev-start.sh`).
3. Use only seeded demo data or made-up practice data. **Never** real customer names, plates, phone numbers or amounts.
4. Keep the same file name so the pages pick it up, then run `npm run docs:build`.

## Older folders (reference pages)

The numbered folders (`06-…` to `13-…`) are older captures used by the Reference pages. They may show an older layout; the pages say so.
