# Job statuses

Every job has one status. It changes when someone presses a status button, and each change is saved in the job's **Status log** with who and when.

## The main path

`Booked` → `Quoted` → `Under repair` → `Quality check` → `Ready for pickup` → `Released` → `Done`

## Every status

| Status | Meaning | Main button to move on | Who |
|---|---|---|---|
| **New inquiry** | A lead from sales, the website or Messenger | **Confirm booking** | Desk |
| **Booked** | Car or appointment confirmed | **Start work**, **For canvass** or **Mark quoted** | Desk |
| **For canvass** | Getting supplier prices for parts | **Mark quoted** | Desk |
| **Quoted** | Estimate saved | **Approve and start work** (insurance: **Waiting for LOA**) | Desk |
| **Waiting for LOA** | Insurance: waiting for the insurer's letter | **Mark authorized** | Desk |
| **Authorized** | Insurance: LOA on file | **Start work** | Desk |
| **Under repair** | In the bay | **Send to QC** | Technician or desk |
| **Waiting for parts** | Paused for an ordered part | **Parts in — back to shop** | Technician or desk |
| **Quality check** | Being checked; QC photos taken | **Ready for pickup** (or **Back to shop**) | Desk |
| **On hold** | Paused, with a reason | **Resume** | Technician (own job) or desk |
| **Ready for pickup** | Finished, waiting for the customer | **Release car** | Desk |
| **Released** | The car has left; money or checklist may still be open | **Mark as done** (or **Mark invoiced**) | Desk |
| **Invoiced** | Optional bookkeeping step after release | **Mark as done** | Desk |
| **Done** | Nothing left on the job | — | — |
| **Cancelled** | Ended without work (reason required) | — | — |
| **No-show** | The customer didn't come | — | — |

## Locks that stop a status change

| Lock | How to pass it |
|---|---|
| **Ready for pickup** needs the four QC photos | Take them, or the owner saves a **QC override reason** |
| Insurance work needs an LOA | Save the LOA, or **Start work (cash / no LOA)** with a reason |
| Deposit before work (if your shop sets it) | Record the deposit, or the owner gives a reason |
| Release needs the release checks and payment | See [Release the car](/desk/job/07-release) |
| **Mark as done** with open checklist items | Tick them, or the owner gives a reason |
