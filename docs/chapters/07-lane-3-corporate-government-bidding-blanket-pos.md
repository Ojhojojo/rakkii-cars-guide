# 7. Lane 3 — Corporate, government, bidding & blanket POs

**For:** Shop Owner · **Hubs:** Workshop, Finance · **Nature:** Corporate, Government or Bidding · **Job type:** usually Fleet

Fleet and institutional customers do not pay cash at the counter. They issue purchase orders (POs), bid awards and BAC resolutions, and they pay on credit terms after you bill. Rakkii Ops lets you hold work until the paper is in, and release the car on terms once the invoice is posted.

```text
Company/Government customer (TIN, credit terms) → Blanket PO (if any) → Job with nature
→ Paperwork gate (Approved PO / Notice of award / BAC resolution) → Repair → QC
→ Post customer invoice → Release on credit terms → Collect in Who owes us
```

## 7.1 Set up the company customer (`/workshop/customers`)

1. **Workshop › Customers › New customer**.
2. **Identity**: **Name** (company or agency), **Mobile** (required — use the fleet officer's number), **Email**, **Category** = **Company** or **Government**, **Notes**.
3. **Billing**:
   - **TIN** (follows the format hint shown)
   - **Credit terms (days)** — for example **30**. Blank uses the shop default; **0** means due on issue.
   - **Billing address**
4. **Save customer**. The customer page shows **Credit terms: 30 days**.

Add the fleet's cars under **Cars › Add car** so each job picks the right vehicle.

## 7.2 Blanket POs (`/finance/blanket-pos`)

A blanket PO is one purchase order that covers a group of vehicles as they arrive (for example "PO-2026-118, 12 patrol cars, PHP 1,800,000").

### Create the PO
1. **Finance › Blanket POs › New blanket PO**.
2. **Party kind**: Government or Corporate. **Party name**. **PO number**. **Authorized ₱** (the total ceiling). **Expected units**.
3. **Save PO**.

### Manage the PO (`/finance/blanket-pos/:id`)
- **Details** — edit **Authorized ₱**, **Expected units**, **Status** (Open, Closed, Cancelled) and **Notes**. There is no separate validity-date field: record the PO validity period in **Notes** and set the status to **Closed** when it expires.
- **PO soft copy** — **Upload** the signed PO.
- **Model caps** — when the PO sets a peso cap per vehicle model, each cap shows used, left and expected units.
- **Linked vehicles** — plate, reference, status, car-in date, **Consumed**, balance and age; plus "*n* units not yet in (of *m* expected)".
- **Aging** of balances on linked jobs.

### Link jobs to draw down the balance
1. On the PO page use **Link a job**, choose the job, press **Link job**.
2. The job's billed amount is consumed from the PO. The page shows "Remaining ₱… of ₱…".
3. A link that goes past the remaining amount or a model cap is refused. The owner can enter an **Owner override reason** and press **Link with Owner override** (written to the money log).
4. **Unlink** if a job was linked by mistake. A Closed or Cancelled PO accepts no new links.

The job header shows a chip "Blanket PO *number* · remaining ₱…".

On the list page, the **Open** and **History** views, filters by **Status** and **Party kind**, **Export CSV** and **Print** help you report to the customer.

::: info 📷 Screenshot placeholder
`/screenshots/07-lane-3-corporate-government-bidding-blanket-pos/01-blanket-po-detail.png` — Blanket PO detail with remaining amount, linked vehicles and model caps.
:::

## 7.3 Create the job

1. **New job** with **Nature** = Corporate, Government or Bidding and **Job type** = Fleet (or Retail).
2. Choose the company customer and the car.
3. If the PO is per job, open **Work › Technicians and dates** and enter **Approved PO amount** and **PO approved on**, then **Save dates**. The Overview line reads "Nature · Approved PO ₱…".

## 7.4 Paperwork gates before work starts

The owner turns each gate on in **Admin › Shop settings › Workshop rules › Paperwork by customer type** (all off by default):

| Nature | Gate | What satisfies it | Message if missing |
|---|---|---|---|
| Corporate | **Corporate needs an approved PO** | Approved PO amount / date on the job | "An approved PO is required before work starts." |
| Government | **Government needs a PO or blanket PO** | Approved PO, or a linked blanket PO | "An approved PO or a blanket PO is required before work starts." |
| Government | **Government needs a BAC resolution** | File of kind **BAC resolution** | "A BAC resolution is required before work starts." |
| Bidding | **Bidding needs an award** | File of kind **Notice of award** | "A notice of award is required before work starts." |

**Upload the documents:** **Files** tab → choose **Kind** (Notice of award, BAC resolution, Certificate of final acceptance, PDF…) → upload. Government and Bidding jobs show a document checklist (○ missing, ✓ uploaded).

**Skip a gate for one job:** owner (or admin) only — **Skip this job's document gate**, type a reason, **Save skip reason**. The job can then start without the LOA, approved PO, blanket PO, notice of award or BAC resolution.

### Down payment for these natures
Corporate, Government and Bidding each have their own down-payment percent (50% by default) and blocking rule (**Does not block** by default). See [Chapter 13](/chapters/13-admin-shop-settings-and-staff-permissions).

## 7.5 Repair, QC and invoice

Run the repair as in [Chapter 5](/chapters/05-lane-1-private-walk-in-jobs): assign, **Start work**, bay checklist, four QC photos, **Ready for pickup**.

Then **Pay › Invoices › Bill customer ₱…** to post the invoice in the company's name (TIN and billing address on the print). If the shop has a withholding percent for corporate or government payers, the Pay tab shows **Expected withholding** and **Expected net** — record the amount that actually arrives.

## 7.6 Release on credit terms

A job counts as a **credit job** when any of these is true:
- the customer has **Credit terms (days)** above 0, or
- the job has an **Approved PO amount** or **PO approved on** date, or
- the job is linked to a **blanket PO**.

Once the customer invoice is **posted**, a credit job releases **without upfront cash**:
1. Open **Release**. The tab says "Releasing on credit terms or an approved PO."
2. Tick **Keys logged**, **Documents in / out** and **Customer signed release**.
3. Press **Release car**. No owner override is needed even though the balance is open.

The open balance moves to **Finance › Who owes us** with the due date from the credit terms. Send the billing transmittal and follow up as in [Chapter 8](/chapters/08-lane-4-billing-chain-receivables-storage-credit-notes).

::: warning No invoice, no credit release
Without a posted customer invoice the normal hold applies: "Customer still owes. Default is to hold the car."
:::
