import {
  ArrowUpRight,
  Bell,
  Coins,
  Grid2X2,
  Landmark,
  PlusCircle,
} from 'lucide-react'

function Avatar() {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-200 text-[10px] font-bold text-ink-950">
      TK
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
      className="w-[246px] rounded-[20px] border-[6px] border-ink-950/[0.45] bg-white/[0.78] p-3 text-ink-950 shadow-card backdrop-blur-xl sm:w-[270px]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar />
          <div>
            <p className="text-[13px] font-bold">Toni Kross</p>
            <p className="text-xs text-black/[0.45]">Good Morning</p>
          </div>
        </div>
        <button
          aria-label="Open notifications"
          className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/5 transition hover:bg-black/10"
          type="button"
        >
          <Bell aria-hidden="true" size={15} />
        </button>
      </div>

      <div className="mt-3.5">
        <p className="text-xs text-black/[0.35]">Total balance</p>
        <p className="mt-1 text-lg font-extrabold text-n7-royal">
          $42,295.00 USD
        </p>
      </div>

      <div className="my-3 h-px bg-black/10" />

      <div className="grid grid-cols-3 gap-2">
        {actions.map(({ label, icon: Icon }) => (
          <button
            className="group grid justify-items-center gap-1.5 rounded-xl p-1 text-center text-[9px] font-bold transition hover:bg-black/5"
            key={label}
            type="button"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-black/[0.04] transition group-hover:bg-black/[0.08]">
              <Icon aria-hidden="true" size={16} />
            </span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export function ActivityCard() {
  return (
    <aside
      aria-label="Recent account activity"
      className="w-[292px] rounded-[20px] border-[6px] border-ink-950/[0.35] bg-white/[0.86] p-3 text-ink-950 shadow-card backdrop-blur-xl sm:w-[332px]"
    >
      <h2 className="text-base font-extrabold">Recent activity</h2>

      <div className="mt-3 flex items-center gap-2.5 overflow-hidden">
        {['This Day', 'This Week', 'This Month', '6 Month'].map((item) => (
          <button
            className={`shrink-0 rounded-full px-2.5 py-1.5 text-[10px] font-semibold transition ${
              item === 'This Week'
                ? 'bg-n7-royal text-white'
                : 'bg-white text-black/70 shadow-sm hover:bg-black/5'
            }`}
            key={item}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-n7-violet text-white">
            <ArrowUpRight aria-hidden="true" size={19} />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold">
              To Jin <span className="font-semibold text-black/[0.45]">- Work</span>
            </p>
            <p className="text-xs text-black/50">12 Jun 2022</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm font-extrabold">
          <Coins aria-hidden="true" size={15} />
          -$59
        </div>
      </div>
    </aside>
  )
}
