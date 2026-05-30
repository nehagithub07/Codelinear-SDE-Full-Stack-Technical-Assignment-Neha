import { ArrowRight } from 'lucide-react'

const addresses = [
  {
    title: 'London',
    body: 'Linktia Infosystems Ltd – CB 7, 26 Main Road Sundridge, TN 14 6EP, England, United Kingdom.',
  },
  {
    title: 'Dubai',
    body: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    title: 'London',
    body: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
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

function N7Logo() {
  return (
    <svg
      className="footer-logo-svg"
      width="400"
      height="232"
      viewBox="0 0 400 232"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="N7 Logo"
    >
      <defs>
        <linearGradient
          id="n7LogoGradient"
          x1="0"
          y1="0"
          x2="400"
          y2="232"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#3477ED" />
          <stop offset="0.48" stopColor="#35BFF6" />
          <stop offset="1" stopColor="#5CE7EF" />
        </linearGradient>
      </defs>

      {/* Correct N */}
      <path
        d="M0 0H37L157 166V0H194V232H157L37 64V232H0V0Z"
        fill="url(#n7LogoGradient)"
      />

      {/* Correct 7 - starts from right side like the reference image */}
      <path
        d="M236 0H400V2C400 12 397 24 392 33H355C331 58 313 88 299 122C282 162 271 200 271 232H309C309 195 318 159 333 124C348 90 368 58 392 33H236V0Z"
        fill="url(#n7LogoGradient)"
      />
    </svg>
  )
}

function FooterLink({ item }) {
  return (
    <a className="footer-link" href="#home">
      <span>{item}</span>
      <ArrowRight size={16} strokeWidth={1.4} />
    </a>
  )
}

function Footer() {
  return (
    <footer className="n7-footer" id="about">
      <style>{`
        .n7-footer {
          width: 100%;
          min-height: 802px;
          background: #010d12;
          color: #ffffff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .footer-inner {
          width: calc(100% - 144px);
          max-width: 1245px;
          margin: 0 auto;
          padding-top: 156px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 400px 1fr;
          column-gap: 64px;
          align-items: start;
        }

        .footer-logo-wrap {
          width: 400px;
          height: 232px;
        }

        .footer-logo-svg {
          display: block;
          width: 400px;
          height: 232px;
        }

        .footer-content {
          padding-top: 2px;
        }

        .address-grid {
          display: grid;
          grid-template-columns: repeat(3, 225px);
          column-gap: 78px;
          align-items: start;
        }

        .address-title,
        .column-title {
          margin: 0;
          color: #f2f6fb;
          font-size: 15.5px;
          font-weight: 500;
          line-height: 1.2;
          letter-spacing: -0.1px;
        }

        .address-body {
          margin: 17px 0 0;
          color: rgba(210, 222, 230, 0.68);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.34;
          letter-spacing: -0.25px;
        }

        .link-grid {
          display: grid;
          grid-template-columns: repeat(3, 225px);
          column-gap: 78px;
          margin-top: 110px;
          align-items: start;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 18px 0 0;
          display: grid;
          gap: 10px;
        }

        .footer-link {
          width: 166px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          color: rgba(210, 222, 230, 0.68);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: -0.25px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link svg {
          margin-top: 3px;
          flex-shrink: 0;
          color: #2ebdf4;
        }

        .footer-link:hover {
          color: #2ebdf4;
        }

        .copyright {
          margin: 84px 0 0 464px;
          max-width: 775px;
          color: rgba(150, 166, 178, 0.42);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.35;
          letter-spacing: -0.25px;
        }

        @media (max-width: 1200px) {
          .footer-inner {
            width: calc(100% - 80px);
            padding-top: 110px;
          }

          .footer-main {
            grid-template-columns: 340px 1fr;
            column-gap: 50px;
          }

          .footer-logo-wrap,
          .footer-logo-svg {
            width: 340px;
            height: auto;
          }

          .address-grid,
          .link-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            column-gap: 40px;
          }

          .copyright {
            margin-left: 390px;
          }
        }

        @media (max-width: 900px) {
          .n7-footer {
            min-height: auto;
          }

          .footer-inner {
            width: calc(100% - 48px);
            padding: 70px 0 36px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            row-gap: 54px;
          }

          .footer-logo-wrap,
          .footer-logo-svg {
            width: 300px;
            height: auto;
          }

          .address-grid,
          .link-grid {
            grid-template-columns: 1fr;
            row-gap: 34px;
          }

          .link-grid {
            margin-top: 56px;
          }

          .footer-link {
            width: 100%;
            max-width: 260px;
          }

          .copyright {
            margin: 56px 0 0;
            max-width: 100%;
          }
        }

        @media (max-width: 520px) {
          .footer-inner {
            width: calc(100% - 36px);
            padding-top: 52px;
          }

          .footer-logo-wrap,
          .footer-logo-svg {
            width: 235px;
          }

          .address-body,
          .footer-link {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="footer-inner">
        <div className="footer-main">
          <div className="footer-logo-wrap">
            <N7Logo />
          </div>

          <div className="footer-content">
            <div className="address-grid">
              {addresses.map((address, index) => (
                <div key={`${address.title}-${index}`}>
                  <h3 className="address-title">{address.title}</h3>
                  <p className="address-body">{address.body}</p>
                </div>
              ))}
            </div>

            <div className="link-grid">
              {linkColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="column-title">{column.title}</h3>

                  <ul className="link-list">
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

        <p className="copyright">
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies
          Act 2006 in England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  )
}

export default Footer