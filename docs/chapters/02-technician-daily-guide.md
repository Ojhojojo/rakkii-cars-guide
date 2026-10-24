# 2. Technician daily guide

**For:** Lead Technician · **Hubs:** Workshop, Me

This chapter follows a normal bay day: clock in, pick up your jobs, do the work, prove it with the checklist and photos, and hand the car back to the desk.

## 2.1 Start of day: clock in

You clock in on your own phone, or on the shop tablet if the owner runs the kiosk.

**On your phone — Me › Time clock (`/me/clock`)**
1. Open **Me › Time clock**.
2. If the shop needs a photo ("This shop requires a photo on clock-in and clock-out"), take the selfie when asked.
3. Press **Clock in**. The app checks your phone location against the shop's allowed radius.
4. Your punch appears under **Today**.

**On the shop tablet — Clock kiosk (`/hr/clock-kiosk`)**
The owner opens the kiosk on a shared device. Tap your name:
- "Clocked out — tap to clock in" → you are now in.
- "Clocked in — tap to clock out" → you are now out.

The kiosk lists only people set to **Must clock**. If your name is missing, tell the owner.

::: tip Off-site work
If you are away from the shop (road test, towing, parts run), the app warns that you are outside the radius. Type a **Reason** and punch anyway. The punch shows as **Pending** until the owner approves it in **HR › Attendance**. See [Chapter 3](/chapters/03-staff-self-service-me-hub#_3-1-time-clock-me-clock).
:::

At the end of the day, press **Clock out** the same way. A punch with no clock-out is not paid for that day until the desk closes it.

::: info 📷 Screenshot placeholder
`/screenshots/02-technician-daily-guide/01-clock-in.png` — Time clock with Clock in and Today's punches.
:::

## 2.2 Your job list: Workshop › My jobs (`/workshop`)

Your home page shows two lists:

| List | What is in it | What you can do |
|---|---|---|
| **Assigned to me (n)** | Jobs the desk assigned to you | Open and work them |
| **Other jobs (n)** | Other open bay jobs, unassigned first, with the technician names | Open to **view only** |

At the top, **Assigned to you** shows new assignments this week, who assigned them and when. Announcements the owner posts also appear here while they are active.

- If you open a job that is not yours and try to change it, the app says **"This job isn't assigned to you."** Ask the desk to assign you.
- Jobs are reassigned by the owner (for example when you go on leave). The job keeps an **Assignment history**.

::: info 📷 Screenshot placeholder
`/screenshots/02-technician-daily-guide/02-my-jobs.png` — My jobs with "Assigned to me" and "Other jobs".
:::

## 2.3 Starting bay work

1. Tap the plate under **Assigned to me**. The job opens on the **Work** tab.
2. Read the **Job order**: plate, customer, reference, status, technicians and the work lines (what to do, how many). Prices are not shown to you.
3. Read **Notes** for the desk's instructions.
4. Use **Add photo** / **Bay photo** for progress pictures as you go.

The desk moves the job to **Under repair** when work can start (after the quote, deposit or LOA is in place). You can see the current status at the top of the job.

### Your status buttons
A technician has only these moves. Everything else (start work, ready for pickup, release) belongs to the desk.

| Button | From | Goes to |
|---|---|---|
| **Send to QC** | Under repair | Quality check |
| **Waiting for parts** | Under repair | Waiting for parts |
| **Parts in — back to shop** / **Back to shop** | Waiting for parts, Quality check, On hold | Under repair (or the status it was held from) |
| **Put on hold** | Under repair, Waiting for parts, Quality check | On hold |

### Printing workshop papers
From the Work tab you can print the **Job order**, **Gate pass**, **QC summary** and **Acceptance** sheets. Money papers (estimate, invoices, payment instructions) are desk-only.

## 2.4 Ticking the bay checklist

Each job can carry a **Bay checklist** (usually applied by the desk from a template, for example "Body & paint" or "PMS").

1. In **Work › Bay checklist**, tick each step when it is really done. The app records **Done by** your name and the time.
2. If a step is missing, type it in **New step** and press **Add step**.
3. The job header shows progress (for example "3 open · 5 / 8 done", then "All done").

::: warning Open steps follow the car
The Shop board and Dashboard flag jobs in Under repair or Quality check that still have open checklist steps. Finish or remove steps before you send the car to QC.
:::

::: info 📷 Screenshot placeholder
`/screenshots/02-technician-daily-guide/03-bay-checklist.png` — Bay checklist with ticked and open steps.
:::

## 2.5 Putting a job on hold

Use **Put on hold** when work must stop for a reason outside the bay: the customer has not decided on extra work, the insurer has not approved a supplement, the car needs a part nobody can source yet.

**Who:** the owner, or the technician assigned to that job.
**Rules:**
1. Press **Put on hold** and type a **Reason** (at least 3 characters, up to 500).
2. The job shows "On hold: *your reason*" for everyone.
3. To continue, press **Resume**. A held job only goes back to the status it was held from (or the desk cancels it).

Use **Waiting for parts** instead of hold when you are only waiting for an ordered part.

## 2.6 Insurance jobs: logging surrendered parts

Insurers often require the damaged parts that were replaced. On insurance jobs the **Work** tab shows a **Surrendered Parts** card ("Parts handed to the insurer").

1. Press **Add part**.
2. Fill **Description** (pick from the job's lines or type), **Qty**, **Surrender date**, **Received by** and an optional **Note**.
3. Press **Save**. Edit or delete a row until the job is closed.
4. If nothing has to go back to the insurer, tick **No parts to surrender**.

Until one of these is done the desk sees the hint "No surrendered parts logged."

## 2.7 Canvass and Parts buy (only when enabled)

Some technicians are allowed to source and pay for parts. This needs the **Can canvass & pay suppliers** permission on your staff record, and the job must be marked **Needs canvass** and/or **Needs parts buy** by the desk. Only then do the **Canvass** and **Parts buy** tabs appear.

### Canvass tab — compare suppliers
1. Press **Import from estimate** to copy the part lines, or **Add line** for each part (**Part**, **SKU**, **Qty**, **Grade**).
2. For each line enter up to four quotes: **Supplier A–D**, **price** and **lead days**.
3. Upload supplier quotation files under **Quote files** with a **Supplier label**.
4. Press **Choose A / B / C / D** on each line to pick the supplier.
5. Move the request along: **Mark sent** → **Mark quotes in** → **Submit**. The status reads Draft, Sent, Quotes in, then Approved.
6. The owner presses **Approve**. Approved lines are **Locked**. The owner can **Unlock** for changes.

::: tip The budget is cost, never sell price
The canvass header compares **Selected** (your chosen supplier costs) against **Estimate parts**. That budget is quantity × **cost** of the approved part lines on the estimate. The customer's sell price is never used. If you go over, the app shows "Selected cost exceeds estimate parts budget by …" so the owner can decide.
:::

### Parts buy tab — pay and receive
1. Press **Add purchase** with **Part**, **Supplier**, **Cost**, **Method** and the supplier **Terms** (COD, Term with days, or From Rakkii stock).
2. Press **Pay supplier** when you pay. Attach the receipt photo.
3. If the shop requires it, the owner must **Release funds** first.
4. When the part arrives, press **Mark arrived**. This is blocked while the canvass is still waiting for approval ("Canvass pending approval — mark arrived is blocked until owner/admin approves").
5. **Print supplier request** prints a Request for Payment for the parts.

Statuses: **To pay → Paid → Funds released → Arrived**.

## 2.8 Uploading the four QC photos

A car cannot move to **Ready for pickup** or be **Released** until it has the required QC photos (4 by default). The photo card ("Required before release. Angles: front, rear, left (LS), right (RS).") is on the **Work** and **Files** tabs.

1. Finish the repair and clean-up.
2. Under **QC photos**, upload one photo for each angle:
   - **Front**
   - **Rear**
   - **Left side (LS)**
   - **Right side (RS)**
3. The counter shows progress, for example **QC photos: 3/4**, and names the missing angle.
4. When all four are in, press **Send to QC** (or tell the desk the car is ready).

Only the owner (or admin) can skip photos, with a written **QC override reason**.

::: info 📷 Screenshot placeholder
`/screenshots/02-technician-daily-guide/04-qc-photos.png` — QC photos card with Front, Rear, Left side (LS), Right side (RS) slots.
:::

## 2.9 Checking the calendar and forms

**Workshop › Calendar (`/workshop/calendar`)** shows promised dates by day. Pick a **Day** to see which cars are due, and **No date yet** for open jobs without a promised date. Use it to plan your bay order.

**Workshop › Forms (`/workshop/forms`)** has the printable shop forms:
- **Vehicle Pick-up & Delivery Waiver** — when you pick up or deliver a customer car outside the shop.
- **Undertaking and vehicle intake checklist** — when a car is received: tap panels to mark damage, fuel level, items present.

Press **Start from job** to link the form to a job so answers are saved on it, or **Print** a blank.

## 2.10 End-of-day checklist

- [ ] Checklist steps ticked for today's work
- [ ] Progress photos uploaded
- [ ] Jobs waiting on parts set to **Waiting for parts**; blocked jobs **On hold** with a reason
- [ ] Surrendered parts logged on insurance jobs
- [ ] QC photos (4 angles) on every car you finished
- [ ] **Clock out**
