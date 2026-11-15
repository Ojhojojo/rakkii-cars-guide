# Features by hub & menu

A complete feature map of **Rakkii Ops**, organized in the exact order of the app's six hubs and side menus. Use this page to find which hub and screen handles a task, who sees it, and which guide covers the steps.

::: info Admin / Service Advisor in v2
This guide covers the **Shop Owner**, **Lead Technician**, and **Sales Agent** roles. **Admin / Service Advisor** is **To be decided — Waiting for confirmation.** Where the app supports `admin` on desk screens, its day-to-day scope is not yet finalized in this guide.
:::

## Role access at a glance

| Role | Role key | Hubs in menu | Home screen | Read |
|---|---|---|---|---|
| **Shop Owner** | `owner` | **Workshop**, **Sales**, **Finance**, **HR**, **Admin**, **Me** | **Workshop › Dashboard** (`/workshop`) | [Start here](/start/getting-started), [Owner / desk](/desk/) |
| **Lead Technician** | `technician` | **Workshop**, **Me** | **Workshop › My jobs** (`/workshop`) | [Start here](/start/getting-started), [Technician](/technician/), [Me hub](/me/) |
| **Sales Agent** | `sales` | **Sales**, **Me** | **Sales › My pipeline** (`/sales/pipeline`) | [Start here](/start/getting-started), [Sales agent](/sales/), [Me hub](/me/) |
| **Admin / Service Advisor** | `admin` | To be decided — Waiting for confirmation. | To be decided — Waiting for confirmation. | — |

## Top bar & global tools

Available across hubs from the app header ([Getting started](/start/getting-started)):

- **Switch shop branch** — Appears in the top bar for head-office owners with more than one shop. Switches all hubs, jobs, money, and staff views to the selected branch.
- **Switch module (Hub switcher)** — Moves between the hubs your role can open (**Workshop**, **Sales**, **Finance**, **HR**, **Admin**, **Me**). Shows the remaining **Shop setup** count next to **Admin**.
- **Quick search** (<kbd>/</kbd>, placeholder **Plate, job or customer**) — Searches open and finished jobs by plate, job reference, or customer name from anywhere in the app (**Shop Owner**, **Lead Technician**).
- **Customer activity bell** — Shows an unseen count badge for online customer actions and opens **Workshop › Customer activity** (**Shop Owner**).
- **Account menu** — Shows your name, role, and avatar/initials, with shortcuts to **My profile** (everyone), **Settings** (**Shop Owner**), **Dark mode** / **Light mode**, and **Sign out**.

---

## 1. Workshop hub (`/workshop`)

Daily repair operations: active jobs, appointments, customers, vehicles, parts, insurers, and paper forms.

### Pinned shortcuts

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Dashboard** | `/workshop` | Shop Owner | Daily shop overview: metrics (**Cars on the floor**, **Jobs open**, **Ready for pickup**, **On hold**, **Cash in today**, **Overdue invoices**), **Announcements**, **Due today**, **New web & Messenger inquiries**, **Today's appointments**, **Cars in the shop** mix, **Ready, but customer still owes**, and **Priority jobs**. | [Your day at the desk](/desk/) |
| **My jobs** | `/workshop` | Lead Technician | Technician home screen: **Clock in** / **Clock out** shortcut, **Announcements**, **Priority jobs**, **Assigned to me**, **Done, waiting for pickup**, **Other cars on the floor**, and **Today's appointments**. | [Your day in the bay](/technician/) |
| **Shop board** | `/workshop/board` | Shop Owner | Visual **Columns** (five-lane kanban) and **List** views of active jobs, filterable by type (**Retail**, **Insurance**, **Fleet**), lane, target date, stuck status, work category, or search, with **What's left** popups. | [Board, calendar & search](/desk/board-and-calendar) |
| **New job** | `/workshop/jobs/new` | Shop Owner | Opens a new repair job from **Customer**, **Vehicle**, **Work**, optional **How the job came in** (channel, VAT/Non-VAT, sales advisor, referral), and **Insurance** details. | [1. Open a job](/desk/job/01-open-a-job) |

