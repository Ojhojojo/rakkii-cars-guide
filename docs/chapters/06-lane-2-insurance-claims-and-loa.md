# 6. Lane 2 — Insurance claims & LOA billing

**For:** Shop Owner · **Hubs:** Workshop, Finance · **Nature:** Insurance · **Job type:** Insurance

An insurance job has two payers. The insurer pays what the **Letter of Authorization (LOA)** covers, usually 15–45 days after you bill. The customer pays their **participation** (deductible), plus any betterment, depreciation or extras, **before** the car leaves.

```text
Insurer on file → Insurance job (Booked) → Quote → Waiting for LOA → LOA saved
→ Mark authorized → Under repair → Surrendered parts → QC → Ready for pickup
→ Bill insurer + Bill customer → Customer pays participation → Release → Insurer balance in Who owes us
```

## 6.1 Insurers directory (`/workshop/insurers`)

1. Go to **Workshop › Insurers**.
2. Press **Add insurer** and fill **Name** (required), **Days to pay** (default 30), **Terms days** (optional; blank means no terms warning), **Phone** and **Email**.
3. **Save insurer**. Use **Rename** to correct a name or change the insurer's terms.

**Days to pay** sets the expected pay date on insurer invoices, which drives ageing in **Who owes us**.

## 6.2 Create the insurance job

