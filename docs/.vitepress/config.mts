import { defineConfig } from 'vitepress'

const reference = [
  { text: 'Job statuses', link: '/reference/statuses' },
  { text: 'Insurance claims & LOA', link: '/reference/06-lane-2-insurance-claims-and-loa' },
  { text: 'Corporate, government & blanket POs', link: '/reference/07-lane-3-corporate-government-bidding-blanket-pos' },
  { text: 'Billing, receivables & credit notes', link: '/reference/08-lane-4-billing-chain-receivables-storage-credit-notes' },
  { text: 'Parts, canvass & payables', link: '/reference/09-parts-inventory-canvass-restock-payables' },
  { text: 'Board, calendar, backjobs & contractors', link: '/reference/10-workshop-operations-board-calendar-backjobs-contractors' },
  { text: 'HR, payroll & documents', link: '/reference/11-hr-payroll-kiosk-announcements-documents' },
  { text: 'Finance & month close', link: '/reference/12-finance-wallets-expenses-agent-fees-pnl-month-close-export' },
  { text: 'Shop settings & staff', link: '/reference/13-admin-shop-settings-and-staff-permissions' }
]

export default defineConfig({
  title: 'Rakkii Cars User Guide',
  base: '/rakkii-cars-guide/',
  description: 'How to run the shop in Rakkii Ops: step-by-step guides for owners, technicians and sales agents.',
  lang: 'en-PH',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Start here', link: '/start/getting-started' },
      {
        text: 'Your role',
        items: [
          { text: 'Technician', link: '/technician/' },
          { text: 'Sales agent', link: '/sales/' },
          { text: 'Owner / desk', link: '/desk/' }
        ]
      },
      { text: 'Reference', link: '/reference/statuses' },
      { text: "What's new", link: '/whats-new' }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    sidebar: [
      {
        text: 'Start here',
        items: [
          { text: 'Getting started', link: '/start/getting-started' },
          { text: "What's new", link: '/whats-new' }
        ]
      },
      {
        text: 'Technician',
        items: [{ text: 'Your day in the bay', link: '/technician/' }]
      },
      {
        text: 'Sales agent',
        items: [{ text: 'Your day in sales', link: '/sales/' }]
      },
      {
        text: 'Owner / desk',
        items: [
          { text: 'Your day at the desk', link: '/desk/' },
          {
            text: 'One job, start to finish',
            collapsed: false,
            items: [
              { text: '1. Open a job', link: '/desk/job/01-open-a-job' },
              { text: '2. Add work and save the quote', link: '/desk/job/02-work-and-quote' },
              { text: '3. Get the customer’s OK', link: '/desk/job/03-customer-approval' },
              { text: '4. Assign and start work', link: '/desk/job/04-start-work' },
              { text: '5. QC and ready for pickup', link: '/desk/job/05-qc-and-ready' },
              { text: '6. Bill and collect', link: '/desk/job/06-bill-and-collect' },
              { text: '7. Release the car', link: '/desk/job/07-release' },
              { text: '8. Mark the job done', link: '/desk/job/08-mark-done' }
            ]
          },
          { text: 'Insurance jobs', link: '/desk/insurance-jobs' },
          { text: 'Corporate & government jobs', link: '/desk/corporate-jobs' },
          { text: 'Fix a mistake', link: '/desk/fix-a-mistake' },
          { text: 'Board, calendar & search', link: '/desk/board-and-calendar' },
          { text: 'Running the shop', link: '/desk/running-the-shop' }
        ]
      },
      {
        text: 'Everyone',
        items: [{ text: 'Me hub: clock, leave, payslip', link: '/me/' }]
      },
      { text: 'Reference (detailed rules)', collapsed: true, items: reference }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Ojhojojo/rakkii-cars-guide' }],
    editLink: {
      pattern: 'https://github.com/Ojhojojo/rakkii-cars-guide/edit/main/docs/:path',
      text: 'Suggest a change to this page'
    },
    docFooter: { prev: 'Previous', next: 'Next' },
    footer: {
      message: 'Rakkii Cars User Guide v2 — written for the Rakkii Ops app.',
      copyright: 'RAKKII CARS OPC'
    }
  }
})
