# 8. Lane 4 — Billing chain, receivables, storage & credit notes

**For:** Shop Owner · **Hubs:** Workshop (Pay, Release, Overview tabs), Finance

This chapter covers what happens around the money once a car is billed: releasing with an override, chasing what customers and insurers owe, recording partial payments, charging storage for cars left behind, and correcting invoices with credit notes and refunds.

## 8.1 Releasing with an Owner override

The release gates protect the shop ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#_5-10-release-checklist-gate-pass-and-acceptance)). Sometimes the owner decides to let the car go anyway — a long-time customer paying tomorrow, or a fleet officer who forgot the signed form.

1. Open the job's **Release** tab (job must be **Ready for pickup**).
2. Tick what is true among **Keys logged**, **Documents in / out**, **Customer signed release**.
3. Tick **Owner override** and type the **Override reason** (required), for example "Regular customer, balance PHP 12,500 by GCash 25 Oct, approved by owner".
4. If invoices are not yet posted and the job holds release for invoices, fill **Reason to release before invoices are posted** (owner only).
5. Press **Release car**.

The release record keeps **Owner override: Yes · Reason: …** and who released the car. Every override is also visible to the owner afterwards.

| What the override passes | Notes |
|---|---|
| Customer balance not zero | The open balance goes to **Who owes us** |
| Down payment required before release | |
| Release checks not all ticked | Owner only — "Only the owner can override the release checklist." |
| Hold until the insurer pays | |
| Invoices not posted | Separate owner-only reason |

The override does **not** pass missing QC photos (use the QC override reason) or a missing LOA on an insurance job.

## 8.2 Who owes us (`/finance/receivables`)

Every posted invoice with a balance appears here, for customers and insurers.

- Filter with **All / Customers / Insurers**, an age **Bucket**, and **Insurer**.
- Columns: **Job**, **Who**, **Insurer**, **Invoice**, **Billing** (transmittal), **Running days**, **Expected** (pay date), **Balance**, **Storage**, **Age**, **Last follow-up**.
- Totals: **Open amount**, **Overdue amount**, and the amount per age band (0–30, 31–60, 61–90, 90+ days by default).
- **Running days** shows each insurer's average days to pay.

Age is counted from the **expected pay date** (invoice date + insurer days to pay, or the customer's credit terms).

### Record a billing transmittal
When you send or hand over the billing packet:
1. On the invoice row press **Billing transmittal**.
2. Fill **Transmittal date** (date sent), **Transmittal ref** (reference number), **For collection**, **Received by**, **Received on** and **Terms (days)** (payment terms).
3. **Save**. The **Billing** column shows the transmittal.

The owner sets **Flag bill not transmitted after** (2 days by default) so posted invoices without a transmittal are flagged.

### Log collection follow-ups
1. Press **Log follow-up** on the row.
2. Type the **Note** ("Called Ms. Reyes, cheque ready 30 Oct"), **Save note**.
3. The latest note and time show under **Last follow-up**.

::: info 📷 Screenshot placeholder
`/screenshots/08-lane-4-billing-chain-receivables-storage-credit-notes/01-who-owes-us.png` — Who owes us with buckets, transmittal and follow-up actions.
:::

## 8.3 Recording partial payments

Customers and insurers often pay in parts. Record each payment on the job when it arrives.

1. Job **Pay › Record a payment**.
2. **Who paid**: Customer or Insurer (separate payments for each share).
3. **Amount**: what actually arrived. For payers with withholding, record the net amount received.
4. **Method**: **Cash**, **GCash**, **Maya**, **Bank transfer**, **Card** or **Other**.
5. Bank transfers: **Bank account** (the code the customer used), **Particular** (often the plate), **Reference**.
6. **Apply to invoice**: choose the invoice. **Deposited to**: which shop account received it.
7. **Record payment**. Repeat for each instalment. **Payments on this job** lists them all; **Print acknowledgement** prints a receipt (not a BIR official receipt).

### Finance › Payments (`/finance/payments`)
- **Payments** tab: every payment in a date range (**Paid from / Paid to**), method chips, **Include voided**, **Export CSV**, **Print**. Footer: **Total collected (net of refunds)**.
- **Pending proofs** tab: payment screenshots customers uploaded on the Customer Portal. Press **View screenshot**, check the money really arrived, then **Confirm** (records the payment) or **Reject**.
- A wrong payment is **Voided** with a reason, never deleted.

## 8.4 Storage fees

Cars left after they are ready can be charged storage.

**Shop setting:** **Free days after ready** (7 by default) and **Daily storage rate** (blank until the owner sets it) in **Admin › Shop settings › Workshop rules › Storage fees**.

**On the job** (Overview tab, **Storage** card; also shown read-only to technicians):
- The card explains: "Storage starts when the job is Ready. Grace 7 days · *rate* pesos a day."
- Inside grace: "Ready *n* days. Inside the 7-day grace. No storage fee yet."
- After grace: "Ready *n* days · *d* days past the 7-day grace · *rate* pesos a day · accruing ₱…".

**To bill it**
1. Owner: press **Confirm storage line**. A storage fee line for the customer is added to the job.
2. Post (or re-post) the customer invoice; the **Storage** column on the invoice and in **Who owes us** shows the amount.

**To forgive or change it** (owner or admin)
- **Waive storage** with a **Waive reason** — left off the invoice; reason kept.
- **Adjust storage** with **Adjusted amount (pesos)** and **Adjust reason**.
- Different rules for one car: set **Grace days for this job** and **Daily rate for this job (pesos)**, **Save storage for this job**. Blank inherits the shop default.

## 8.5 Credit notes and refunds

A posted invoice is never edited. Correct it with a **credit note** (lowers what the invoice bills) and, if money must go back, a **refund**.

### Issue a credit note
1. **Pay › Invoices**, on the posted invoice press **Credit**.
2. Enter **Amount (PHP, incl. VAT)**, **Credit note date** and **Reason**.
3. Press **Issue credit note**. A row "Credit note *number* · Against *invoice*" appears; the invoice shows "Credited −₱…" and "Bills ₱…".
4. **Print** the credit note for the customer or insurer.

The invoice stays posted; the payer's balance, receivables, commission basis and blanket PO usage all go down. No money moves. A sales commission already paid on that job may be flagged for review ([Chapter 4](/chapters/04-sales-agent-guide#commission-statuses-sales-me-commission)). **Void credit** reverses a credit note.

### Refund a payment
1. In **Payments on this job**, press **Refund** on the payment.
2. Enter **Amount**, **Method**, **Paid from** (shop account), **Refunded on**, **Reference** and **Reason**.
3. **Refund**. The payment shows "Refunded ₱…". **Void refund** if entered by mistake.

### Voiding an invoice
**Void** on an invoice needs a reason and is blocked while credit notes or refunds exist: "Void the credit notes first." / "Void the refunds first."

::: info 📷 Screenshot placeholder
`/screenshots/08-lane-4-billing-chain-receivables-storage-credit-notes/02-credit-note.png` — Issue credit note dialog and the credited invoice row.
:::
