# 12. Finance: cash, money accounts, expenses, agent fees, P&L, month close & export

**For:** Shop Owner · **Hub:** Finance (`/finance`)

Receivables, payments, credit notes and storage are in [Chapter 8](/chapters/08-lane-4-billing-chain-receivables-storage-credit-notes). Supplier payables are in [Chapter 9](/chapters/09-parts-inventory-canvass-restock-payables).

## 12.1 Cash board (`/finance/cash`)

The daily money view for the selected shop:
- **Today** — **Cash in today**, **Cash out today**, **Net cash today**, **Open AR**, and supplier payables due soon / overdue.
- **Cash in trend** over recent days.
- **Customer vs insurer AR** and **Aging** buckets (bands from shop settings, default 30/60/90).
- **Insurer cash coming in** — insurance work **Finished, not invoiced** (bill it) and **Authorized, not started** (pipeline).

## 12.2 Money accounts (`/finance/money-accounts`)

The shop's wallets and bank accounts. Every customer payment, expense and transfer moves a balance. There is no bank or GCash statement import, so balances are only as good as what is recorded.

Default accounts: **Cash on hand**, **GCash**, **Maya**, **Bank**.

| Action | How |
|---|---|
| **Add account** | **Name**, opening **Balance**, **Note** |
| **Adjust** | Set the **New balance** after a real count, with a **Reason** (logged as an adjustment) |
| **Transfer** | **From**, **To**, **Amount**, **Date**, **Reference**, **Note**. **Void transfer** reverses both sides |
| **Movements** | Every movement on the account; void a wrong one |
| **Update balances** | Recalculates from history (backfill) |

**End-of-day routine:** count the cash drawer → compare with **Cash on hand** → **Adjust** with a reason if different → **Transfer** bank deposits from Cash on hand to Bank.

![Money accounts with Transfer dialog](/screenshots/12-finance-wallets-expenses-agent-fees-pnl-month-close-export/01-money-accounts.png)

## 12.3 Expenses (`/finance/expenses`)

1. Press **Add expense**.
2. Fill **Date**, **Amount**, **Category** (from Company › Lists › Expense categories), **Payee**, **Note**.
3. **Paid from** — the money account it comes out of (deducts the balance).
4. Optional **Job** — **Find job** to tie the cost to a job (it then counts in that job's P&L); **Clear job** to unlink.
5. **Save**.

The page shows the month **summary by category** and the **Log**. **Void** an entry with a required reason (it stays visible as "Voided · reason · by" when **Show voided** is on). **Export CSV** or **Print**.

Some expenses are posted automatically: supplier payments (if **Post supplier payments to expenses** is on), backjob costs, contractor payouts, and paid agent fees (if **Post agent fees to expenses** is on).

## 12.4 Agent fees (`/finance/agent-fees`)

The **outside agent fee** for referral agents who are not staff. It is separate from in-house sales commission ([Chapter 4](/chapters/04-sales-agent-guide)).

### Set the fee on a job
On the job's **Pay** tab, card **Agent fee**: choose the **Mode** (**None**, **Percent**, **Fixed**), the **Value** and **Tax %**. A rate above the shop default requires an **Override reason**.

### Pay agents
1. Pick the **From** / **To** range. The **Agent** table shows **Referred**, **Approved amount**, **Agent comm pending**, **Due** and **Paid** per agent, with the **Referral fee total**.
2. Open an agent to see each **Job**, **Plate**, **Agent comm**, **SA comm**, **Status** and **Warnings** (for example **Agent comm required** or **Above default**).
3. When a fee is due, press **Pay**: **Paid date**, **Method**, **Reference** (optional), **Post to expenses** → confirm.
4. A wrong fee is **Void**ed with a **Reason**. Voiding a paid fee also voids its referral-fee expense.

Settings (**Admin › Shop settings › Sales & commission › Outside agent fee**): **Agent fee enabled**, **Default mode** (None / Percent / Fixed) and value, **Due when** (**Released**, **Customer paid**, **Immediately**), **Post agent fees to expenses**, **Walk-ins eligible**.

## 12.5 Reports (`/finance/reports`)

1. Choose the period: **This month**, **Last month**, **This quarter** or **Custom** (From / To).
2. Tiles: **Work billed** (before VAT), **Cash collected**, **Expenses**, **Supplier payments**, **Net cash**.
3. Tables: **By job type**, **By payer** (billed vs collected), **Top insurers**, **Top fleet and corporate accounts**, and **Owed as of** by aging bucket.
4. **Download CSV**.

## 12.6 Profit & Loss (`/finance/pnl`) — owner only

Pick the month with the arrows.

**Monthly shop P&L** tab:
- Tiles: **Revenue (net of VAT)**, **Direct job cost**, **Shop expenses**, **Commissions**, **Payroll**, **Net profit**, **Net margin**.
- **Statement**: Revenue (posted invoices, net of VAT) − direct job costs (parts, labor, paint, fees) = **Total direct job cost** → less sales commissions = **Gross profit** → less shop expenses and gross payroll = **Net profit**.
- **Expenses by category**: Category, Entries, Total, % of expenses.

**Job gross P&L** tab:
- **Revenue (net of VAT)**, **Gross profit**, **Gross margin** and the **Cost split**.
- **Margin by job**: **Job**, **Plate**, **Customer**, **Revenue (net of VAT)**, **Direct costs**, **Commissions**, **Total job cost**, **Gross profit**, **Margin %**.

Menu: **Export shop P&L (CSV)**, **Export job P&L (CSV)**, **Print**. This is a management report, not a BIR filing.

![Monthly shop P&L statement](/screenshots/12-finance-wallets-expenses-agent-fees-pnl-month-close-export/02-pnl.png)

## 12.7 Month close (`/finance/month-close`) — owner only

Locks a past month for the selected shop. Money records dated in a closed month cannot be changed; post corrections in the next open month.

1. Pick the **Year**. Each month shows whether it is open or "Closed by … on …".
2. After the month's checks (cash counted, expenses entered, payments recorded, payables reviewed, P&L reviewed), press **Close month**.
3. If a correction must go into that month, the owner can **Reopen** it, fix, and close again.

**Suggested monthly order:** Payables → Expenses → Money accounts reconciled → Reports → P&L → Accountant export → **Close month**.

## 12.8 Accountant export (`/finance/export`)

1. Set **From** and **To**.
2. **Invoice status**: **All, incl. void** or **Posted only**.
3. Choose the report: **Invoices**, **Payments**, **Credit notes** or **Open AR**, and download the CSV.
4. **Download open AR (CSV)** gives the receivables list as of today.

Send the files to the bookkeeper or accountant for BIR filing.
