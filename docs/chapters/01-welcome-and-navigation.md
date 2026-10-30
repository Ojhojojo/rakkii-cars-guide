# 1. Welcome & navigation

Rakkii Ops is the staff app for Rakkii Cars. It holds every job from first inquiry to release and close, with the money, people and paperwork attached. Customers never sign in here. They use the **Customer Portal** (pay link and `/account`).

| Environment | Staff (Ops App) | Customers (Customer Portal) |
|---|---|---|
| Integration (practice) | `https://rakkii-ops-int.web.app` | `https://rakkii-web-int.web.app` |

::: tip How this guide is written
The look of the app is still being polished. The workflows, page names, tab names, statuses and required fields in this guide do not change with that polish. Follow the **names**, not colours or positions on the screen.
:::

## 1.1 Who this guide is for

Every login has exactly one role. The role decides which hubs you see and which buttons work.

| Role (app label) | Role key | Hubs | What you do | Read |
|---|---|---|---|---|
| **Shop Owner** | `owner` | Workshop, Sales, Finance, HR, Admin, Me | Runs the whole shop: jobs, money, P&L, payroll, settings, staff permissions, release overrides | Ch. 1, 5–13 |
| **Lead Technician** | `technician` | Workshop, Me | Works assigned jobs: bay checklist, QC photos, holds, surrendered parts, canvass/parts buy when allowed | Ch. 1–3 |
| **Sales Agent** | `sales` | Sales, Me | Brings in customers: pipeline inquiries, follow-ups, monitoring, commission and incentive | Ch. 1, 3, 4 |
| **Admin / Service Advisor** | `admin` | To be decided — Waiting for confirmation. | To be decided — Waiting for confirmation. | — |

::: info Admin in v1
This version of the guide does not include a dedicated Admin guide. Where an owner step says "owner or admin", the app also allows the admin role, but the Admin role's day-to-day scope is **To be decided — Waiting for confirmation.**
:::

## 1.2 Signing in

1. Open the Ops App in a browser (phone, tablet or desk computer).
2. On **Rakkii Ops sign in**, enter your **Email** and **Password**, then press **Sign in**.
3. You land on your role's home page:
   - Owner → **Workshop › Dashboard** (`/workshop`)
   - Lead Technician → **Workshop › My jobs** (`/workshop`)
   - Sales Agent → **Sales › My pipeline** (`/sales/pipeline`)

On the integration site only, a **Quick sign-in** box lists test accounts. Pick one, type the **PIN** you were given, and press **Sign in**. Live shops do not show this box.

::: warning If you see "Access needed" or "no role yet"
Your account exists but has no role, or the page is outside your role. Ask the Shop Owner to check your role in **Admin › Staff and pay** (Chapter 13). The page links you back to your own home.
:::

![Rakkii Ops sign-in page (Email, Password, Sign in)](/screenshots/01-welcome-and-navigation/01-sign-in.png)

## 1.3 The six hubs

Everything is grouped into hubs. Use the **hub switcher** (the "Switch module" menu in the top bar) to move between them. The app remembers the last hub you used. Each hub has its own side menu.

| Hub | Path | What lives there | Who sees it |
|---|---|---|---|
| **Workshop** | `/workshop` | Dashboard / My jobs, Shop board, New job, Calendar, Job history, Backjobs, Contractor jobs, Customers, Parts & Inventory, Insurers, Forms | Owner (all), Technician (My jobs, Calendar, Job history, Forms) |
| **Sales** | `/sales` | Pipeline, Commission, Monitoring, Incentives, Insurance | Owner, Sales |
| **Finance** | `/finance` | Reports, Cash, Accounts, Who owes us, Blanket POs, Payments, Payables, Expenses, Agent fees, Job P&L, Month close, Export | Owner |
| **HR** | `/hr` | Directory, Attendance, Leave approvals, Clock kiosk, Documents, Payroll, Announcements | Owner |
| **Admin** | `/admin` | Shop settings, Staff and pay | Owner only |
| **Me** | `/me` | Time clock, My payslip, Leave, My overtime, My commission, My incentive, My profile | Everyone (content depends on role) |

### Workshop pins
When the Workshop hub is open, the owner also gets three pinned shortcuts: **Dashboard**, **Shop board** and **New job**. A technician gets **My jobs**.

### What each role's menu looks like

**Shop Owner** — all six hubs. In **Me**, the owner sees **My payslip** and **My profile** (plus **My commission** / **My incentive** only when they apply). Owners do not clock in or file personal leave; those pages say so.

