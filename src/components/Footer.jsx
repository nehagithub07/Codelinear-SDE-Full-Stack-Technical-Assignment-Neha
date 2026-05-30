import { ArrowRight } from 'lucide-react'

const addresses = [
  {
    title: 'London',
    body: 'Linktia Infosystems Ltd - CB7, 26 Main Road Sundridge,TN14 6EP, England, United Kingdom.',
  },
  {
    title: 'Dubai',
    body: 'Linktia Infosystems Ltd - CB7,Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    title: 'London',
    body: 'Linktia Infosystems Ltd - CB7,Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
]

const linkColumns = [
  {
    title: 'Solutions',
    items: [
      'Core Banking CB7',
      'Digital Banking N7',
      'Open Banking',
      'Loan Origination System',
      'Loan Management System',
      'Digital Transformation',
    ],
  },
  {
    title: 'N7 Banking',
    items: [
      'About Us',
      'Solutions',
      'Contact',
      'Company',
      'Careers',
      'Insights',
      'Core Team',
      'Brand Center',
    ],
  },
  {
    title: 'Our Socials',
    items: ['LinkedIn', 'X'],
  },
]

function FooterLink({ item }) {
  return (
    <a
      className="flex items-start justify-between gap-4 text-mist-100/66 transition hover:text-n7-cyan"
      href="#home"
    >
      <span>{item}</span>
      <ArrowRight className="mt-0.5 shrink-0 text-n7-cyan" size={16} />
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-ink-950 px-6 pb-10 pt-12 sm:px-10" id="about">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 py-36 lg:grid-cols-[0.58fr_0.42fr]">
          <div>
            <h2 className="text-balanced max-w-[640px] text-[50px] font-normal leading-[1.35] text-mist-50">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="mt-8 max-w-[540px] text-base leading-6 text-mist-100/65">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations
            </p>
          </div>
          <div className="flex flex-wrap gap-10 lg:justify-end">
            <a
              className="inline-flex min-h-12 min-w-[208px] items-center justify-center rounded-lg border border-white/80 px-8 font-mono text-sm uppercase text-white transition hover:bg-white hover:text-ink-950"
              href="mailto:hello@n7banking.com"
            >
              Contact Us
            </a>
            <a
              className="inline-flex min-h-12 min-w-[210px] items-center justify-center rounded-lg bg-button-blue px-8 font-mono text-sm uppercase text-white transition hover:brightness-110"
              href="#request-demo"
            >
              Request Demo
            </a>
          </div>
        </div>

        <div className="grid gap-14 pb-16 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="bg-gradient-to-br from-[#2b66e7] via-[#2db6f1] to-[#5ce2ef] bg-clip-text text-[180px] font-bold leading-none text-transparent sm:text-[320px]">
            N7
          </div>
          <div>
            <div className="grid gap-10 sm:grid-cols-3">
              {addresses.map((address) => (
                <div key={`${address.title}-${address.body}`}>
                  <h3 className="text-base font-semibold text-mist-50">
                    {address.title}
                  </h3>
                  <p className="mt-5 max-w-[270px] text-base leading-[1.32] text-mist-100/66">
                    {address.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-24 grid gap-10 sm:grid-cols-3">
              {linkColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-base font-semibold text-mist-50">
                    {column.title}
                  </h3>
                  <ul className="mt-5 grid gap-3 text-base leading-snug">
                    {column.items.map((item) => (
                      <li key={item}>
                        <FooterLink item={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-2 text-center text-xs leading-5 text-mist-100/30">
          Copyright &copy; 2022 by Linktia Infosystems Limited - [CB7 and N7 as
          Commercial Brand] - [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  )
}

export default Footer
