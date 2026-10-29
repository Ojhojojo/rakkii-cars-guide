# 11. HR, payroll, kiosk clock, announcements & documents

**For:** Shop Owner · **Hub:** HR (`/hr`)

| Page | Path | Use |
|---|---|---|
| Directory | `/hr/employee-directory` | Employee records, pay, loans, documents, scorecards, leave, history |
| Attendance | `/hr/attendance` | Punch register, off-site approvals, overtime approvals |
| Leave approvals | `/hr/leave` | Decide leave, set allotments, team balances |
| Clock kiosk | `/hr/clock-kiosk` | Shared tablet clock-in |
| Documents | `/hr/documents` | NTE, NOD, warning letter, quitclaim, BIR 2316 |
| Payroll | `/hr/payroll` | Period register, overrides, 13th month, lock |
| Announcements | `/hr/announcements` | Shop memos on staff dashboards |

## 11.1 Employee Directory (`/hr/employee-directory`)

The subtitle counts active staff (for example "4 active"; it reads "Loading…" while the list loads). The list shows **Name**, **Position**, **Role**, **Status**, **Mobile**, **Hire date**. **Search name or mobile**, tick **Include inactive** to see former staff. The **Setup to finish** strip lists records missing something important (for example no pay rate) with a **Fix** link.

### Add a person
1. **Add person**.
2. **Identity**: **Full name**, **Email** (their sign-in email, cannot be changed later here), **Employee number**, **TIN**, **SSS**.
3. **Tax address and birth date**: **Registered address** (as on BIR Form 2316), **ZIP code**, **Birth date**.
4. **Role & access**: **Role** (Owner, Admin, Technician, Sales — only the owner changes roles), **Home shop**, and the permission switches **Can canvass & pay suppliers**, **Can open LOA PDF**, **Can see LOA pesos / job margin**, **Must clock** (on for technicians, off for sales; the owner does not clock).
5. **Employment**: **Position**, **Department**, **Rest day**, **Hire date** (required), **PhilHealth**, **Pag-IBIG**, and later **Separation date** / **Separation reason**.
6. **Contact** and **Emergency contact**.
7. **Pay rate**: **Pay basis** — **Hourly**, **Daily** (time-rated, paid from punches) or **Monthly** (fixed salary, less unpaid leave) — the rate, **OT after hours** and **OT multiplier**.
8. **Add person**. An invite goes to their email ("Waiting for first login" until they sign in).

### The employee record (`/hr/employee-directory/:id`)
- **Overview** — identity, role and access, employment, contact.
- **Pay** — **Current pay rate** (**Change rate**; rates are dated so a raise starts on its own date), **Rate history**, **Allowances** (COLA, rice, transport… with amount, per period or day, taxable, effective dates).
- **Loans / Cash advance** — **Add loan** with kind, **Principal**, **Per period** instalment and **Start period**. Instalments come off each payroll run; **Payments** shows history; **Cancel** with a reason.
- **Documents** — **Add document** (Contract, Job offer, Government / Valid ID, COE request note, Other) and **Download**.
- **Scorecards** — KPI scorecards: **New scorecard** (Period, Year) → **Create draft** → score each KPI 1–5 with a comment → **Save draft** → **Finalise**. Hints (backjobs, punch days, NTE/NOD count, quota %) are context only. Finalized cards become visible to the employee; **Reopen** to change.
- **Leave** — balances and requests.
- **History** — every change to the record: field, old → new, who, when (audit trail).

**More actions:** **Issue letter** (Offer of employment, Certificate of employment, NTE, NOD, Warning letter, Quitclaim), **Move open jobs to…**, **Deactivate** / **Reactivate**. Deactivating someone with open jobs asks you to move them first (**Move and deactivate**) and cancels their pending leave.

**Final pay:** set the **Separation date**, then in **Payroll** use the row menu **Final pay** for an estimate: last wages, pro-rated 13th month and unused SIL (SIL needs one year of service).

