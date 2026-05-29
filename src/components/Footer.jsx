const columns = [
  {
    title: 'Location',
    items: ['Linking Innovations LLC - CBX', 'B3 Mentor Village, Hite City', 'England, United Kingdom'],
  },
  {
    title: 'Dubai',
    items: ['Linking Innovations LLC', 'CPM Financial Services Centre', 'Dubai, United Arab Emirates'],
  },
  {
    title: 'London',
    items: ['Linking Innovations Ltd', 'City Point, Ropemaker Street', 'Moorgate, EC2Y 9HT', 'United Kingdom'],
  },
  {
    title: 'Solutions',
    items: ['Core Banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System'],
  },
  {
    title: 'N7 Banking',
    items: ['About Us', 'Solutions', 'Careers', 'Company', 'Contact Us', 'Case Studies', 'Our Story'],
  },
  {
    title: 'Our Socials',
    items: ['LinkedIn', 'X'],
  },
]

function Footer() {
  return (
    <footer className="bg-ink-950 px-6 pb-10 pt-14 sm:px-10 sm:pt-24" id="about">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid items-center gap-8 border-t border-white/5 pt-12 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="max-w-[520px] text-3xl font-normal leading-tight text-mist-50 sm:text-5xl">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="mt-5 max-w-[520px] text-sm leading-6 text-mist-100/60">
              Our N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              className="inline-flex min-h-9 min-w-28 items-center justify-center rounded border border-white/60 px-5 font-mono text-[10px] uppercase text-white transition hover:bg-white hover:text-ink-950"
              href="mailto:hello@n7banking.com"
            >
              Contact Us
            </a>
            <a
              className="inline-flex min-h-9 min-w-28 items-center justify-center rounded bg-button-blue px-5 font-mono text-[10px] uppercase text-white transition hover:brightness-110"
              href="#request-demo"
            >
              Request Demo
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="text-[120px] font-semibold leading-none text-n7-cyan sm:text-[190px]">
            N7
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-mist-50">{column.title}</h3>
                <ul className="mt-4 grid gap-2 text-xs leading-5 text-mist-100/55">
                  {column.items.map((item) => (
                    <li key={item}>
                      <a className="transition hover:text-n7-cyan" href="#home">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-mist-100/35">
          Copyright &copy; 2024 by Linkal Innovations, a brand of N7 and N7 Inc. Permission under the Companies Act 2006 in England and Wales.
        </p>
      </div>
    </footer>
  )
}

export default Footer
