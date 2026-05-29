import { ArrowRight } from 'lucide-react'

const variantClasses = {
  primary:
    'bg-button-blue text-white shadow-glow hover:brightness-110 active:scale-[0.98]',
  secondary:
    'border border-mist-50/80 bg-transparent text-mist-50 hover:border-white hover:bg-white/[0.08] active:scale-[0.98]',
  nav:
    'border border-white/75 bg-white/0 text-white hover:bg-white hover:text-ink-950 active:scale-[0.98]',
}

function Button({
  children,
  href = '#request-demo',
  variant = 'primary',
  className = '',
  showArrow = false,
  ...props
}) {
  const classes = [
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-8 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-n7-cyan sm:min-w-44',
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} href={href} {...props}>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </a>
  )
}

export default Button