## 11.2 Clock kiosk (`/hr/clock-kiosk`)

1. On the shop tablet, sign in as owner and open **HR › Clock kiosk**.
2. The **Desk kiosk** lists everyone set to **Must clock**.
3. Staff tap their own name: "Clocked out — tap to clock in" / "Clocked in — tap to clock out".
4. The kiosk asks to confirm ("Clock in Int QA Tech? … will be clocked in for today (Oct 29, 2026).") and then shows "Clocked in." The punch appears at once in **HR › Attendance** and on that person's **Me › Time clock**.

![Clock kiosk with one technician clocked in](/screenshots/11-hr-payroll-kiosk-announcements-documents/02-clock-kiosk.png)

The kiosk does not check location. Phone clock-ins (Me › Time clock) do. Clock-in rules (map pin, allowed radius, photo, off-site punch with approval) are in **Admin › Shop settings › Staff & time**.

## 11.3 Attendance: off-site punches and overtime (`/hr/attendance`)

The page opens on **This week** (Monday to Sunday, the same week Payroll uses). Use the arrows to move a week, **This week** to come back, or **Custom range**.

### Register
Every punch: **Name**, **Branch**, **In** (with **In photo**), **Out** (with **Out photo**), **Hours**, **Status**. Filter **All / Pending / Approved / Rejected** and by **Staff**. **Download CSV** from the menu.

- **Off-site punches** show the staff reason and are **Pending**. Press **Approve** or **Reject** (optional note). Only approved off-site time is paid.
- **Punch for…** — enter a punch for someone (Manila times; leave clock-out empty to keep the shift open).
- **Close** an open punch with the real **Clock out** time and a **Reason**.

### OT to approve
Overtime requests and time past shift end. Each row: **Name**, **Date**, **Source**, **Hours**, **Status**.
1. Press **Approve** and set **Hours to approve** (can be fewer than claimed) and a note, or **Reject**.
2. Approved OT flows into payroll at the OT multiplier. Pay never exceeds punched hours.

Whether admins may also approve OT is a payroll setting (**Admins can approve OT**).

## 11.4 Leave approvals (`/hr/leave`)

Top tiles: **Vacation remaining**, **Sick remaining**, **Unpaid taken**, **SIL remaining**.

### Decide a request
1. Under **Needs a decision**, review staff, dates (half days show AM/PM), type, days and note.
2. Press **Approve**. If the person has open jobs, the **Approve leave** dialog says how many ("Int QA Tech has 3 open job(s). Move any of them, or keep them as they are.") and lists each job (plate, reference, who else is on it). For each choose **Reassign to…** a colleague or leave it as it is. Then **Approve leave** (or **Not yet**). Released and closed jobs are not listed.
3. Or press **Reject**. A decided request can still be cancelled with a reason.

### Set allotments
Menu **Set days** → **Set allotment**: **Person**, **Year**, **Type** (Vacation, Sick, Service incentive (SIL)), **Days** → **Save allotment**. **Team balances** shows days left / allotted for everyone (Unpaid shows days taken).

![Leave approvals with Needs a decision, Team balances and History](/screenshots/11-hr-payroll-kiosk-announcements-documents/03-leave-approvals.png)

**Add leave** records leave on someone's behalf (for example a phoned-in sick day).

## 11.5 Payroll (`/hr/payroll`)

Payroll is computed from closed punches and dated pay rates. Payout happens outside the app.