**Lead Technician** — **Workshop** (My jobs, Calendar, Job history, Forms) and **Me** (Time clock, My payslip, Leave, My overtime, My profile; My commission only if you have commission lines).

**Sales Agent** — **Sales** (My pipeline, My commission, Monitoring, Insurance) and **Me** (Time clock, My payslip, Leave, My overtime, My incentive, My profile).

![hub switcher open, showing Workshop, Sales, Finance, HR, Admin, Me](/screenshots/01-welcome-and-navigation/02-hub-switcher.png)

## 1.4 Owner: switching the active branch

Rakkii runs one live shop today (Roosevelt Main), but the app is ready for more. A head-office (HQ) owner can work in any shop they own. A franchise owner pinned to one shop does not get the switcher.

**From the top bar**
1. Press the shop name in the top bar (**Switch shop branch**). It appears only when you own more than one shop.
2. Choose the shop. Every hub now shows that shop's jobs, money and staff.

**From Shop settings (`/admin/settings`)**
1. Go to **Admin › Shop settings**.
2. Open the **Company** area, section **Shops**.
3. On the shop row, press **Switch to this shop**. The row you are working in is marked **Current**.

The settings URL keeps your place: `/admin/settings?area=shop&section=getting-paid&shop=<shop-code>`.

::: warning Check the shop before you record money
Payments, expenses and payroll are saved to the **active shop**. Confirm the shop name in the top bar before recording anything.
:::

![Shop settings with the Shop picker (the top-bar shop switcher appears only when you own more than one shop)](/screenshots/01-welcome-and-navigation/03-branch-switcher.png)

## 1.5 Dark mode

1. Open your account menu (your name in the top bar).
2. Press **Dark mode** (or **Light mode** to switch back).

The choice is saved on that device and also applies to the sign-in page.

## 1.6 Finding things fast

- **Top bar search** (**Plate, job or customer**, press <kbd>/</kbd> to jump to it) finds any job by plate, job reference or customer, open or closed, from any hub.
- **Job history** (`/workshop/jobs`) searches by plate, customer or reference, with **Created from / Created to** dates and a **Status** filter: **All**, **Released · not done** or **Done**.
  - **Released · not done** (amber) means the car is out but something is still open, for example an insurer payment. **Done** means nothing is left.
  - The **Progress** column shows how far each job is ("6 of 7"). On a phone each job shows as a card.

![Job history with Done and Released · not done labels and the Progress column](/screenshots/01-welcome-and-navigation/04-job-history.png)

- Every job opens in the **job workspace** (`/workshop/jobs/:id`) with tabs: **Overview, Quote, Canvass, Parts buy, Work, Insurance, Pay, Files, Release**. Some tabs only show when they apply (for example **Insurance** only on insurance jobs; **Canvass** and **Parts buy** only when the job needs them).
- Each job shows a **status banner**, a **steps bar** and a blue **next-step banner** that says what to do now ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#progress)).
- Prints open the print dialog on a computer. On a phone they save as a PDF named after the paper and plate ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#printing)).
- Actions that are hard to undo (create a quote, post an invoice, record a payment, release a car, approve leave) ask you to confirm first.
- Old bookmarks such as `/board`, `/clock` or `/ops/jobs` still open: they redirect to the hub path.

## 1.7 Words you will see

| Term | Meaning |
|---|---|
| **Job** | One car visit. It carries the customer, vehicle, quote, work, files, invoices, payments and release. |
| **Nature** | Private, Insurance, Corporate, Government or Bidding. Decides down payment and paperwork gates. |
| **Job type** | Retail, Insurance or Fleet. |
| **LOA** | Letter of Authorization from an insurer, with an authorized amount. |
| **Who pays** | On each work line: Customer or Insurer. Drives split billing. |
| **Work billed / Cash in** | Accrual (what was invoiced) vs money actually received. The app always shows both. |
| **Owner override** | A release or gate bypass the owner records with a written reason. Always logged. |
| **Manila time** | All dates and cut-offs in the app use Asia/Manila. Dates read like "Oct 29, 2026". |
| **Target date** | When the repair should be done (it used to be called "Promised date"). |
| **Appointment** | When the car is booked to come in. Separate from the target date. |
| **Released / Done** | Released: the car has left the shop. Done: nothing is left on the job (it used to be called Closed). |
| **This week** | Monday to Sunday, on every page with a week (Attendance, Payroll, My week). |
| **Margin on cost** | (sell − cost) ÷ cost. A ₱300 cost sold at ₱800 is 167% on cost. |
