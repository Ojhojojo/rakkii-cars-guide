# 4. Sales agent playbook

**For:** Sales Agent (owner sections marked) · **Hubs:** Sales, Me

As a Sales Agent you bring customers to the shop and follow them up until the car comes in. The workshop desk turns your inquiries into jobs and runs the repair. You earn commission on customers you referred, after the shop has been paid.

| Page | Path | Sales Agent sees | Owner sees |
|---|---|---|---|
| My pipeline / Pipeline | `/sales/pipeline` | Your own inquiries (your Sales Agent home page) | Every inquiry, with a Sales person filter |
| My commission / Commission | `/sales` (also `/me/commission`) | Your commission lines and payouts | All lines, payouts, **Pay due fees** |
| Monitoring | `/sales/monitoring` | Your quota, actual and performance | Whole team, mix, imports, quota editing |
| Incentives | `/sales/incentives` (also `/me/incentive`) | Your quarterly target and progress | Set targets, record bonuses |
| Insurance | `/sales/insurance` | Premium calculator and saved estimates | Same, plus the **Rate table** |

## 4.1 Sales home and why you do not create workshop jobs

**Sales** is your home hub. You do **not** use **Workshop › New job**: that screen is for the owner/desk only. Instead:

1. You log the customer as an **inquiry** in your pipeline. The app creates the job at status **New inquiry** on the **Sales** channel, with you as the **Sales advisor**.
2. The desk confirms the booking, quotes, and runs the repair from the job workspace.
3. You can open any of your jobs from the pipeline to **view** it (status, quote total, estimate print). You cannot change status, lines or money.

This keeps one record per car, keeps prices and margins at the desk, and makes sure commission is attributed correctly (see 4.4).

## 4.2 Sales Pipeline (`/sales/pipeline`)

The pipeline lists inquiries that are not yet in the shop: **New inquiry**, **For canvass**, **Booked**, **Quoted** and **Waiting for LOA**. Filter with the status chips (**All open** first) and **Follow-up due (n)**.

### Add an inquiry
1. Press **New inquiry**.
2. Fill **Customer name**, **Mobile**, **Plate** (required) and optionally **Email**, **Year**, **Make**, **Model**.
3. In **What do they want?** describe the request (3–1000 characters), for example "Rear bumper dent, wants insurance claim with Malayan".
4. Set **Next follow-up** (required for Sales; defaults to tomorrow).
5. Press **Add inquiry**.

