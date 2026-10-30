# Screenshot checklist

All screenshots are real captures of the integration app (https://rakkii-ops-int.web.app) in **light mode**, using integration test data only.

To add or refresh a screenshot:

1. Sign in to int with a test account and switch to light mode (account menu › **Light mode**).
2. Capture at **1440 × 900** for desk pages, or **390 × 844** for phone pages (Time clock, My jobs, QC photos). Save as PNG at the path below.
3. Use only integration test data. **Never include real customer names, plates, phone numbers or peso amounts.**
4. In the chapter, use `![Description](/screenshots/<chapter>/<file>.png)`.
5. Run `npm run docs:build` to check the page.

## 01-welcome-and-navigation

- [x] `01-welcome-and-navigation/01-sign-in.png` — Rakkii Ops sign-in page (Email, Password, Sign in).
- [x] `01-welcome-and-navigation/02-hub-switcher.png` — hub switcher open, showing Workshop, Sales, Finance, HR, Admin, Me.
- [x] `01-welcome-and-navigation/03-branch-switcher.png` — Shop settings with the Shop picker (the top-bar shop switcher appears only when you own more than one shop).
- [x] `01-welcome-and-navigation/04-job-history.png` — Job history with Done and Released · not done labels and the Progress column.

## 02-technician-daily-guide

- [x] `02-technician-daily-guide/01-clock-in.png` — Time clock with Clock in and Today's punches.
- [x] `02-technician-daily-guide/02-my-jobs.png` — My jobs with "Assigned to me" and "Other jobs".
- [x] `02-technician-daily-guide/05-tech-job.png` — Technician view of a job: status banner, steps bar, next-step banner, Send to QC, and the Work and Files tabs.
- [x] `02-technician-daily-guide/03-bay-checklist.png` — Bay checklist with ticked and open steps.
- [x] `02-technician-daily-guide/04-qc-photos.png` — QC photos card on a phone: four ticked angle tiles, Show photos and Replace a photo.

## 03-staff-self-service-me-hub

- [x] `03-staff-self-service-me-hub/01-request-leave.png` — Request leave dialog with Type, dates and Half day.
- [x] `03-staff-self-service-me-hub/02-my-profile-scorecards.png` — My profile, Scorecards section with a finalized card.

## 04-sales-agent-guide

- [x] `04-sales-agent-guide/01-pipeline.png` — My pipeline with status chips and Follow-up due filter.
- [x] `04-sales-agent-guide/02-insurance-calculator.png` — Insurance estimate with vehicle type, coverage and add-ons.

## 05-lane-1-private-walk-in-jobs

- [x] `05-lane-1-private-walk-in-jobs/01-intake-checklist.png` — Vehicle intake checklist with car panel diagram.
- [x] `05-lane-1-private-walk-in-jobs/04-new-job.png` — New job form with Customer, Vehicle and Work filled.
- [x] `05-lane-1-private-walk-in-jobs/05-work-lines.png` — Work lines card with labor and part lines, Who pays, Qty, Cost and Sell.
- [x] `05-lane-1-private-walk-in-jobs/02-portal-approve.png` — Customer Portal pay page with Approve estimate / Decline estimate.
- [x] `05-lane-1-private-walk-in-jobs/06-under-repair-qc-gate.png` — Job header after Start work: Under repair banner, Step 3 of 7, Send to QC as the main button, Ready for pickup locked.
- [x] `05-lane-1-private-walk-in-jobs/07-pay-money.png` — Pay tab Money card after the final payment (Customer owes PHP 0.00) and the Down payment card.
- [x] `05-lane-1-private-walk-in-jobs/08-job-progress.png` — A released job: status banner, Not done yet list, steps opened with dates, Mark as done and tab marks.
- [x] `05-lane-1-private-walk-in-jobs/09-more-papers.png` — More papers menu open in the Job order box.
- [x] `05-lane-1-private-walk-in-jobs/03-release-checklist.png` — Release tab of a Ready job: QC photos, customer balance, Keys logged, Documents in / out, Customer signed release.

## 06-lane-2-insurance-claims-and-loa

- [x] `06-lane-2-insurance-claims-and-loa/01-loa-card.png` — Letter of authorization card with LOA number, date, amounts.
- [x] `06-lane-2-insurance-claims-and-loa/03-release-tab.png` — Release tab of an insurance job with Release of Claim, Print gate pass and Print customer invoice.
- [x] `06-lane-2-insurance-claims-and-loa/02-split-invoices.png` — Pay tab showing a posted insurer invoice and customer invoice.

## 07-lane-3-corporate-government-bidding-blanket-pos

- [x] `07-lane-3-corporate-government-bidding-blanket-pos/01-blanket-po-detail.png` — Blanket PO detail with remaining amount, linked vehicles and model caps.

## 08-lane-4-billing-chain-receivables-storage-credit-notes

- [x] `08-lane-4-billing-chain-receivables-storage-credit-notes/01-who-owes-us.png` — Who owes us with buckets, transmittal and follow-up actions.
- [x] `08-lane-4-billing-chain-receivables-storage-credit-notes/02-credit-note.png` — Issue credit note dialog and the credited invoice row.

## 09-parts-inventory-canvass-restock-payables

- [x] `09-parts-inventory-canvass-restock-payables/01-parts-stock.png` — Parts & Inventory stock list with Low stock filter.
- [x] `09-parts-inventory-canvass-restock-payables/02-payables.png` — Payables with Due soon / Overdue tabs and Record payment.

## 10-workshop-operations-board-calendar-backjobs-contractors

- [x] `10-workshop-operations-board-calendar-backjobs-contractors/03-dashboard.png` — Owner Dashboard: Announcements, Priority jobs, Today's appointments and the five figures.
- [x] `10-workshop-operations-board-calendar-backjobs-contractors/01-shop-board.png` — Shop board columns view with filters and What's left buttons.
- [x] `10-workshop-operations-board-calendar-backjobs-contractors/04-whats-left.png` — What's left pop-up for a job under repair.
- [x] `10-workshop-operations-board-calendar-backjobs-contractors/02-contractor-monitor.png` — Contractor jobs monitor with overdue filter.

## 11-hr-payroll-kiosk-announcements-documents

- [x] `11-hr-payroll-kiosk-announcements-documents/02-clock-kiosk.png` — Clock kiosk with one technician clocked in.
- [x] `11-hr-payroll-kiosk-announcements-documents/03-leave-approvals.png` — Leave approvals with Needs a decision, Team balances and History.
- [x] `11-hr-payroll-kiosk-announcements-documents/01-payroll-register.png` — Payroll register with Lock period and the Day pay override dialog.

## 12-finance-wallets-expenses-agent-fees-pnl-month-close-export

- [x] `12-finance-wallets-expenses-agent-fees-pnl-month-close-export/01-money-accounts.png` — Money accounts with Transfer dialog.
- [x] `12-finance-wallets-expenses-agent-fees-pnl-month-close-export/02-pnl.png` — Monthly shop P&L statement.

## 13-admin-shop-settings-and-staff-permissions

- [x] `13-admin-shop-settings-and-staff-permissions/01-shop-settings.png` — Shop settings, Getting paid section with Down payments and holds card.

Last refreshed: Oct 29, 2026, after the end-to-end test of the workshop and HR flows.
