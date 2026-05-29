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
      className="flex h-10 items-center rounded-lg px-3 text-2xl font-semibold text-white transition hover:bg-white/5"
      href="#home"
    >
      N7
    </a>
  )
}

function NavLink({ item, onClick }) {
  return (
    <a
      className="group inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-mist-50/90 transition hover:bg-white/5 hover:text-white"
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
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-[940px] rounded-b-[20px] rounded-t-none border border-white/10 bg-white/[0.13] px-3 py-2 shadow-nav backdrop-blur-xl sm:rounded-[18px] sm:px-4"
      >
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <NavLink item={item} key={item.label} />
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="min-h-10 min-w-[178px] rounded-lg px-7 py-2" variant="nav">
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