### Work the list
Each row shows **Job**, **Customer**, **Car**, **Sales advisor**, **Status**, **Age**, **Last moved**, **Next follow-up** and the **Quote** total.
- **Set follow-up** — new date plus an optional **Note** (saved to the job's internal notes).
- **Print estimate** — the customer-facing estimate (sell prices only).
- **Mark lost** — only on New inquiry rows. Give a reason (at least 3 characters). The job is cancelled with that reason.

::: tip Daily habit
Open **Follow-up due** every morning. Overdue follow-ups are highlighted.
:::

![My pipeline with status chips and Follow-up due filter](/screenshots/04-sales-agent-guide/01-pipeline.png)

## 4.3 Sales Monitoring and spreadsheet import (`/sales/monitoring`)

Monitoring replaces the monthly sales monitoring spreadsheets.

### How sales are counted this month
- An **insurance** job counts its **LOA amount** in the month the LOA is dated. Each supplement counts in the month it was approved.
- **Any other job** counts its **approved P.O. amount** on the approved-on date (or the date billed when there is none), or its **approved quote total** on the decision date.
- Imported actuals count for the shop and sales person they were imported for.
- Jobs in an excluded status (Cancelled and No-show by default) do not count.

### What you see
- **My performance** (Sales) or **Leaderboard** (Owner): **Quota**, **Actual**, **%**, **Surplus / deficit**, **QTD S/D**. Press **Why this counts** on a row to see every job or import behind the number.
- **Performers**: reps at or above the performer threshold (100% of quota by default).
- Owner only: **Sales mix by nature**, **Sales mix by insurer**, **Mix reconciliation**, and the company total.

### Owner: quotas and importing the old workbooks
1. Edit each rep's monthly **Quota** and press **Save quotas**. Changes are kept under **Quota changes**.
2. Press **Import Excel** and choose a monthly Sales Monitoring workbook or a per-agent workbook (`.xlsx`).
3. **Preview** the quotas and **Approved LOA/P.O.** actuals, and read the **Warnings** (bad dates, `#REF!` cells, blank amounts).
4. **Map reps** to staff, or **Keep as unmatched text**.
5. Tick **Include quotas**, **Include actuals**, **Skip rows already counted**, then **Import**.
6. Every upload is listed in **Import history**. **Undo** removes that batch.

## 4.4 Commissions and incentives

### The commission rule (shop defaults)
| Rule | Default |
|---|---|
| Who earns | The staff member set as **Referred by (staff)** on the job. The **Sales advisor** never earns. |
| Which job | The customer's **first** referred job at the shop. Repeat visits do not earn again. |
| Which channels | Not Walk-in, Phone, Messenger or Website (the "no-commission" channels). Sales-channel inquiries earn. |
| Rate | **5%** of the basis |
| Basis | **Customer cash collected** (what the customer actually paid) |
| Floor | If the basis is under **PHP 30,000**, the fee is waived ("Below the commission floor, so no sales commission on this job.") |
| Maturity | **30 days after release**, or after the customer finished paying if that is later |

The owner can change the rate, basis (Customer paid, Approved amount, Net of cost), floor, waiting days and channels in **Admin › Shop settings › Sales & commission**.

**Example:** you refer a new customer; the job releases on 1 March with PHP 48,000 customer cash collected. Fee = 5% × 48,000 = **PHP 2,400**, due on 31 March. If the customer paid only PHP 25,000 (insurance covered the rest), the basis is under the PHP 30,000 floor and no fee is created.

::: warning Referral is set by the desk
Only the owner (or admin) sets or changes **Referred by (staff)** on a job, with a reason. You cannot attach yourself. If you referred a customer and do not see a line, tell the owner.
:::

### Commission statuses (`/sales`, `/me/commission`)
**Accruing** → **Due** → **Approved** → **Paid** (or **Void**).
- **Fees** view: Job, Sales, Type, Referred by, Fee, Status, Due date, Payout ref. Use the date range and **Download CSV**.
- **Payouts** view: Date, Amount, Method, Reference, Proof, Jobs.

**Owner:** **Approve** or **Reject** due lines, then **Pay due fees** — choose the Sales person, method (**Bank transfer** or **GCash**) and reference, and **Mark paid**. A paid fee on a job that is later un-collected (refund, credit note) appears under **Needs review**: **Void payout** to return it to due, or **Dismiss** with a note.

### Quarterly unit incentive (`/sales/incentives`, `/me/incentive`)
Separate from commission. The owner sets a **Unit target** and **Pesos per released unit** for the quarter (**Set a target**). Your page shows your **Progress** and the suggested bonus. The owner then **Record bonus** with the amount, reason and the payroll period it is paid in. It is added to that payroll as taxable pay. Targets only track progress; nothing is paid automatically.

## 4.5 Insurance Premium Calculator (`/sales/insurance`)

A staff-only tool to give a customer a quick motor insurance premium estimate. It is not a policy and does not bind cover.

1. Pick the **Vehicle type** (value band).
2. Choose **TPL** or **Comprehensive**.
3. Tick any add-ons.
4. Read the **Estimate** (annual premium and range).
5. Press **Save estimate**, link it to a **Pipeline inquiry** or type the **Customer name** and **Plate**, add notes, and save.

**Saved estimates** can be printed and moved through **Draft → Sent → Won / Lost** (Mark sent, Mark won, Mark lost). Search by customer, plate or car.

**Owner only:** the **Rate table** (TPL rate, Comprehensive rate, range spread, value bands with representative values, add-ons with amounts). Press **Save**.

![Insurance estimate with vehicle type, coverage and add-ons](/screenshots/04-sales-agent-guide/02-insurance-calculator.png)