1. **Workshop › New job**.
2. **Job type**: Insurance. **Nature**: Insurance.
3. Customer and vehicle as in [Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#_5-2-create-the-job-workshop-jobs-new).
4. In **Insurance**: choose the **Insurer** (required), and enter **Claim number**, **Policy number** and **Adjuster**.
5. **Create job**. The job gets an **Insurance** tab with the claim timeline.

Do the intake checklist and photos as usual — the adjuster will rely on them.

## 6.3 Quote for the adjuster

1. Add **Work lines** on the **Work** tab. Set **Who pays** per line (see 6.7).
2. **Quote › Create quote** and **Print estimate** for the adjuster's inspection.
3. Press **Waiting for LOA**. Status: **Waiting for LOA**. The banner says "Mark authorized when the LOA is on file."

### While you wait for the LOA

On **Waiting for LOA** the job has these buttons:

| Button | When to use it |
|---|---|
| **Mark authorized** | The LOA is saved (number and amount). Greyed out until then, with the reason "Marking authorised requires an LOA number and amount." |
| **Start work (cash / no LOA)** | The customer will settle in cash, or the insurer confirmed another way. Asks for a reason, which is kept in the status log. |
| **Back to quote** | The adjuster wants the estimate changed. |
| **Put on hold** | The claim is stuck (asks for a reason). |
| **Cancel job** | The claim was denied and the customer will not proceed. |

::: warning Do not start insurance work without an LOA
From Booked, For canvass, Quoted or Waiting for LOA the button reads **Start work (no LOA)** / **Start work (cash / no LOA)** and asks "Insurance jobs should wait for an LOA. Write why this one does not." Use it only when the customer settles in cash or the insurer has confirmed in writing another way. A missing LOA only greys out **Mark authorized**; the cash start stays available.
:::

## 6.4 Record the LOA

When the insurer sends the LOA:

1. Open the **Insurance** tab, card **Letter of authorization**.
2. Enter:
   - **LOA number**
   - **LOA date**
   - **Authorized amount**
   - **Participation** (customer deductible)
   - **Depreciation / Betterment** — **Depreciation** and **Betterment** amounts
   - **Insurer expected pay date**
3. Press **Save LOA**. The card shows "LOA recorded — attach the letter on Files."
4. Go to **Files**, upload the LOA as a **PDF**, and leave **Visible in the customer portal** off.
5. Back on the Insurance tab, use **Open LOA PDF** to check it.

**Who can see it:** opening the LOA PDF needs the **Can open LOA PDF** permission; seeing LOA peso amounts needs **Can see LOA pesos / job margin** ([Chapter 13](/chapters/13-admin-shop-settings-and-staff-permissions)). Without them the screen shows "LOA PDF permission required".

### Hidden damage: supplements
If the car needs more work after tear-down, quote it, get the insurer's approval, then under **Supplements** enter the **Extra amount** and **Extra LOA number** and press **Add supplement**.

![Letter of authorization card with LOA number, date, amounts](/screenshots/06-lane-2-insurance-claims-and-loa/01-loa-card.png)

## 6.5 Mark authorized to unlock repair

1. Check **Claim status → What is blocking** on the Insurance tab. Every item should show ✓.
2. Press **Mark authorized**. The app requires the **LOA number and amount** ("Marking authorised requires an LOA number and amount."). Status: **Authorized**.
3. Assign the technician and press **Start work**. Status: **Under repair**.

From **Authorized** you can also choose **Waiting for parts** or **Put on hold**.

## 6.6 Surrendered parts

Insurers usually take back the replaced damaged parts.

1. On the **Insurance** tab (or the technician on **Work**), card **Surrendered Parts**, press **Add part**.
2. Fill **Description**, **Qty**, **Surrender date**, **Received by**, **Note**. **Save**.
3. If nothing goes back, tick **No parts to surrender**.

Until then the job shows "No surrendered parts logged."

## 6.7 Split the lines: Who pays

Every work line has **Who pays**:
- **Insurer** — work covered by the LOA.
- **Customer** — owner extras the customer asked for (for example a full repaint instead of a panel).

Participation, depreciation and betterment come from the LOA. The owner decides how they are billed in **Admin › Shop settings › Workshop rules › Quality check**:

| Switch | Off (default) | On |
|---|---|---|
| **Participation and betterment reduce insurer share** | Billed on top to the customer; insurer share unchanged | Moved from the insurer share to the customer before invoices post |
| **Depreciation reduces insurer share** | Same as above, for depreciation | Moved from the insurer share to the customer |

**Example:** total repair PHP 85,000, LOA PHP 80,000, participation PHP 5,000, owner extras PHP 3,500. The insurer invoice is PHP 80,000 (expected about 30 days later). The customer pays participation and extras before release.

## 6.8 Bill insurer and Bill customer

1. When the car is ready, open **Pay › Invoices**.
2. Press **Bill insurer ₱…** — a posted **Insurer invoice** with the insurer's expected pay date.
3. Press **Bill customer ₱…** — a posted **Customer invoice** for participation and customer lines.
4. **Print insurer invoice** and **Print customer invoice**.

The Pay tab shows **Customer owes** and **Insurer owes** separately, plus **Expected withholding** and **Expected net** when an insurance withholding percent is set.

## 6.9 Collect the customer share and release

1. **Record a payment** with **Who paid**: Customer for the participation. The customer and insurer shares must be recorded as separate payments.
2. The car is held until **Customer owes** is PHP 0.00 (shop default). It is **not** held for the insurer (default off) — the insurer balance stays open and appears in **Finance › Who owes us** ([Chapter 8](/chapters/08-lane-4-billing-chain-receivables-storage-credit-notes)).
3. The LOA must be on file: "LOA must be on file before releasing an insurance job."
4. Complete the release checks and press **Release car** (see [Chapter 5](/chapters/05-lane-1-private-walk-in-jobs#_5-10-release-checklist-gate-pass-and-acceptance)).

If a job is set to **Wait for the insurer**, release is blocked until the insurer pays: "This job holds the vehicle until the insurer pays." Only an owner override passes it.

## 6.10 Print the Release of Claim

1. On the **Release** tab (also on **Pay** and the Work tab print list) press **Release of Claim**.
2. The paper fills in the insured, insurer, claim and policy numbers, plate, vehicle and LOA number. The wording comes from **Admin › Shop settings › Workshop rules › Insurance release of claim**. Owners and admins print the same shop wording; if the shop has not set any, the default wording is used.
3. Have the customer sign it; send it to the insurer with the insurer invoice.

![Release tab of an insurance job with Release of Claim, Print gate pass and Print customer invoice](/screenshots/06-lane-2-insurance-claims-and-loa/03-release-tab.png)

When the insurer pays, record it on the job with **Who paid**: Insurer and **Apply to invoice** = the insurer invoice. Then **Close job**.

![Pay tab showing a posted insurer invoice and customer invoice](/screenshots/06-lane-2-insurance-claims-and-loa/02-split-invoices.png)