### Workshop menu

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Customer activity** | `/workshop/activity` | Shop Owner | Feed of online Customer Portal actions (bookings, estimate decisions, uploaded payment proofs) with **Unseen** / **All** filters and **Mark seen** / **Mark all seen**. | [Board, calendar & search](/desk/board-and-calendar) |
| **Calendar** | `/workshop/calendar` | Shop Owner, Lead Technician | Week-by-week schedule of appointments and target dates, unscheduled jobs list, and **Book this day** shortcut to **New job**. | [Board, calendar & search](/desk/board-and-calendar) |
| **Job history** | `/workshop/jobs` | Shop Owner, Lead Technician | Searchable archive of jobs filtered by plate/reference, date range, job type, and status (**All finished**, **Released · not done**, **Done**) with a **Progress** column. | [Getting started](/start/getting-started) |
| **Backjobs** | `/workshop/backjobs` | Shop Owner | Monthly monitor of rework/backjob incidents, shop-absorbed costs, breakdown by responsible staff, and open backjobs. | [Running the shop](/desk/running-the-shop), [Ref 10](/reference/10-workshop-operations-board-calendar-backjobs-contractors) |
| **Contractor jobs** | `/workshop/contractors` | Shop Owner | Tracks outsourced/subcontracted job lines by status, contractor, overdue/due-today commitments, and remaining balances. | [Running the shop](/desk/running-the-shop), [Ref 10](/reference/10-workshop-operations-board-calendar-backjobs-contractors) |
| **Customers** | `/workshop/customers` | Shop Owner | Customer directory with search, customer creation, and drilldowns to customer detail (`/workshop/customers/:id`) and vehicle detail (`/workshop/vehicles/:id`) service histories. | [Running the shop](/desk/running-the-shop), [Corporate jobs](/desk/corporate-jobs) |
| **Parts & Inventory** | `/workshop/parts` | Shop Owner | **Stock** catalog (on-hand counts, low-stock alerts, stock value, receive/adjust/movements, bulk categories) and **Restock POs** ordering workflow. | [Running the shop](/desk/running-the-shop), [Ref 9](/reference/09-parts-inventory-canvass-restock-payables) |
| **Insurers** | `/workshop/insurers` | Shop Owner | Directory of insurance companies with expected days to pay, payment terms, and contact details. | [Insurance jobs](/desk/insurance-jobs), [Ref 6](/reference/06-lane-2-insurance-claims-and-loa) |
| **Forms** | `/workshop/forms` | Shop Owner, Lead Technician | Printable and fillable forms organized by stage: **Car in** (Undertaking & vehicle intake checklist), **Pick-up / delivery** (VD waiver), and **Car out** (Gate pass, acceptance, Release of claim). | [Your day in the bay](/technician/), [Release the car](/desk/job/07-release) |

### Job workspace (`/workshop/jobs/:id`)

