import {
  ArrowUpRight,
  Bell,
  Grid2X2,
  Landmark,
  PlusCircle,
} from 'lucide-react'

function Avatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-[9px] font-bold text-slate-950">
      TK
    </div>
  )
}

export function HeroFloatingCards({ imageSrc = '/images/hero-user.png' }) {
  return (
    <div className="relative mx-auto flex w-full max-w-[590px] flex-col items-center gap-4 overflow-visible sm:block sm:h-[420px]">
      {/* Main image */}
      <div className="relative z-10 h-[260px] w-full max-w-[365px] overflow-hidden rounded-[28px] bg-slate-200 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:absolute sm:left-1/2 sm:top-[40px] sm:h-[300px] sm:-translate-x-1/2">
        <img
          src={imageSrc}
          alt="Banking user"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Balance card - top right */}
      <div className="relative z-30 sm:absolute sm:right-0 sm:top-[63px]">
        <BalanceCard />
      </div>

      {/* Activity card - bottom left */}
      <div className="relative z-20 sm:absolute sm:left-0 sm:top-[190px]">
        <ActivityCard />
      </div>
    </div>
  )
}

export function BalanceCard() {
  const actions = [
    { label: 'Fund Transfer', icon: Landmark },
    { label: 'Add Money', icon: PlusCircle },
    { label: 'More', icon: Grid2X2 },
  ]

  return (
    <aside
      aria-label="Account balance summary"
      className="w-[210px] overflow-hidden rounded-[18px] border-[5px] border-slate-950/40 bg-white/80 p-2.5 text-slate-950 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <Avatar />

          <div className="min-w-0">
            <p className="truncate text-[10px] font-extrabold">Toni Kross</p>
            <p className="truncate text-[8px] font-medium text-black/45">
              Good Morning
            </p>
          </div>
        </div>

        <button
          aria-label="Open notifications"
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-black/5 transition hover:bg-black/10"
          type="button"
        >
          <Bell aria-hidden="true" size={12} strokeWidth={2} />
        </button>
      </div>

      <div className="mt-3">
        <p className="text-[9px] font-medium text-black/35">Total balance</p>

        <p className="mt-1 whitespace-nowrap text-[15px] font-extrabold tracking-[0.04em] text-[#11165f]">
          $42,295.00 USD
        </p>
      </div>

      <div className="my-2.5 h-px bg-black/10" />

      <div className="grid grid-cols-3 gap-1">
        {actions.map(({ label, icon: Icon }) => (
          <button
            className="group grid min-w-0 justify-items-center gap-1 rounded-lg p-1 text-center text-[7px] font-extrabold transition hover:bg-black/5"
            key={label}
            type="button"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/[0.04] transition group-hover:bg-black/[0.08]">
              <Icon aria-hidden="true" size={13} strokeWidth={2} />
            </span>

            <span className="w-full whitespace-nowrap leading-tight">
              {label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export function ActivityCard() {
  const transaction = {
    title: 'To Jin',
    subtitle: 'Work',
    date: '12 Jun 2022',
    amount: '-$59',
  }

  return (
    <aside
      aria-label="Recent account activity"
      className="w-[255px] overflow-hidden rounded-[18px] border-[5px] border-slate-950/35 bg-white/90 p-2.5 text-slate-950 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl"
    >
      <h2 className="text-[13px] font-extrabold">Recent activity</h2>

      <div className="mt-2 flex items-center gap-2">
        {['This Day', 'This Week', 'This Month', '6 Month'].map((item) => (
          <button
            className={`shrink-0 rounded-full px-2.5 py-1 text-[8px] font-bold transition ${
              item === 'This Week'
                ? 'bg-[#11165f] text-white'
                : 'bg-white text-black/70 shadow-sm hover:bg-black/5'
            }`}
            key={item}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#9b7cff] text-white">
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-[11px] font-extrabold">
              {transaction.title}{' '}
              <span className="font-semibold text-black/45">
                - {transaction.subtitle}
              </span>
            </p>

            <p className="truncate text-[9px] font-medium text-black/45">
              {transaction.date}
            </p>
          </div>
        </div>

        <p className="shrink-0 text-[11px] font-extrabold">
          {transaction.amount}
        </p>
      </div>
    </aside>
  )
}