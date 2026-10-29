# 3. Staff self-service: the Me hub

**For:** Lead Technician, Sales Agent (and any staff with a login) · **Hub:** Me (`/me`)

The **Me** hub is your personal corner of the app. Everything here is about you only: your punches, your overtime, your leave, your payslips and your record. Nobody else's data shows here.

| Page | Path | What it is for |
|---|---|---|
| Time clock | `/me/clock` | Clock in and out, see today's punches |
| My payslip | `/me/payslip` | Payslips from locked payroll periods |
| Leave | `/me/leave` | Request vacation, sick, unpaid, SIL and half days |
| My overtime | `/me/overtime` | File overtime and see its status |
| My commission | `/me/commission` | Only if you have commission lines (see [Chapter 4](/chapters/04-sales-agent-guide)) |
| My incentive | `/me/incentive` | Sales agents with a quarterly target |
| My profile | `/me/profile` | Your employee record, documents and finalized scorecards |

::: info Owners
The owner does not clock in, file personal leave or overtime. Opening those pages as owner shows "This page is for staff." The owner's Me hub keeps **My payslip** and **My profile**.
:::

## 3.1 Time clock (`/me/clock`)

1. Open **Me › Time clock**.
2. Take the photo if the shop requires one.
3. Press **Clock in** (or **Clock out**).
4. Check the row under **Today**: time in, time out (or "still in"), shop, and status.

### Off-site punches
The app compares your location with the shop's map pin and allowed radius.
- **Inside the radius:** the punch is saved as normal.
- **Outside the radius:** you see a warning. Type a **Reason** ("A reason is required for an off-site punch") such as "Road test along Roosevelt Ave" or "Picking up bumper from supplier", then punch.

An off-site punch is **Pending** until the owner approves or rejects it in **HR › Attendance**. Pending or rejected off-site time is left out of payroll, so give a clear reason.

::: tip Forgot to clock out?
Tell the owner. They can close the open punch with the real time and a reason. Open punches are listed on the payroll screen and are not paid until closed.
:::

## 3.2 Filing overtime (`/me/overtime`)

Overtime is paid only after it is approved, and never for more hours than you actually punched.

1. Open **Me › My overtime**.
2. Press **Request OT**.
3. Enter the **Date**, **Hours** and a **Reason** (for example "Finished paint booth for promised release").
4. Press **File request**.

The page opens on **My week** (Monday to Sunday) with your punches for the week. Your requests appear under **My overtime** with their **Source**, **Hours** and **Status** (Pending, Approved, Rejected). Time past your shift end can also appear automatically for approval. The owner may approve fewer hours than you claimed and add a note.

## 3.3 Requesting leave (`/me/leave`)

The top of the page shows your balances for the year: **Vacation remaining**, **Sick remaining**, **Unpaid taken** and **SIL remaining**. Pending days stay on the balance until a decision is made.

1. Press **Request leave**.
2. Choose the **Type**: Vacation, Sick, Unpaid, or Service incentive (SIL).
3. Pick the **Start date** and **End date**.
4. For a half day, set **Half day** to **Morning (AM)** or **Afternoon (PM)** (one date only). Otherwise leave it at **Full day**.
5. Add a **Note** if useful, then press **Request**.

Your request is listed under **My requests** with its dates (for example "Nov 10, 2026"), type, days and status, and the balance tiles show it as **Pending**. You can **Cancel** a request that has not been decided. When the owner approves it, the status changes to **approved** and the days come off **Vacation remaining**.

::: warning Open jobs and leave
If you have open assigned jobs, the owner sees them when approving your leave and can move them to another technician. Tell the desk about cars that are due during your leave.
:::

![Request leave dialog with Type, dates and Half day](/screenshots/03-staff-self-service-me-hub/01-request-leave.png)

## 3.4 Viewing payslips (`/me/payslip`)

Payslips appear only after the owner **locks** the payroll period ("No payslips yet. They appear here once payroll is locked.").

1. Open **Me › My payslip**.
2. Pick a **Period** from the list (shows **Gross** and **Net**).
3. Read the breakdown: pay basis and rate, **Regular hours**, **OT hours**, **OT pay**, **Days paid**, premiums and allowances, then deductions (**SSS**, **PhilHealth**, **Pag-IBIG**, **Withholding**, **Other**, loan instalments), **Total deductions** and **Net**.
4. Press **Print** for a paper or PDF copy.

The payslip shows when the period was locked and by whom. Payment itself happens outside the app (cash or bank).

## 3.5 My profile (`/me/profile`)

Your own employee record, read-only.

- **Overview** — identity, role, position, department, hire date, rest day, government numbers (TIN, SSS, PhilHealth, Pag-IBIG), contact and emergency contact. If something is wrong, ask the owner to fix it in **HR › Directory**.
- **Documents** — employment documents the shop has on file for you (contract, job offer, ID, COE request, letters). Press **Download** to get a copy.
- **Leave** — your balances and this year's requests.
- **Scorecards** — your KPI scorecards **once they are finalized**. Draft scorecards stay hidden until the owner presses **Finalise**. Each card shows the period, each KPI score with its rating and comment, and the overall result.

![My profile, Scorecards section with a finalized card](/screenshots/03-staff-self-service-me-hub/02-my-profile-scorecards.png)
