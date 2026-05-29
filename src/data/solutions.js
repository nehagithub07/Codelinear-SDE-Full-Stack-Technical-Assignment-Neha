import {
  BadgeDollarSign,
  Building2,
  CreditCard,
  Smartphone,
} from 'lucide-react'

export const solutions = [
  {
    title: 'Core Banking CB7',
    tag: 'Ledger',
    description:
      'Real-time accounts, deposits, lending, and posting rails designed for resilient banking operations.',
    href: '#core-banking',
    icon: Building2,
  },
  {
    title: 'Digital Banking N7',
    tag: 'Mobile',
    description:
      'Customer-facing web and mobile journeys with onboarding, self-service, payments, and account controls.',
    href: '#digital-banking',
    icon: Smartphone,
  },
  {
    title: 'Payments Hub',
    tag: 'Payments',
    description:
      'A unified payment layer for transfers, card workflows, settlement visibility, and operational monitoring.',
    href: '#payments',
    icon: CreditCard,
  },
  {
    title: 'Revenue Operations',
    tag: 'Growth',
    description:
      'Product analytics, pricing controls, and customer insights that help teams launch and iterate faster.',
    href: '#operations',
    icon: BadgeDollarSign,
  },
]
