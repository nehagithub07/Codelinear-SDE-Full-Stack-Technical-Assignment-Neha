import { ChevronDown, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'

const navItems = [
  { label: 'Solutions', href: '#solutions', hasMenu: true },
  { label: 'Resources', href: '#resources', hasMenu: true },
  { label: 'About Us', href: '#about' },
]

function Logo() {
  return (
    <a
      aria-label="N7 home"
      className="flex h-9 items-center rounded-lg px-1 text-[24px] font-medium leading-none text-white transition hover:bg-white/5"
      href="#home"
    >
      N7
    </a>
  )
}

function NavLink({ item, onClick }) {
  return (
    <a
      className="group inline-flex items-center gap-1 rounded-lg px-2 py-2 font-mono text-[11px] font-medium uppercase text-mist-50/95 transition hover:bg-white/5 hover:text-white"
      href={item.href}
      onClick={onClick}
    >
      {item.label}
      {item.hasMenu ? (
        <ChevronDown
          aria-hidden="true"
          className="transition group-hover:translate-y-0.5"
          size={15}
        />
      ) : null}
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed left-1/2 top-0 z-50 w-full max-w-[764px] -translate-x-1/2 px-4 pt-5 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto w-full max-w-[716px] rounded-[11px] border border-white/10 bg-[#2b3030]/90 px-3 py-1.5 shadow-nav backdrop-blur-xl sm:px-3.5"
      >
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <NavLink item={item} key={item.label} />
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="min-h-[27px] min-w-[160px] rounded px-5 py-1 text-[11px]" variant="nav">
              Request Demo
            </Button>
          </div>

          <button
            aria-controls="mobile-menu"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open ? (
          <div
            className="mt-3 grid gap-1 border-t border-white/10 pt-3 md:hidden"
            id="mobile-menu"
          >
            {navItems.map((item) => (
              <NavLink
                item={item}
                key={item.label}
                onClick={() => setOpen(false)}
              />
            ))}
            <Button
              className="mt-2 min-h-11 w-full rounded-lg"
              onClick={() => setOpen(false)}
              variant="primary"
            >
              Request Demo
            </Button>
          </div>
        ) : null}
      </nav>
    </header>
  )
}

export default Navbar
