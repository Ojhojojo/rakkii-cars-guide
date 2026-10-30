# 5. Lane 1 — Private / walk-in jobs

**For:** Shop Owner · **Hubs:** Workshop, Finance · **Nature:** Private · **Job type:** Retail

This is the base flow every other lane builds on. A private customer drives in (or calls, messages, books online), you quote, collect a down payment, repair, invoice, collect the balance and release.

```text
Intake forms → New job (Booked) → Quote → Customer approves → Down payment
→ Assign technician → Under repair → Quality check → Ready for pickup
→ Customer invoice → Final payment → Release checklist → Released → Done
```

## Status map {#status-map}

| Status | Meaning | Main next step (button) |
|---|---|---|
| **New inquiry** | Lead from web, Messenger or the sales pipeline | **Confirm booking** |
| **Booked** | Car or appointment confirmed | **Start work** (retail job that needs no canvass), otherwise **For canvass** / **Mark quoted** |
| **For canvass** | Parts prices being gathered | **Mark quoted** |
| **Quoted** | Estimate given | **Start work** |
| **Waiting for LOA** / **Authorized** | Insurance only ([Chapter 6](/chapters/06-lane-2-insurance-claims-and-loa)) | **Mark authorized** → **Start work** |
| **Under repair** | In the bay | **Send to QC** (main button until the 4 QC photos are in), then **Ready for pickup** |
| **Waiting for parts** | Paused for an ordered part | **Parts in — back to shop** |
| **Quality check** | Being inspected | **Ready for pickup** / **Back to shop** |
| **On hold** | Paused with a reason | **Resume** / **Cancel job** |
| **Ready for pickup** | Done, waiting for the customer | **Release car** |
| **Released** | Car has left, but money or checklist items may still be open | **Mark as done** (or **Mark invoiced**) |
| **Invoiced** | Optional bookkeeping step after release | **Mark as done** |
| **Done** | Nothing left on the job (this used to be called **Closed**) | — |
| **Cancelled** / **No-show** | Ended without work (reason required to cancel) | — |

Every status change is kept in the job's **Status log** with who moved it and when.

### The next-step banner {#next-step}

Every job shows one blue banner under the plate that says what to do next, for example "Add quote lines, start canvass, or start work.", "Collect PHP 800.00 from customer before release." or "Release the car." It changes as the job moves. When something blocks the main step, the banner names it instead:

| Banner | What it means |
|---|---|
| "The customer sent a payment proof. Confirm or reject it." | A GCash/Maya screenshot from the Customer Portal is waiting (see [5.5](#_5-5-record-the-50-down-payment)) |
| "Take the missing QC photos (Rear, Left side (LS)). 2 of 4 done." | Ready for pickup is locked until the QC photos are in |
| "The customer approved the estimate online. Start work." | The customer pressed **Approve estimate** on the Customer Portal |
| "The customer declined the estimate online. Revise the quote or cancel the job." | The customer pressed **Decline estimate** |
| "Collect PHP … from customer before release." | The customer still owes and the car is held |

Technicians see their own version of the banner, for example "Finish the bay checklist (1 step left), then send to QC." ([Chapter 2](/chapters/02-technician-daily-guide)).

### Status, steps and what's left {#progress}

The top of every job tells you where it is without opening each tab:

- **Status banner** — the job's status in words, with when and by whom it last moved, for example "Released · car is out" and "Oct 30, 2026, 3:21 PM by …". On-hold and cancel reasons show here too.
- **Steps bar** — "Step 6 of 7 · Paid". Tap it to see all seven steps with their dates: **Intake**, **Approved**, **Work done**, **QC passed**, **Released**, **Paid**, **Done**.
- **Tab marks** — ✓ means the tab is finished, ● means it needs you. They show on **Quote**, **Parts buy**, **Work**, **Pay** and **Release**.
- **Not done yet** — once the car is out, a box lists what is still open: checklist items, the customer and insurer balances, unpaid suppliers and a payment proof to review. It does not show a count; it just lists the items.

Technicians see no money in the banner, the steps or the list.

### Money wording {#money-wording}

The customer's balance reads differently as the job moves, so a fresh job never looks like a debt:

| Stage | Wording |
|---|---|
| Before work is approved | **Quote ₱…** |
| Work approved, car still in the shop | **To collect ₱…** |
| Car is out | **Customer owes ₱…** |

The same wording is used on the job, the Shop board cards and the board's **What's left** pop-up.

## 5.1 Before the car is touched: intake paperwork

### Undertaking & Vehicle intake checklist (`/workshop/forms/intake`)
1. Go to **Workshop › Forms** and on **Undertaking and vehicle intake checklist** press **Start from job** (after the job exists) or **Open** for a blank.
2. Fill the undertaking blanks (date, owner name, make/model, plate). The wording itself is fixed.
3. On the **Vehicle intake checklist**: customer, address, date, color, model/unit, odometer, plate; **tap each damaged panel**; set **Fuel level**; mark each item **Present / Not present**; add **Remarks**.
4. Press **Save on job** (when started from a job), then **Print** for signatures (customer, inspected by).

### Vehicle Pick-up & Delivery Waiver (`/workshop/forms/vd-waiver`)
Use it when a driver picks up or delivers the customer's car outside the shop. It covers customer and vehicle information, pickup/delivery addresses and times, a pre-delivery damage diagram, condition checks, terms and signatures. Fill it, then **Print**. It is also on the job's Quote and Work tabs as **Pickup/Delivery waiver**.

![Vehicle intake checklist with car panel diagram](/screenshots/05-lane-1-private-walk-in-jobs/01-intake-checklist.png)

## 5.2 Create the job (`/workshop/jobs/new`)

The form is in the order you get the information at the counter: customer, car, work, then how the job came in.

1. Press **New job** (Workshop pin).
2. **Customer** — type two letters of the **Customer name** to find someone on file, or enter a new name, **Mobile** (required), **Email** and **Customer category** (Person).
   - When you pick a customer who is already on file, their cars appear as chips under the name. Tap a car to fill **Plate**, **Make**, **Model** and **Year**, or **New car** to type a different one.
3. **Vehicle** — **Plate** (required), **Make**, **Model**, **Year**.
4. **Work** — **Work category**, **Target date** (when the repair should be done), **Services** and **Notes**.
5. **How the job came in**
   - **How they arrived**: Walk-in, Phone, Messenger, Website or Sales.
   - **Job type**: Retail. **Nature**: Private. Job type and nature follow each other (Insurance ↔ Insurance, Retail ↔ Private), so set one and check the other.
   - **Tax**: VAT or Non-VAT (shop default pre-selected).
   - **Sales advisor** (optional, never earns commission) and **Referred by (staff)** (optional, earns in-house commission unless the channel is a no-commission channel).
   - **Referred by (outside agent)** and **Agent fee (₱)** only if an outside agent sent the customer; leave the fee blank to use the shop default.
6. Press **Create job**. A desk-created job starts at **Booked** and gets a job reference (for example `JOB-20261029-6945`) and a customer pay link.

The appointment day (when the car comes in) is separate from the target date. Set it on **Overview › Appointment** if the customer is booked for a later day.

![New job form with Customer, Vehicle and Work filled](/screenshots/05-lane-1-private-walk-in-jobs/04-new-job.png)

## 5.3 Build the quote

### Work lines (Work tab)
1. Open the job's **Work** tab, card **Work lines**.
2. For each line choose **Kind** (Labor, Part, Paint, Fee, Other). For parts pick a **Catalog part** (shows on hand and low stock) or **One-off instead**.
3. Enter **Description**, **Qty**, **Cost** (what it costs the shop) and **Sell** (customer price). **Who pays** = Customer.
4. **Add line**. Untick or remove lines the customer did not approve.

If the parts need supplier prices first, tick **Needs canvass** / **Needs parts buy** on **Overview** (retail jobs can skip both) and see [Chapter 9](/chapters/09-parts-inventory-canvass-restock-payables).

![Work lines card with one labor line, Who pays, Qty, Cost and Sell](/screenshots/05-lane-1-private-walk-in-jobs/05-work-lines.png)

### Customer estimate and margin warning (Quote tab)
1. Open the **Quote** tab. The **Customer estimate** shows sell prices only. If the job has no lines yet, the tab says to add work and parts lines first, with a **Go to Work tab** button.
2. Check the margin. The job header shows it as a chip, for example **Margin 167% on cost**.
   - Margin is counted **on cost**: (sell − cost) ÷ cost. A ₱300 cost sold at ₱800 is 167% on cost. The shop's minimum uses the same basis.
   - If it is under the shop's minimum (30% by default) you see "Margin X% on cost is under the 30% floor."
   - In **Warn** mode you can still save; the job is flagged.
   - In **Block** mode the owner (or admin) must type an **Override reason** to save.
3. Press **Create quote** and confirm. The status becomes **Quoted** (or press **Mark quoted**).
4. **Print estimate** for a paper copy.

::: warning Changed the lines after quoting?
If you add, remove or change approved lines after the quote, the Quote and Work tabs show "Work lines changed since the last quote (PHP … now vs PHP … quoted). Create a new quote so the customer sees the new total." Create a new quote before you ask the customer to pay.
:::

## 5.4 Customer approval through the Customer Portal

1. On the Quote tab press **Copy customer link** and send it by SMS, Messenger or email.
2. The customer opens the pay link on the Customer Portal (for example `https://rakkii-web-int.web.app/pay/<token>`). They see the job, plate, estimate total and **Your share (Balance due)**.
3. They press **Approve estimate** or **Decline estimate**. Approving or declining takes no payment.
4. Back in Ops the Quote tab shows "Last quote: … · Approved by … · date".

The same page lets the customer **Upload payment screenshot** for GCash or Maya. Those arrive in **Finance › Payments › Pending proofs** for you to confirm ([Chapter 8](/chapters/08-lane-4-billing-chain-receivables-storage-credit-notes)). While a proof is waiting, the job's next-step banner says "The customer sent a payment proof. Confirm or reject it." and the **Pay** and **Release** tabs show a warning with a link straight to the pending proofs.

![Customer Portal pay page with Approve estimate / Decline estimate](/screenshots/05-lane-1-private-walk-in-jobs/02-portal-approve.png)

## 5.5 Record the 50% down payment

The **Pay › Money** card shows **Customer owes**, **Cash in**, **DP required**, **DP collected** and **DP still due**. Private jobs default to **50%** of the customer share.

1. Open **Pay › Record a payment**.
2. **Who paid**: Customer. **Amount**: the down payment. **Method**: Cash, GCash, Maya, Bank transfer, Card or Other.
3. For bank transfers pick the **Bank account** code, and fill **Particular** (often the plate) and **Reference**.
4. Optionally set **Deposited to** (which shop account the money went into).
5. Press **Record payment**, then **Print acknowledgement** for the customer.

**Down payment rules**

The **Down payment** card on the Pay tab says in plain words whether the deposit holds the job: "Needed before work starts", "Needed before the car is released" or "For reference only, it does not hold the job", plus whether it is covered.
- The owner decides per nature whether the deposit blocks anything: **Does not block** (default), **Before work** or **Before release** (Chapter 13).
- To change one job, open **Change the down payment**, use **Percent override** or **Amount override** with a **Reason**, then **Save down payment**.
- If the deposit blocks work and you must start anyway, the owner (or admin) enters a **Bypass reason to start work without the deposit**.

## 5.6 Assign the technician and start work

1. **Work › Technicians and dates**: pick the technician(s), choose a **Reason for change**, press **Save technicians**. Changes are kept in **Assignment history**.
   - Technicians are listed first. The Owner and Admin can still be assigned: press **Show owner and admin** (they show anyway if one is already on the job).
2. You don't need to type the work dates. The card shows the dates the app recorded in one line: **Car in**, **Started**, **Done**, **Car out**, **Billed** and **Paid**. They come from the status moves, the release, the first posted invoice and the payment that cleared the balance.
   - To correct one, open **Edit dates**, change it and press **Save**. A typed date always wins.
   - The Job order box and the printed job order use the same dates.
3. Apply a **Bay checklist** template (**Template › Apply template**) so the technician has steps to tick.
4. Press **Start work**. Status: **Under repair**. The banner changes to "Finish work and send to QC."

![Job header after Start work: Under repair, Send to QC as the main button, Ready for pickup locked](/screenshots/05-lane-1-private-walk-in-jobs/06-under-repair-qc-gate.png)

## 5.7 Bay checklist and QC photos

The technician ticks the **Bay checklist** and uploads the four **QC photos** — **Front**, **Rear**, **Left side (LS)**, **Right side (RS)** ([Chapter 2](/chapters/02-technician-daily-guide#_2-8-uploading-the-four-qc-photos)).

1. When work is done, press **Send to QC**. While QC photos are missing, **Send to QC** is the main button and **Ready for pickup** stays greyed out with the reason "Need 4 QC photos before Ready/Released (have 0)."
   - If checklist steps are still open, the app asks first: "Send to QC with steps open? 1 of 2 checklist steps are not ticked yet." Press **Send to QC anyway** or go back and tick them.
2. On **Quality check** the banner lists the missing angles ("Take the missing QC photos (Front, Rear). 2 of 4 done."). Once all four are in, **Ready for pickup** unlocks and the banner says "Pass QC and mark ready for pickup."
3. If photos truly cannot be taken, the owner types a **QC override reason** and **Save QC override**.
4. Print the **QC summary** (**More papers › QC summary**) if the customer wants it.

### Printing papers {#printing}

The **Job order** box (Work tab) has two buttons instead of a long row:

- **Print job order** for the bay.
- **More papers ▾**, grouped as:
  - **For the customer** — Estimate, Customer invoice, Payment instructions, Payment acknowledgement, Acceptance
  - **For the shop** — Gate pass, QC summary, Insurer invoice, Release of Claim (insurance jobs)
  - **Forms to fill** — Pickup/Delivery waiver, Intake checklist

The Quote, Pay and Release tabs keep their own print buttons for the paper you need at that step. On the Pay tab, the on-screen paper previews are folded behind **Show … preview** buttons; printing is the same.

::: tip Printing from a phone
Phones can't print a PDF inside the app, so on a phone each print saves the PDF instead, named after the paper and the plate (for example `Gate pass DEMO 101.pdf`). Open it from the download bar to print or share it. Computers and laptops still get the print dialog.
:::

## 5.8 Create and post the customer invoice

1. Open **Pay › Invoices**. The app offers **Bill customer PHP …** based on the approved customer lines.
2. Press it and confirm **Create invoice** ("This posts an invoice. Undoing it later needs a void or a credit note."). The invoice is created **Posted**, with a number from the VAT or Non-VAT series (for example `V-0018`).
3. Press **Print customer invoice**. **Print payment instructions** gives the customer the pay link, GCash/Maya and bank details.

Posting an invoice does not change the job status.

## 5.9 Record the final balance

1. **Pay › Record a payment**, **Who paid**: Customer.
2. Press **Fill customer balance** to enter exactly what is left, pick the **Method**, and **Apply to invoice**.
3. **Record payment** and confirm ("Record PHP 800.00 from the customer?"). **Customer owes** should read PHP 0.00 and the banner changes to "Release the car."

![Pay tab Money card after the final payment: Customer owes PHP 0.00](/screenshots/05-lane-1-private-walk-in-jobs/07-pay-money.png)

By default the car is held until the customer balance is zero ("Hold the car until the customer has paid: Yes" on Overview).

## 5.10 Release checklist, gate pass and acceptance

1. Open the **Release** tab. If the job is not yet **Ready for pickup** it says "Move the job to Ready for pickup first." The tab shows **QC photos: 4/4** and **Customer balance**.
2. Print what the customer and guard need, right from the Release tab: **Print gate pass** for the guard and **Print customer invoice** for the customer. After release the tab also offers **Print acceptance** (acceptance and satisfaction of repair) for the customer to sign.
   - The gate pass shows **Released on** with the date and time (or "Not released yet").
   - The acceptance fills **Work completed** from the day the job first reached QC, Ready or Released, unless someone typed a date.
3. Tick the three release checks:
   - **Keys logged**
   - **Documents in / out**
   - **Customer signed release**
4. Press **Release car** and confirm ("The car leaves the shop and the job becomes read-only."). The job becomes **Released** and the tab shows "Released on … · Released by …".

::: tip Rakkii's hand-over routine
Before ticking **Customer signed release**, confirm the shop's hand-over steps: the customer signed the acceptance form, the old replaced parts were returned to the customer, and the car was washed and vacuumed. Add these as steps in a "Release prep" bay checklist template (Admin › Shop settings › Company › Lists › Checklist templates) so they are ticked and logged on every job.
:::

**What blocks release (and who can pass it)**

| Block | Message | Way through |
|---|---|---|
| Not Ready | "Job must be in ready status before release." | Finish QC, mark Ready |
| Customer balance open | "Customer still owes. Default is to hold the car." | Collect, or **Owner override** + reason |
| Down payment before release | "Down payment shortfall … still due before release." | Collect, or owner override |
| QC photos missing | names the missing angle | Upload, or QC override reason |
| Release checks not ticked | "Keys logged, documents in/out and customer signed must all be ticked…" | Tick, or owner override + reason |
| Invoices not posted (if the job holds for invoices) | "Post the customer invoice before release." | Post, or owner reason "Reason to release before invoices are posted" |

![Release tab with Keys logged, Documents in / out, Customer signed release](/screenshots/05-lane-1-private-walk-in-jobs/03-release-checklist.png)

## 5.11 Mark the job as done

A car can leave before everything is settled, for example while an insurer still has to pay. So **Released** means the car is out, and **Done** means nothing is left.

1. After release, check the **Not done yet** box on the job (see [Status, steps and what's left](#progress)).
2. Press **Mark as done** (or **Mark invoiced** first if you track that step).
   - **Only open checklist items block it.** Money still owed is listed but does not block, because insurers can pay long after release.
   - With checklist items open, the button is off for everyone except the Owner. The Owner can still mark it done by typing a reason; it is saved in the job's **Status log** as "Done with N checklist items open: …".
3. A done job is read-only. Its car, payments and invoices stay in the customer's **Service history**. Once a job is released or done, the Overview hides the date edit boxes and keeps the summary lines.
4. Set **Remind me** (3, 6 or 12 months) on Overview if the customer should get a service reminder email.