### Run a period
1. Choose the period. It opens on **This week** (Monday to Sunday, like Attendance); use **Custom range** for a semi-monthly or monthly run. The register previews each person: **Basis**, **Rate**, **Regular hours**, **OT hours**, **OT pay**, **Days paid**, **Holiday pay**, **Rest day**, **Night diff (NSD)**, **Premium pay**, **COLA / allowances**, **Loans / CA**, **Amount**, **Deductions**, **Net**.
2. Read the warnings: open clock-ins (not paid until closed — **Review in Attendance**), pending OT, unpaid bonuses, staff without a pay rate.
3. Statutory deductions: choose **Semi-monthly (½)** or **Full month**, press **Suggest** (per row) or **Suggest all** for SSS, PhilHealth, Pag-IBIG and WHT, check them, edit **Other**, then **Save** / **Save all**.
4. Use the row menu for adjustments — each needs a **Reason** and is logged:
   - **Edit premium**, **Edit allowances**, **Edit loan instalment**, **Rate**.
   - **Day pay override** — pick the **Work date** and **Mode**: **Full day**, **Half day**, **None** or **Custom amount** (with **Custom amount (PHP)**). A **Reason** is required. It is allowed only while the period is **unlocked**, is owner/admin only, and is written to the HR change log. **Clear override** restores the calculated pay.
5. **Holidays & premiums**: add regular/special holidays (**Copy last year**), and set holiday, rest day, night-diff and OT premium percents, shift end, OT grace and monthly day divisor.

### Lock and pay
1. Choose **Shop to lock** and press **Lock period**. Deductions freeze ("Post any correction as an adjustment in the next period.").
2. **Print payslips** or open **Payslip** per row and **Issue payslip**. Staff then see it in **Me › My payslip**.
3. **Export CSV** for the bank or bookkeeper.
4. A locked period never changes; the owner can only **Void run**.

### 13th-month calculator
Pick the **Calendar year** and **Run**. Each row shows **Basic auto**, an optional **Override** of basic earned, **Basic used** and **13th month** (basic earned ÷ 12). **Save override**, **Export CSV**, **Print summary**. It is an estimate for the owner to verify, not a BIR filing.

![Payroll register with Lock period and the Day pay override dialog](/screenshots/11-hr-payroll-kiosk-announcements-documents/01-payroll-register.png)

## 11.6 Announcements (`/hr/announcements`)

1. **New announcement**: **Title**, **Body**, **Start date**, **End date**, **Active**.
2. **Post**.

Active announcements inside their dates show on the Dashboard for sales and on My jobs for technicians. **Edit** or **Remove** any time.

## 11.7 Documents Hub (`/hr/documents`)

| Template | Status | What it produces |
|---|---|---|
| **Notice to explain** (NTE) | Available | Incident, rule cited (defaults to Article 297), response window, hearing date and venue, signature blanks |
| **Notice of decision** (NOD) | Available | Outcome: **Warning**, **Suspension** (days) or **Termination**, effective date, decision summary |
| **Warning letter** | Available | **Verbal warning documented**, **First written warning** or **Final written warning**, incident, rule violated, corrective action, consequence, related NTE |
| **Quitclaim and release** | Available | Separation acknowledgment with **Separation date** and a typed **Final pay (PHP)** |
| **BIR Form 2316** | Available | Data sheet for one employee and year from **locked** payroll runs |
| BIR Form 2307 | Coming soon | — |

**Generate a document**
1. Press **Generate** on the template.
2. Pick the **Staff**; worker name, position, IDs and shop letterhead fill in.
3. Complete the template fields and check the preview.
4. **Save to employment docs** (files it on the person's **Documents** tab), **Download PDF** or **Print**.

**BIR 2316:** choose **Employee** and **Year**. The sheet lists the locked runs used and names anything missing (TIN, address, ZIP, birth date). Enter the amounts HR keeps (13th month and other benefits, de minimis, other non-taxable, previous employer amounts), then **Download PDF** or **Print**. It is a data sheet to copy into the official form or eBIRForms; it does not file anything.

**Employment papers:** the **Offer of employment** and **Certificate of employment** are issued from the person's record in **Directory** (**Issue letter**), not from this hub. Together with the contract and ID uploads they make up the employee's employment file. A single bundled "employment pack" is not a separate template in this version.