Opening any job shows the header (with **More ▾** for **Put on hold**, **Cancel job**, **No-show**, and car/customer edits), the seven-step **Progress** card (**Created**, **Booked**, **Work done**, **QC passed**, **Released**, **Paid**, **Done**) with a blue **next-step button** ([Getting started](/start/getting-started#job-page)), and up to eight role- and job-gated tabs:

| Tab | Who sees it | What it covers | Guide |
|---|---|---|---|
| **Overview** | Shop Owner, Sales Agent (read-only on own jobs) | **Job**, **Money**, **Release**, **Backjobs**, and collapsible **Status log** cards. | [Getting started](/start/getting-started#job-page) |
| **Canvass** | Shop Owner; Lead Technician (read-only when enabled) | Up to four supplier quotes per part (grade, chosen supplier, RFP status, budget vs. estimate check). | [Ref 9](/reference/09-parts-inventory-canvass-restock-payables) |
| **Parts buy** | Shop Owner; Lead Technician (when enabled) | Job-specific parts purchases, supplier payment terms, and purchase bills. | [Ref 9](/reference/09-parts-inventory-canvass-restock-payables) |
| **Work** | Shop Owner, Lead Technician | **Work lines**, the **Quote** card (no separate Quote tab), **Team** & **Dates**, **Bay checklist**, **QC photos** (4 angles), **Notes**, **Other photo**, and job order printing. | [2. Work & quote](/desk/job/02-work-and-quote), [4. Start work](/desk/job/04-start-work) |
| **Insurance** | Shop Owner (insurance jobs only) | **Claim status**, **What is blocking**, **Letter of authorization**, and **Supplements**. | [Insurance jobs](/desk/insurance-jobs) |
| **Pay** | Shop Owner | **Summary**, **Invoices** (including split Customer/Insurer billing), **Record a payment**, **Payments**, **Nature and PO**, **Down payment**, **Withholding**, and **Commission and agent fee**. | [6. Bill & collect](/desk/job/06-bill-and-collect) |
| **Files** | Shop Owner, Lead Technician | Required document checklist (**Documents**) and uploaded job attachments (**Files**). | [1. Open a job](/desk/job/01-open-a-job) |
| **Release** | Shop Owner | **Can the car leave?** checklist, **Release the car** (plus **Owner override**), **PMS reminder** (3/6/12 months), **Surrendered parts**, **Release rules**, gate pass, acceptance, and Release of claim prints. | [7. Release the car](/desk/job/07-release) |

---

## 2. Sales hub (`/sales`)

Lead tracking, sales quota monitoring, commissions, quarterly incentives, and auto insurance estimates ([Your day in sales](/sales/)).

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Pipeline** / **My pipeline** | `/sales/pipeline` | Shop Owner (**Pipeline**), Sales Agent (**My pipeline**) | Tracks inquiries from first contact to estimate/booking, with follow-up alerts, quote freshness, **Set follow-up**, **Print estimate**, and **Mark lost**. | [Your day in sales](/sales/) |
| **Commission** / **My commission** | `/sales` | Shop Owner (**Commission**), Sales Agent (**My commission**) | Four-step commission funnel (**Accruing → Due → Approved → Paid**), clawback review, **Approve** / **Reject** / **Pay due fees** (**Shop Owner**), and **Export CSV**. | [Your day in sales](/sales/) |
| **Monitoring** | `/sales/monitoring` | Shop Owner, Sales Agent | Monthly quota progress and **Leaderboard** / **My performance**; **Shop Owner** also sees **Sales mix** reconciliation, **Imports & quota history** (Excel import/undo), and inline quota edits. | [Your day in sales](/sales/) |
| **Incentives** | `/sales/incentives` | Shop Owner (in menu); Sales Agent (via **My incentive** in **Me** or **My commission**) | Quarterly unit sales targets and bonus lines; **Shop Owner** can **Set a target**, **Record bonus**, move, or void bonus lines. | [Your day in sales](/sales/) |
| **Insurance** | `/sales/insurance` | Shop Owner, Sales Agent | Auto insurance **Estimate** calculator (`TPL` / `Comprehensive`, value band, add-ons, saved estimate prints) plus **Rates** setup (**Shop Owner** only). | [Your day in sales](/sales/) |

---

## 3. Finance hub (`/finance`)

Cash visibility, collections, supplier bills, expenses, reporting, month-end close, and accounting exports. The side menu is split into **daily** screens and **periodic & setup** screens.

### Daily screens

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Cash** | `/finance/cash` | Shop Owner | Today's cash flow (**In** / **Out** / **Net**), **Open AR**, **Payables due**, daily **Cash in** chart, customer vs. insurer aging, and follow-up lists (**Waiting to be billed**, **Authorized, not started**). | [Running the shop](/desk/running-the-shop), [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |
| **Payments** | `/finance/payments` | Shop Owner | **Payments** log (search, payer/method/date filters, **Export CSV**, **Print**, **Void**) and **Pending proofs** to **Confirm** or **Reject** Customer Portal payment screenshots. | [6. Bill & collect](/desk/job/06-bill-and-collect), [Fix a mistake](/desk/fix-a-mistake) |
| **Who owes us** | `/finance/receivables` | Shop Owner | Open accounts receivable with aging buckets, insurer running days, follow-up logging, and billing transmittals. | [Ref 8](/reference/08-lane-4-billing-chain-receivables-storage-credit-notes) |
| **Payables** | `/finance/payables` | Shop Owner | Supplier **Bills** (**Due soon**, **Overdue**, **Open**, **Paid**) from parts buys and restock POs, **Pay** / **View payments**, and **Per supplier** balances. | [Ref 9](/reference/09-parts-inventory-canvass-restock-payables) |
| **Expenses** | `/finance/expenses` | Shop Owner | Monthly shop expense log by category with VAT split, paid-from account tracking, **Add expense**, **Void**, **Export CSV**, and **Print**. | [Running the shop](/desk/running-the-shop), [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |
| **Accounts** | `/finance/money-accounts` | Shop Owner | Typed wallet balances (Bank, Maya, GCash, Cash on hand), account **Transfer**, **Add account**, **Movements** log, **Adjust**, and balance backfill. | [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |

### Periodic & setup screens

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Reports** | `/finance/reports` | Shop Owner | Period summaries (**Work billed (before VAT)**, **Cash collected**, **Net cash**) broken down **By type & payer**, **Top accounts** (insurers and fleet/corporate), and **Owed**. | [Running the shop](/desk/running-the-shop), [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |
| **Job P&L** | `/finance/pnl` | Shop Owner only | **Monthly shop P&L** (net revenue, waterfall, statement, expenses by category) and **Job gross P&L** (per-job revenue, cost split, and margin), with CSV/print exports. | [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |
| **Blanket POs** | `/finance/blanket-pos` | Shop Owner | Corporate/government blanket purchase orders (**Open** / **History**), authorized vs. consumed meter, and detail view (`/finance/blanket-pos/:id`) for linked jobs, aging, model caps, and PO soft copies. | [Corporate & government jobs](/desk/corporate-jobs), [Ref 7](/reference/07-lane-3-corporate-government-bidding-blanket-pos) |
| **Agent fees** | `/finance/agent-fees` | Shop Owner | Outside/referral agent fee totals by date range with per-agent drilldowns to **Pay** or **Void** fees and flag above-default rates. | [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |
| **Month close** | `/finance/month-close` | Shop Owner only | Locks completed accounting months (**Close month**) and logs any **Reopen** action with a required reason. | [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |
| **Export** | `/finance/export` | Shop Owner | Bookkeeper CSV downloads by date range for **Invoices**, **Payments**, **Credit notes**, and **Open AR**. | [Ref 12](/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export) |

---

## 4. HR hub (`/hr`)

People records, attendance, leave approvals, shared kiosk clock-in, payroll, announcements, and HR letters ([Running the shop](/desk/running-the-shop), [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents)).

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Directory** | `/hr/employee-directory` | Shop Owner | Staff list (**Add person**, search, active/inactive) and employee detail (`/hr/employee-directory/:id`) with **Overview**, **Pay**, **Loans / Cash advance**, **Documents**, **Leave**, **Scorecards**, **History**, and **Issue letter**. | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |
| **Attendance** | `/hr/attendance` | Shop Owner | Weekly attendance register (**Monday–Sunday**), **Punches** with in/out photos, **Close** open punches, **Punch for…**, **OT to approve**, and CSV export. | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |
| **Leave approvals** | `/hr/leave` | Shop Owner | **Needs a decision** queue (**Approve** / **Reject** / **Cancel** with job-reassignment check), **Team balances**, **Add leave**, **Set days** allotments, and leave **History**. | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |
| **Clock kiosk** | `/hr/clock-kiosk` | Shop Owner | Shared desk kiosk where staff tap their name to clock in or out without phone GPS. | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |
| **Documents** | `/hr/documents` | Shop Owner | Generates HR documents and data sheets: **Notice to explain**, **Notice of decision**, **Quitclaim and release**, **Warning letter**, and **BIR Form 2316** (`BIR Form 2307` marked *Coming soon*). | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |
| **Payroll** | `/hr/payroll` | Shop Owner | Period payroll register with warnings (open punches, pending OT, missing rates), **Holidays & premiums**, allowances, loans, statutory deductions, **Lock period**, **Void run**, payslip prints, and CSV export. | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |
| **Announcements** | `/hr/announcements` | Shop Owner | Creates, edits, and removes shop-wide announcements shown on **Workshop › Dashboard** and **My jobs**. | [Ref 11](/reference/11-hr-payroll-kiosk-announcements-documents) |

---

## 5. Admin hub (`/admin`)

Owner-only shop onboarding, configuration, and staff access ([Running the shop](/desk/running-the-shop), [Ref 13](/reference/13-admin-shop-settings-and-staff-permissions)).

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Shop setup** | `/admin/setup` | Shop Owner only | New-shop onboarding checklist (**Before your first car**, **In your first week**) with deep links to settings, **Skip** / **Undo**, and the remaining-count badge on **Admin**. | [Ref 13](/reference/13-admin-shop-settings-and-staff-permissions) |
| **Shop settings** | `/admin/settings` | Shop Owner only | Shop and company configuration organized into two areas (see below). | [Ref 13](/reference/13-admin-shop-settings-and-staff-permissions) |
| **Staff and pay** | `/admin/staff` | Shop Owner only | **Access and pay** table showing each person's role, home shop, permission badges (**Canvass & pay**, **LOA files**, **LOA amounts**, **Time clock**), pay rate, status, **Resend invite**, and **Activate** / **Deactivate**. | [Ref 13](/reference/13-admin-shop-settings-and-staff-permissions) |

### Sections inside **Admin › Shop settings**

- **Shop area** (per-branch): **Getting paid** · **Workshop rules** · **Buying** · **Sales & commission** · **Staff & time** · **Customer site** · **Advanced**
- **Company area** (head-office owners): **Business details** · **Shops** · **Lists** (**Part grades**, **Part categories**, **Work categories**, **Expense categories**, **Checklists**) · **Customer site** (public services & message templates) · **KPI definitions**

---

## 6. Me hub (`/me`)

Personal self-service for every staff member ([Me hub](/me/)). Owners open on **My profile**; other staff open on **Time clock**.

| Menu item | Path | Who sees it | What it does | Guide |
|---|---|---|---|---|
| **Time clock** | `/me/clock` | Lead Technician, Sales Agent | Self clock-in/clock-out with live Manila time, shift photo proof (when required), GPS check/off-site reason, and **Today** punches. (Owners do not clock in.) | [Me hub](/me/) |
| **My payslip** | `/me/payslip` | Lead Technician, Sales Agent (and Shop Owner only if on payroll) | Lists locked payroll periods and opens frozen payslip breakdowns (hours, OT, leave, premiums, allowances, statutory deductions, loans, net pay) for print/PDF. | [Me hub](/me/) |
| **Leave** | `/me/leave` | Lead Technician, Sales Agent | Shows **Vacation**, **Sick**, **Unpaid**, and **SIL** balances, **Request leave**, and **My requests** with **Cancel**. (Owners do not file personal leave.) | [Me hub](/me/) |
| **My overtime** | `/me/overtime` | Lead Technician, Sales Agent | Personal weekly **Punches** register plus **My overtime** claims and **Request OT**. (Owners do not claim overtime.) | [Me hub](/me/) |
| **My commission** | `/me/commission` | Staff with commission lines | Opens your commission view directly inside the **Me** hub. | [Your day in sales](/sales/) |
| **My incentive** | `/me/incentive` | Sales Agent (and Shop Owner if on an active incentive target) | Opens your quarterly unit incentive progress inside the **Me** hub. | [Your day in sales](/sales/) |
| **My profile** | `/me/profile` | Everyone | Personal employee record (identity, employment, pay, leave, scorecards) plus **Add photo** / **Change photo** / **Remove photo** for your avatar. | [Me hub](/me/) |
