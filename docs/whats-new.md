# What's new

Changes to Rakkii Ops that this guide now covers. Dates are when the change reached the integration app.

## Oct 31, 2026

### Released and Done are separate
- **Released** means the car is out; **Done** (was "Closed") means nothing is left on the job. The button is **Mark as done** ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#_5-11-mark-the-job-as-done)).
- Only open checklist items block **Mark as done**. Money still owed (for example an insurer payment) is listed but does not block. The Owner can mark it done anyway with a reason, saved in the Status log.
- **Job history** has **Released · not done** and **Done** labels and filters, plus a **Progress** column. On a phone each job is a card.

### See where a job is at a glance
- Every job has a **status banner**, a **steps bar** ("Step 6 of 7 · Paid", tap it for each step's date) and ✓ / ● marks on the tabs ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#progress)).
- Once the car is out, **Not done yet** lists what is still open: checklist items, balances, unpaid suppliers and a payment proof to review.
- On the **Shop board**, each card has a **What's left** button that opens the same list without leaving the board ([Chapter 10](/chapters/10-workshop-operations-board-calendar-backjobs-contractors)).
- The balance reads **Quote ₱…** before work, **To collect ₱…** during work and **Customer owes ₱…** once the car is out.

### Dashboard
- **Announcements** are at the top, above **Priority jobs**.
- Five figures instead of nineteen: **Cars in shop**, **Ready for pickup**, **On hold**, **Cash in today** and **Overdue invoices**. Empty lists are hidden.

### Less to think about on the job page
- **Print job order** plus a **More papers ▾** menu replace the row of print buttons in the Job order box ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#printing)).
- On a phone, prints save as a PDF named after the paper and plate, for example `Gate pass DEMO 101.pdf`. The gate pass shows **Released on**, and the acceptance fills **Work completed** by itself.
- **Technicians and dates** shows the dates the app recorded (Car in, Started, Done, Car out, Billed, Paid). The date boxes are behind **Edit dates**.
- The technician list shows technicians first; Owner and Admin are behind **Show owner and admin**.
- **Send to QC** asks first if checklist steps are still open.
- **QC photos** show one tile per angle with a ✓. Upload buttons show only for missing angles; **Replace a photo** and **Show photos** are a tap away ([Chapter 2](/chapters/02-technician-daily-guide#_2-8-uploading-the-four-qc-photos)).
- The Pay tab has a **Down payment** card in plain words, with the overrides behind **Change the down payment**. **Commission and agent fee** moves to the bottom, folded, and the paper previews are behind **Show … preview**.
- The Quote tab with no lines says to add lines first, with a **Go to Work tab** button.

### Other screens
- **Parts & Inventory** fits on an iPad and laptop without scrolling sideways; the unit sits with On hand ("10 pc") ([Chapter 9](/chapters/09-parts-inventory-canvass-restock-payables)).
- On an iPad, the top bar no longer overlaps and the Shop board shows two lanes side by side.
- Customer mobiles can be tapped to call; the customer page has **Call** and **Text** links.
- **Finance › Payments › Pending proofs** shows the customer's mobile.

## Oct 29, 2026

### Jobs tell you what to do next
- Every job shows a **next-step banner** under the plate, for example "Add quote lines, start canvass, or start work." or "Collect PHP 800.00 from customer before release." ([Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#next-step)).
- Technicians get their own banner: "Finish the bay checklist (1 step left), then send to QC." ([Chapter 2](/chapters/02-technician-daily-guide)).
- A waiting customer payment proof shows on the banner and on the **Pay** and **Release** tabs, with a link to **Finance › Payments**.

### QC photos lock Ready for pickup
- While QC photos are missing, **Send to QC** is the main button and **Ready for pickup** is greyed out with the reason ("Need 4 QC photos before Ready/Released (have 0).").

### Quotes and margin
- If work lines change after a quote, the Quote and Work tabs warn "Work lines changed since the last quote…".
- Margin is labelled **on cost**: (sell − cost) ÷ cost. The shop's minimum margin uses the same basis.

### Insurance
- **Waiting for LOA** now offers **Mark authorized**, **Start work (cash / no LOA)**, **Back to quote**, **Put on hold** and **Cancel job** ([Chapter 6](/chapters/06-lane-2-insurance-claims-and-loa)).
- **Release of Claim**, **Print gate pass** and **Print customer invoice** are on the **Release** tab.

### Desk
- **New job** asks for the customer, car and work first. Picking a customer on file shows their cars as chips to fill the vehicle.
- "Promised date" is now **Target date**. The **Appointment** (when the car comes in) is a separate date.
- **Priority jobs** on the Dashboard, a **search box** in the top bar, and a **Customer activity** feed with a bell count ([Chapter 10](/chapters/10-workshop-operations-board-calendar-backjobs-contractors)).
- Hard-to-undo actions (create quote, post invoice, record payment, release, approve leave) ask you to confirm.

### HR
- **This week** is Monday to Sunday on Attendance, Payroll and My week.
- Dates read "Oct 29, 2026" everywhere; leave ranges read "Oct 26 – 28, 2026".
- The **Approve leave** dialog lists the person's open jobs so you can reassign them.
- The public shop email is **rakkiicars@gmail.com**.

## A day in the shop: one job from intake to release

This is the path we tested end to end on the integration app on Oct 29, 2026, with the Owner and a Lead Technician. Follow it to practise.

| # | Who | Where | What |
|---|---|---|---|
| 1 | Owner | **Workshop › New job** | Customer, mobile, plate, make, model, year → **Create job**. Status **Booked**. |
| 2 | Owner | Job › **Work › Work lines** | Add a labor line (Description, Qty, Cost, Sell) → **Add line**. |
| 3 | Owner | Job › **Work › Technicians and dates** | Tick the technician → **Save technicians**. The change is in **Assignment history**. |
| 4 | Owner | Job › **Create quote** | Confirm. Status **Quoted**, margin chip "Margin 167% on cost". |
| 5 | Owner | Job header | **Start work**. Status **Under repair**; **Ready for pickup** is locked until the QC photos are in. |
| 6 | Technician | **My jobs** → the plate | Add and tick a **Bay checklist** step. Banner: "Send the car to QC when the work is done." |
| 7 | Technician | Job header | **Send to QC**. Status **Quality check**. |
| 8 | Technician | **Work › QC photos** | Upload **Front**, **Rear**, **Left side (LS)**, **Right side (RS)**. Banner: "QC photos are done. The desk marks the car ready for pickup." |
| 9 | Technician | **Me › Leave** | **Request leave** for a day. |
| 10 | Owner | **HR › Clock kiosk** | Tap the technician to clock them in; check it in **HR › Attendance**. |
| 11 | Owner | Job header | **Ready for pickup**. Banner: "Collect PHP 800.00 from customer before release." |
| 12 | Owner | Job › **Pay** | **Bill customer** → **Create invoice**, then **Record payment** (Cash). Customer owes PHP 0.00. |
| 13 | Owner | Job › **Release** | Tick **Keys logged**, **Documents in / out**, **Customer signed release** → **Release car**. |
| 14 | Owner | **HR › Leave approvals** | **Approve** the technician's leave; keep or reassign their open jobs → **Approve leave**. |

::: tip Practice data only
Use made-up customers and plates on the integration app. Never enter real customer names, phone numbers or plates.
:::
