# 9. Parts & inventory, canvassing, restock POs & supplier payables

**For:** Shop Owner (technicians with the canvass permission do the job-level steps) · **Hubs:** Workshop, Finance

Parts flow two ways at Rakkii:
- **Job parts** bought for one car: canvassed and paid on the job (**Canvass** and **Parts buy** tabs).
- **Shop stock** kept on the shelf: tracked in **Parts & Inventory**, refilled with **restock POs**.

Every unpaid supplier bill from either route lands in **Finance › Payables**.

## 9.1 Parts catalog & stock (`/workshop/parts`)

### Add a part
1. **Workshop › Parts & Inventory › Add part**.
2. Fill **Name**, **SKU**, **Unit**, **On hand**, **Reorder at**, **Last cost**, **Location**, **Preferred supplier**, **Category**, and **Status** (Active / Inactive).
3. Press **Add part**.

### The stock list
Columns: **Name/SKU**, **Category**, **Unit**, **Location**, **On hand**, **Reorder at**, **Last cost**, **Value**, **Preferred supplier**, **Status**.
- **Search**, **Low stock** and **Category** filters.
- Select several rows to **Set category** in bulk.
- **Low stock** means on hand is at or below **Reorder at**, or below zero. Low parts are flagged here and when a technician picks the part on a job ("on hand 2 · Low · min 4").

### Row actions
| Action | Use it for |
|---|---|
| **Edit** | Change details |
| **Receive** | Parts arrived without a PO: **Quantity** and optional **Last cost** |
| **Adjust** | Stock count corrections: **Quantity (signed)** and **Reason**. Use a negative number to write off |
| **Stock moves** | History of every receive, adjustment and job use |

When a job line uses a **Catalog part**, stock is taken from on hand.

**Pending requests** (from the page menu) lists job parts-buys waiting for payment or arrival, with **Open job**.

![Parts & Inventory stock list with Low stock filter](/screenshots/09-parts-inventory-canvass-restock-payables/01-parts-stock.png)

## 9.2 Reviewing technician canvass quotes

When a job is marked **Needs canvass**, the technician (or desk) fills the **Canvass** tab ([Chapter 2](/chapters/02-technician-daily-guide), section 2.7).

1. Open the job's **Canvass** tab. The request status reads **Draft**, **Sent**, **Quotes in** or **Approved**.
2. Check each line's supplier quotes (**A–D** with price and lead days), the **Chosen** supplier and **Line ₱**.
3. Open the **Quote files** to verify the supplier quotations.
4. Compare **Selected** against **Estimate parts**. The budget is the **cost** of the approved estimate part lines — never the sell price. Over budget shows "Selected cost exceeds estimate parts budget by ₱…".
5. Press **Approve**. Lines lock. Use **Unlock** if something has to change.

While a canvass waits for approval, parts on that job cannot be marked arrived ("Canvass pending — approval needed before parts can be marked arrived").

## 9.3 Approving Parts buy on jobs

On the job's **Parts buy** tab each purchase shows **Part**, **Supplier**, **Terms**, **Due date**, **Cost**, **Method** and **Status** (**To pay → Paid → Funds released → Arrived**).

1. Check the purchase and receipt photo.
2. If the shop setting **Finance release before the car arrives** is on, press **Release funds** (records who released and when).
3. When the part is in, **Mark arrived** with the official receipt attached.
4. **Print supplier request** prints the Request for Payment.

Who can pay suppliers: the owner, admin, and staff with **Can canvass & pay suppliers**.

## 9.4 Restock POs (Restock POs tab)

1. Open **Parts & Inventory**, page menu **New PO**.
2. Enter the supplier and a note. Add lines (**Part**, **Qty**, **Unit cost**) or press **Start from low stock** to fill every low part.
3. Set the **Request for Payment** terms (see 9.5).
4. **Create draft**.
5. When sent to the supplier: **Mark ordered**.
6. When delivered: **Mark received**. Quantities are added to on hand and last cost is updated.

The list filters **All / Draft / Ordered / Received** and shows **Reference**, **Supplier**, **Terms**, **Due date**, **Status**, **Lines**, **Total**, **Updated**. Drafts can be edited or deleted; **View** opens any PO with **Payable**, **Paid** and **Balance**.

## 9.5 Supplier payment terms

Each parts buy and restock PO carries its own terms:
- **Terms**: **COD**, **Term** (with **Terms (days)**), or **From Rakkii stock** (no supplier bill).
- **Due date** (from the term days), **Supplier invoice ref**, and **Payable amount** (blank uses the sum of line costs).
- **Save terms**.

Shop defaults are in **Admin › Shop settings › Buying**: **Default terms** (COD to start), **Default term days** (30), **Due-soon warning** (3 days), **Post supplier payments to expenses** (on) and the **Expense category** used.

## 9.6 Payables (`/finance/payables`)

All supplier bills with a balance, from job parts-buys and restock POs. Parts taken from shop stock do not appear.

- Tabs: **Due soon (n)**, **Overdue (n)**, **Open (n)**, **Paid (n)**.
- **Per supplier** summary: bills, payable, paid, balance.
- **Bills**: **Supplier**, **Source** (job or PO), **What**, **Terms**, **Due date** (with due/overdue badges), **Payable**, **Paid**, **Balance**.
- Totals: **This tab**, **All unpaid bills**, **Due total**. **Export CSV** and **Print**.

### Settle a supplier bill
1. Press **Record payment** on the bill.
2. Choose the **Kind**: **Initial payment**, **Partial payment** or **Final payment**.
3. Enter **Amount**, **Date** and **OR no.** (official receipt number).
4. Leave **Post to expenses** on to log it as a shop expense (Parts category by default).
5. **Save**. **View payments** shows the history; a wrong payment is **Void**ed with a reason.

The **Cash** board shows how many payables are due soon or overdue.

![Payables with Due soon / Overdue tabs and Record payment](/screenshots/09-parts-inventory-canvass-restock-payables/02-payables.png)
