import { CheckCircle2, MoreHorizontal } from 'lucide-react'

function WindowChrome({ children, compact = false }) {
  return (
    <div className="overflow-hidden border border-n7-blue/70 bg-slate-100 text-slate-900 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
      <div className="flex h-5 items-center gap-1 border-b border-slate-300 bg-slate-50 px-2">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
      </div>
      <div className={compact ? 'p-2' : 'p-3'}>{children}</div>
    </div>
  )
}

function MiniBars() {
  return (
    <div className="flex h-20 items-end gap-2 rounded border border-slate-200 bg-white p-3">
      {[38, 62, 48, 80, 54].map((height, index) => (
        <span
          className="w-5 rounded-t bg-gradient-to-t from-n7-blue to-n7-cyan"
          key={height + index}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  )
}

function Donut() {
  return (
    <div className="grid h-24 place-items-center rounded border border-slate-200 bg-white">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-[conic-gradient(#ef4444_0_32%,#0faeef_32%_64%,#22c55e_64%_100%)]">
        <div className="h-9 w-9 rounded-full bg-white" />
      </div>
    </div>
  )
}

export function DashboardMockup({ className = '', compact = false }) {
  return (
    <WindowChrome compact={compact}>
      <div className={`min-w-[300px] ${className}`}>
        <div className="grid grid-cols-3 gap-2">
          {['450', '205', '3'].map((metric, index) => (
            <div className="rounded border border-slate-200 bg-white p-2" key={metric}>
              <p className="text-[8px] font-semibold text-slate-400">
                {index === 0 ? 'Amount Transferred' : index === 1 ? 'Payments' : 'Applications'}
              </p>
              <p className="mt-1 text-xl font-bold text-red-500">{metric}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 grid grid-cols-[1fr_1.15fr] gap-3">
          <Donut />
          <MiniBars />
        </div>
        <div className="mt-3 rounded border border-slate-200 bg-white">
          {[1, 2, 3, 4].map((row) => (
            <div
              className="grid grid-cols-4 border-b border-slate-100 px-2 py-1 text-[8px] last:border-0"
              key={row}
            >
              <span>Loan report</span>
              <span className="text-slate-500">Client {row}</span>
              <span className="text-slate-500">Active</span>
              <span className="text-right text-n7-blue">$4,{row}20</span>
            </div>
          ))}
        </div>
      </div>
    </WindowChrome>
  )
}

export function DesktopMockup() {
  return (
    <WindowChrome compact>
      <div className="flex min-w-[300px] gap-3">
        <div className="w-44">
          <DashboardMockup compact className="scale-[0.56] origin-top-left" />
        </div>
        <div className="w-32 rounded border border-slate-200 bg-white p-2 text-[8px]">
          {['Profile', 'Payments', 'Support', 'Report'].map((item) => (
            <div className="mb-2 flex items-center justify-between rounded bg-slate-50 px-2 py-1" key={item}>
              <span>{item}</span>
              <MoreHorizontal size={10} />
            </div>
          ))}
        </div>
      </div>
    </WindowChrome>
  )
}

export function PhoneMockup({ variant = 'activity', className = '' }) {
  const rows =
    variant === 'profile'
      ? ['Profile setting', 'Setting', 'Support', 'Sign out']
      : ['Blue Corp', 'N7 Savings', 'One Bank', 'Swift Pay']

  return (
    <div
      className={`relative mx-auto h-[236px] w-[118px] rounded-[24px] border-[5px] border-black bg-white p-2 text-slate-900 shadow-[0_18px_36px_rgba(0,0,0,0.24)] ${className}`}
    >
      <div className="absolute left-1/2 top-0 h-3 w-12 -translate-x-1/2 rounded-b-xl bg-black" />
      <div className="mt-5 flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-slate-200" />
        <div>
          <p className="text-[7px] font-bold">Toni Kross</p>
          <p className="text-[6px] text-slate-400">Good Morning</p>
        </div>
      </div>
      {variant === 'chart' ? (
        <div className="mt-4 h-16 rounded-lg border border-slate-100 bg-slate-50 p-2">
          <div className="flex h-full items-end gap-1.5">
            {[42, 72, 34, 86, 54].map((height) => (
              <span
                className="w-3 rounded-t bg-gradient-to-t from-n7-blue to-slate-300"
                key={height}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      ) : null}
      <p className="mt-3 text-[6px] text-slate-400">
        {variant === 'profile' ? 'Menu' : 'Recent activity'}
      </p>
      <div className="mt-1 grid gap-1.5">
        {rows.map((row, index) => (
          <div className="flex items-center justify-between rounded bg-slate-50 px-1.5 py-1" key={row}>
            <span className="flex items-center gap-1 text-[6px]">
              <CheckCircle2 size={7} className="text-n7-blue" />
              {row}
            </span>
            <span className="text-[6px] text-slate-400">{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-3 bottom-2 flex justify-between text-[6px] text-slate-400">
        <span>Home</span>
        <span>Cards</span>
        <span>More</span>
      </div>
    </div>
  )
}
