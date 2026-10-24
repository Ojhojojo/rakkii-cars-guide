# 10. Workshop operations: board, calendar, customers, backjobs & contractors

**For:** Shop Owner · **Hub:** Workshop

The pages in this chapter help you run the floor across all jobs at once instead of one job at a time.

## 10.1 Shop board (`/workshop/board`)

The Kanban view of every car in play. Each card shows the plate, a subtitle (type, category), the customer, checklist progress, promised date and any amount the customer still owes.

| Lane | Statuses in it |
|---|---|
| **New** | New inquiry, Booked |
| **Quote / LOA** | For canvass, Quoted, Waiting for LOA, Authorized |
| **Under repair** | Under repair |
| **Parts & QC** | Waiting for parts, Quality check |
| **On hold** | On hold |
| **Ready** | Ready for pickup (in play for 90 days) |

**Filters**
- Scope: **Mine**, **All open**, **All**.
- Type: **Retail**, **Insurance**, **Fleet**.
- **Lane** (or **All lanes**).
- **Promised**: **Any date**, **Due today**, **Overdue**.
- **Stuck**: **Any**, **Waiting LOA**, **Waiting parts**, **Unpaid**.
- **Work category**.

Switch between **Columns** (Kanban) and **List** (sortable table: Plate, Customer, Lane, Status, Type, Category, Promised, Balance). Jobs that match a search but are off the board (released, closed) show under **Also found (off the board)**.

**Morning routine:** filter **Promised: Due today** and **Overdue**, then **Stuck: Unpaid** on the Ready lane — those cars must not leave until paid.

The **Dashboard** (`/workshop`) complements the board with **Due today**, **New web & Messenger inquiries** (with **Confirm booking**), **Ready, but customer still owes**, **Today's appointments** (Confirmed / In shop / Waiting), **Announcements**, and counts by status, type and channel.

::: info 📷 Screenshot placeholder
`/screenshots/10-workshop-operations-board-calendar-backjobs-contractors/01-shop-board.png` — Shop board columns view with filters.
:::

## 10.2 Appointment & promised-date calendar (`/workshop/calendar`)

1. Open **Workshop › Calendar**. The week is shown; pick a **Day**.
2. The selected day lists every job **promised** for that day (plate, customer, type and status).
3. **No date yet** lists open jobs without a promised date — give each one a date.
4. **Book this day** starts a new job with that promised date.

**Setting the date and appointment on a job:** job **Overview** → **Promised** line → set **Date**, **Time window** and appointment **Status** (**Confirmed**, **In shop**, **Waiting**) → **Save**. **Clear chip** removes the appointment.

## 10.3 Customers & vehicle service history

### Customers (`/workshop/customers`)
The list shows each customer with **Cars**, **Last visit**, **Total spent** and **Open jobs**. Use **New customer** or open a row.

On the customer page (`/workshop/customers/:id`):
- **Customer** details: Name, Mobile, Email, Category (Person, Company, Government), TIN, Credit terms, Billing address, Notes — **Edit** to change.
- **Cars** — every vehicle, with last visit; **Add car**.
- **Open jobs** and **Service history** (date, plate, work done, amount).
- **New job for them** starts a job with the customer filled in.

### Vehicles (`/workshop/vehicles/:id`)
- **Car** details: Plate (fixed once on file), Make, Model, Year, Color, VIN, Notes.
- **Owner**, **Open jobs** and **Service history** for this car across all owners.
- **Move to new owner** when a car is sold. The car's service history stays with the car.

## 10.4 Backjob Monitor (`/workshop/backjobs`)

A backjob is a car that comes back for the same work (a warranty return or comeback).

### Log a backjob on the original job
1. Open the **original** job (the one being complained about). On **Overview**, card **Backjobs**, press **Log backjob**.
2. Fill **Complaint**, **Date returned**, and who is **Responsible** — pick **Staff** (a technician) or **Contractor** (name).
3. Tick **Under warranty** if the shop covers it. Add a **Note**.
4. Save. Track its **Status**: **Open**, **Fixed** or **Not a backjob**.
5. **Confirm / change responsible** once the cause is clear.
6. **Add cost** for every peso spent fixing it: **Category**, **Amount**, **Date**, **Payee** (required for contractor costs), **Note**, **Paid from**. Costs are recorded as shop expenses. **Save warranty note** for the customer-facing warranty remark.

Backjobs do not change technician pay. They can feed KPI scorecards as a hint ([Chapter 11](/chapters/11-hr-payroll-kiosk-announcements-documents)).

### The monitor
- **By responsible** (this month): **Who**, **Kind** (staff or contractor), number of **Backjobs**, total **Cost**.
- **Still open** (any month): **Returned**, **Job**, **Plate**, **Customer**, **Complaint**, **Responsible**, **Warranty**, **Cost**. Items stay until fixed or cleared.

## 10.5 Contractor Monitor (`/workshop/contractors`)

Sublet work (for example upholstery, glass or engine machining) is tracked on the job and monitored here.

### On the job: Job Order — Contractors (Work tab)
1. Press **Add contractor**.
2. Fill **Contractor**, **Scope** (prefilled from the job's work category if the shop setting is on), **Status**, **Date start**, **Commitment date**, **Completion date**, **Labour** (agreed amount) and **Note**.
3. Save. The line shows days, labour, **Adv. paid** and **Balance**.
4. Move it with **Mark ON-GOING** and **Mark COMPLETED**. If the shop requires a contractor signature, completing without one needs an owner/admin reason (**Complete anyway**). Upload a **Signature photo** or type the **Contractor signature** name.
5. Pay the contractor with **Adv. paid** (advance) or **Payment**: **Date**, **Paid from**, **Note**. Each payout can be voided.
6. **Cancel line** if the sublet is called off.

Statuses: **OPEN**, **ON-GOING**, **COMPLETED**, **CANCELLED**. Technicians see the list read-only.

### The monitor
- Filters: **Status** (Open and ON-GOING, ON-GOING, COMPLETED, CANCELLED, All), **Contractor**, **Overdue commitment dates only**.
- Columns: **Job**, **Plate**, **Contractor**, **Scope**, **Status**, **Commitment date**, **Days**, **Labour**, **Adv. paid**, **Balance**.
- Badges: **Overdue**, **Due today**, **Soon** (warning days set in **Shop settings › Workshop rules › Contractors**).

::: info 📷 Screenshot placeholder
`/screenshots/10-workshop-operations-board-calendar-backjobs-contractors/02-contractor-monitor.png` — Contractor jobs monitor with overdue filter.
:::
