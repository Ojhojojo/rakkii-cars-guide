import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rakkii Cars User Guide',
  description: 'How to run the shop in Rakkii Ops: workshop, sales, finance, HR and settings.',
  lang: 'en-PH',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start here', link: '/chapters/01-welcome-and-navigation' },
      { text: 'Ops App (int)', link: 'https://rakkii-ops-int.web.app' },
      { text: 'Customer Portal (int)', link: 'https://rakkii-web-int.web.app' }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    sidebar: [
      {
        text: 'Part 1 — Getting started',
        collapsed: false,
        items: [
          { text: '1. Welcome & navigation', link: '/chapters/01-welcome-and-navigation' }
        ]
      },
      {
        text: 'Part 2 — Staff guides',
        collapsed: false,
        items: [
          { text: '2. Technician daily guide', link: '/chapters/02-technician-daily-guide' },
          { text: '3. Staff self-service (Me hub)', link: '/chapters/03-staff-self-service-me-hub' },
          { text: '4. Sales agent playbook', link: '/chapters/04-sales-agent-guide' }
        ]
      },
      {
        text: 'Part 3 — Owner job flows',
        collapsed: false,
        items: [
          { text: '5. Lane 1: Private / walk-in jobs', link: '/chapters/05-lane-1-private-walk-in-jobs' },
          { text: '6. Lane 2: Insurance claims & LOA', link: '/chapters/06-lane-2-insurance-claims-and-loa' },
          { text: '7. Lane 3: Corporate, government & blanket POs', link: '/chapters/07-lane-3-corporate-government-bidding-blanket-pos' },
          { text: '8. Lane 4: Billing chain, receivables & credit notes', link: '/chapters/08-lane-4-billing-chain-receivables-storage-credit-notes' }
        ]
      },
      {
        text: 'Part 4 — Running the shop',
        collapsed: false,
        items: [
          { text: '9. Parts, canvass, restock & payables', link: '/chapters/09-parts-inventory-canvass-restock-payables' },
          { text: '10. Board, calendar, backjobs & contractors', link: '/chapters/10-workshop-operations-board-calendar-backjobs-contractors' },
          { text: '11. HR, payroll, kiosk & documents', link: '/chapters/11-hr-payroll-kiosk-announcements-documents' }
        ]
      },
      {
        text: 'Part 5 — Money & administration',
        collapsed: false,
        items: [
          { text: '12. Finance & accounting', link: '/chapters/12-finance-wallets-expenses-agent-fees-pnl-month-close-export' },
          { text: '13. Shop settings & staff permissions', link: '/chapters/13-admin-shop-settings-and-staff-permissions' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/Ojhojojo/rakkii-cars-guide' }],
    editLink: {
      pattern: 'https://github.com/Ojhojojo/rakkii-cars-guide/edit/main/docs/:path',
      text: 'Suggest a change to this page'
    },
    footer: {
      message: 'Rakkii Cars User Guide v1 — written for the Rakkii Ops app.',
      copyright: 'RAKKII CARS OPC'
    }
  }
})
