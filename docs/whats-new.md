# What's new

Changes to Rakkii Ops that this guide covers, newest first. Dates are when the change reached the integration app.

## Nov 14, 2026 — guide v2

The guide is rewritten around **tasks** instead of chapters. Start with your role: [Technician](/technician/), [Sales agent](/sales/) or [Owner / desk](/desk/). The old detailed chapters are under **Reference**.

### The job page is simpler
- **One next-step button.** The top of every job shows one blue button that names the next thing to do, for example **Save quote →**. It opens the right tab and points at the control. If it's grey, the reason is written next to it.
- **No Quote tab.** The quote is the **Quote** card on the **Work** tab, under the work lines. **Create quote** is now **Save quote**.
- **Status buttons sit where the work happens**: **Send to QC** on the bay checklist, **Ready for pickup** on the QC photos card, **Release car** on the Release tab. Less common moves (**Put on hold**, **Cancel job**, **No-show**) are in the header's **More ▾** menu.
- **Overview is a summary.** Edits moved to their tabs. Only the sales advisor and **Change target date or appointment** stay on Overview.
- **Work tab**: work lines first, then the **Quote**, **Team** and **Dates** cards side by side, the bay checklist and QC photos.
- **Pay tab**: a **Summary** card first, then invoices and payments. Down payment and withholding are folded under **Job money settings**. The PO is on the **Nature and PO** card.
- **Files tab**: documents first (intake checklist, pick-up & delivery waiver).
- **Release tab**: one **Can the car leave?** list, each line with a button to the fix. The third release check is now **Customer signed acceptance & release**.
- **PMS reminder** is chosen when you release the car (**In 3 / 6 / 12 months**); the customer gets one email.

### Other changes
- **Sales** can ask for supplier prices from a job's **Parts to canvass** card.
- **Customers** sign in to the Customer Portal with a 6-digit code sent by email.
- Every date field uses the same date picker (MM/DD/YYYY).
- **Finance › Cash** has one **Today** card with money in and out.
- **Parts & Inventory** filters by Active, Inactive or All, and shows who moved stock and when.

## Oct 31, 2026

### Released and Done are separate
- **Released** means the car is out; **Done** (was "Closed") means nothing is left on the job. The button is **Mark as done** ([more](/desk/)).
- Only open checklist items block **Mark as done**. Money still owed (for example an insurer payment) is listed but does not block. The Owner can mark it done anyway with a reason, saved in the Status log.
- **Job history** has **Released · not done** and **Done** labels and filters, plus a **Progress** column. On a phone each job is a card.

### See where a job is at a glance
- Every job has a **status banner**, a **steps bar** ("Step 6 of 7 · Paid", tap it for each step's date) and ✓ / ● marks on the tabs ([more](/desk/)).
- Once the car is out, **Not done yet** lists what is still open: checklist items, balances, unpaid suppliers and a payment proof to review.
- On the **Shop board**, each card has a **What's left** button that opens the same list without leaving the board ([more](/reference/10-workshop-operations-board-calendar-backjobs-contractors)).
- The balance reads **Quote ₱…** before work, **To collect ₱…** during work and **Customer owes ₱…** once the car is out.

### Dashboard
- **Announcements** are at the top, above **Priority jobs**.
- Five figures instead of nineteen: **Cars in shop**, **Ready for pickup**, **On hold**, **Cash in today** and **Overdue invoices**. Empty lists are hidden.

### Less to think about on the job page
- **Print job order** plus a **More papers ▾** menu replace the row of print buttons in the Job order box ([more](/desk/)).
- On a phone, prints save as a PDF named after the paper and plate, for example `Gate pass DEMO 101.pdf`. The gate pass shows **Released on**, and the acceptance fills **Work completed** by itself.
- **Technicians and dates** shows the dates the app recorded (Car in, Started, Done, Car out, Billed, Paid). The date boxes are behind **Edit dates**.
- The technician list shows technicians first; Owner and Admin are behind **Show owner and admin**.
- **Send to QC** asks first if checklist steps are still open.
- **QC photos** show one tile per angle with a ✓. Upload buttons show only for missing angles; **Replace a photo** and **Show photos** are a tap away ([more](/technician/)).
- The Pay tab has a **Down payment** card in plain words, with the overrides behind **Change the down payment**. **Commission and agent fee** moves to the bottom, folded, and the paper previews are behind **Show … preview**.
- The Quote tab with no lines says to add lines first, with a **Go to Work tab** button.

### Other screens
- **Parts & Inventory** fits on an iPad and laptop without scrolling sideways; the unit sits with On hand ("10 pc") ([more](/reference/09-parts-inventory-canvass-restock-payables)).
- On an iPad, the top bar no longer overlaps and the Shop board shows two lanes side by side.
- Customer mobiles can be tapped to call; the customer page has **Call** and **Text** links.
- **Finance › Payments › Pending proofs** shows the customer's mobile.

## Oct 29, 2026

### Jobs tell you what to do next
- Every job shows a **next-step banner** under the plate, for example "Add quote lines, start canvass, or start work." or "Collect PHP 800.00 from customer before release." ([more](/desk/)).
- Technicians get their own banner: "Finish the bay checklist (1 step left), then send to QC." ([more](/technician/)).
- A waiting customer payment proof shows on the banner and on the **Pay** and **Release** tabs, with a link to **Finance › Payments**.

### QC photos lock Ready for pickup
- While QC photos are missing, **Send to QC** is the main button and **Ready for pickup** is greyed out with the reason ("Need 4 QC photos before Ready/Released (have 0).").

### Quotes and margin
- If work lines change after a quote, the Quote and Work tabs warn "Work lines changed since the last quote…".
- Margin is labelled **on cost**: (sell − cost) ÷ cost. The shop's minimum margin uses the same basis.

### Insurance
- **Waiting for LOA** now offers **Mark authorized**, **Start work (cash / no LOA)**, **Back to quote**, **Put on hold** and **Cancel job** ([more](/reference/06-lane-2-insurance-claims-and-loa)).
- **Release of Claim**, **Print gate pass** and **Print customer invoice** are on the **Release** tab.

### Desk
- **New job** asks for the customer, car and work first. Picking a customer on file shows their cars as chips to fill the vehicle.
- "Promised date" is now **Target date**. The **Appointment** (when the car comes in) is a separate date.
- **Priority jobs** on the Dashboard, a **search box** in the top bar, and a **Customer activity** feed with a bell count ([more](/reference/10-workshop-operations-board-calendar-backjobs-contractors)).
- Hard-to-undo actions (create quote, post invoice, record payment, release, approve leave) ask you to confirm.

### HR
- **This week** is Monday to Sunday on Attendance, Payroll and My week.
- Dates read "Oct 29, 2026" everywhere; leave ranges read "Oct 26 – 28, 2026".
- The **Approve leave** dialog lists the person's open jobs so you can reassign them.
- The public shop email is **rakkiicars@gmail.com**.
