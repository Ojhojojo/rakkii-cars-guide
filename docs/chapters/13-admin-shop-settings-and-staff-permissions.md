# 13. Shop settings & staff permissions

**For:** Shop Owner · **Hub:** Admin (`/admin`)

Shop settings decide which gates the app enforces. Change them deliberately: every save is logged, and the rules apply from that moment to every job in the shop.

## 13.1 Finding a setting (`/admin/settings`)

**Admin › Shop settings** is owner-only. It has two areas:
- **Shop** — rules for the shop selected in the shop switcher.
- **Company** — business-wide lists and details (HQ owner only).

Pick a section on the left. Each card shows the current values; press **Edit** on the card, change, **Save**. The page URL remembers where you are (`?area=shop&section=getting-paid&shop=…`), so you can bookmark a section.

## 13.2 Shop area

### Getting paid
| Card | Settings (defaults) |
|---|---|
| **Down payments and holds** | **Private / Corporate / Government / Bidding down payment** % (50%) and for each a **blocks** choice: **Does not block**, **Before work**, **Before release**. **Hold car until the customer pays** (on). **Hold car until the insurer pays** (off). **Finance release before the car arrives** (off) |
| **Payment terms and aging** | **Customer**, **Insurer**, **Corporate**, **Government terms** (days); **Aging band 1/2/3** (30 / 60 / 90 days); **Flag bill not transmitted after** (2 days) |
| **Withholding** | **Insurance**, **Corporate**, **Government withholding** % |
| **GCash, Maya and bank** | Wallet numbers, account names and QR images shown on the customer portal; **Bank accounts** (Bank, Account name, Account number, Code, Particular, Sort, Active) |

### Workshop rules
| Card | Settings (defaults) |
|---|---|
| **Quality check** | **QC photos required** (4), **Insurance needs an LOA** (on), **Depreciation reduces insurer share** (off), **Participation and betterment reduce insurer share** (off) |
| **Paperwork by customer type** | **Corporate needs an approved PO**, **Government needs a PO or blanket PO**, **Bidding needs an award**, **Government needs a BAC resolution** (all off) |
| **Insurance release of claim** | **Release of claim wording** printed on insurance releases |
| **Storage fees** | **Free days after ready** (7), **Daily storage rate** (blank = no storage charge) |
| **Contractors** | **Warn before commitment date** (0 days), **Contractor signature required to complete** (off), **Prefill scope from the job work category** (on) |

### Buying
| Card | Settings (defaults) |
|---|---|
| **Supplier terms** | **Default terms** (COD / Term / From Rakkii stock; COD), **Default term days** (30) |
| **Supplier bills and expenses** | **Due-soon warning** (3 days), **Post supplier payments to expenses** (on), **Expense category** |

### Sales & commission
| Card | Settings (defaults) |
|---|---|
| **Minimum gross margin** | **Minimum gross margin** (30%), **When a job is below the minimum**: **Warn** or **Block** |
| **Sales performer** | **Performer at or above quota** (100%) |
| **Sales figures** | **Leave these statuses out of sales figures** (Cancelled, No-show) |
| **Agent commission** | **Agent commission on**, **Agent rate** (5%), **Agent is a fixed peso amount**, **Due days after release** (30), **Basis**: **Customer paid**, **Approved amount** or **Net of cost** |
| **Commission floor and channels** | **Minimum gross** (₱30,000), **Waive every line when gross is under the floor**, **Margin haircut** (30%), **Tax** %, **No in-house referral commission from** (walk-in, phone, Messenger, web) |
| **Outside agent fee** | **Agent fee enabled**, **Default mode** (None / Percent / Fixed), **Default value**, **Agent fee tax**, **Due when** (Released / Customer paid / Immediately), **Post agent fees to expenses**, **Walk-ins eligible** |

### Staff & time
| Card | Settings |
|---|---|
| **Clock-in** | **Map pin latitude / longitude**, **Allowed radius**, **Photo required on clock-in and clock-out**, **Off-site punch with approval** |
| **Week and minimum wage** | **Week starts on**, **Minimum daily wage** |
| **Holiday and night pay** | Summary only — edited on **HR › Payroll › Holidays & premiums** |
| **KPI scorecards** | **Scorecard period** (Yearly) |

### Customer site
**Shop page** (**Hours**, **Facebook URL**) and **Service reminder emails**.

### Advanced (one-time setup)
**Invoice numbering** (**VAT invoice prefix**, **Non-VAT invoice prefix**), **Payment account mapping** (which money account receives Cash, GCash, Maya, Bank and Card payments), and **Demo branch** (**Enable demo branch** for test bookings and onboarding at `/b/demo`, kept apart from live data).

::: info 📷 Screenshot placeholder
`/screenshots/13-admin-shop-settings-and-staff-permissions/01-shop-settings.png` — Shop settings, Getting paid section with Down payments and holds card.
:::

## 13.3 Company area (HQ owner)

- **Business details** — **Legal name**, **TIN**, **Facebook** (letterheads and documents).
- **Shops** — every branch: **Switch to this shop**, **Edit**, **Turn off**, **Add a shop**, **Add owner for this shop**.
- **Lists** — **Part grades**, **Part categories**, **Work categories**, **Expense categories**, and **Checklist templates** (**Add checklist** with a **Name** and **Lines**; **Archive** old ones). Tip: create a "Release prep" template (customer signed acceptance form, old parts returned, car washed and vacuumed) — see [Chapter 5](/chapters/05-lane-1-private-walk-in-jobs).
- **Customer site** — public services list, message templates and reminders.
- **KPI definitions** — scorecard items: **Name**, **Applies to role**, **Weight %**, **Target**. These feed the scorecards in [Chapter 11](/chapters/11-hr-payroll-kiosk-announcements-documents).

## 13.4 Staff access and pay (`/admin/staff`)

Menu label **Staff and pay**; page title **Access and pay**. People list: **Name**, **Home shop**, **Role**, **Permissions**, **Pay**, **Status** (**Active**, **Waiting for first login**, **Inactive**). Actions: **Edit**, **Deactivate** / **Activate**, **Resend invite**.

### Roles
| Role | Use for | Notes |
|---|---|---|
| **Owner** | Shop owner | Full access; does not clock; the only one who changes roles |
| **Admin** | Office / service advisor | To be decided — Waiting for confirmation |
| **Technician** | Lead technician and bay staff | Sees My jobs, Me hub |
| **Sales** | Sales agents | Sales hub and pipeline only |

### Permission switches
| Switch | What it allows | Typical |
|---|---|---|
| **Can canvass & pay suppliers** | Fill the Canvass tab, record Parts buy payments | Lead technician on; Sales off |
| **Can open LOA PDF** | Open the insurer's LOA document | Admin on; Sales off. Turning this on does **not** reveal pesos |
| **Can see LOA pesos / job margin** | See approved LOA amounts and job margin | Owner/trusted staff only |
| **Must clock** | Must use the time clock to be paid | On for technicians and front desk; off for sales; owner never clocks |

**Setting up a new staff member:** add them in **HR › Directory** (or **Edit** here), choose **Role** and **Home shop**, set the four switches, set the pay rate, then send / **Resend invite**. They sign in with their email ([Chapter 1](/chapters/01-welcome-and-navigation)).

**When someone leaves:** **Deactivate** (from HR Directory to also move open jobs), then generate their final pay and quitclaim ([Chapter 11](/chapters/11-hr-payroll-kiosk-announcements-documents)).
