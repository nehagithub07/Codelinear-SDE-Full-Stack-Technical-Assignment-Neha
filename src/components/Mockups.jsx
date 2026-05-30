import {
  CreditCard,
  Headphones,
  Home,
  LogOut,
  MoreHorizontal,
  Repeat2,
  Search,
  Settings,
  UserRound,
} from 'lucide-react'

function WindowFrame({ children, title = 'AML Dashboard', className = '' }) {
  return (
    <div
      className={`overflow-hidden rounded-t-xl rounded-b-[14px] border border-n7-cyan/75 bg-[#d7dcdf] text-slate-900 shadow-[0_28px_90px_rgba(0,0,0,0.36)] ${className}`}
    >
      <div className="flex h-8 items-center gap-3 border-b border-slate-300 bg-[#eef2f4] px-4">
        <div className="h-3 w-36 rounded border border-slate-300 bg-white" />
        <div className="ml-auto flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-6 w-6 rounded-full bg-slate-300" />
        </div>
      </div>
      <div className="flex">
        <aside className="grid w-10 content-start gap-5 border-r border-slate-300 bg-[#e3e8eb] px-2 py-4 text-slate-400">
          {[Search, Home, CreditCard, Settings, MoreHorizontal].map((Icon, index) => (
            <span
              className={`grid h-6 w-6 place-items-center rounded ${index === 0 ? 'bg-blue-100 text-n7-blue' : ''}`}
              key={index}
            >
              <Icon size={13} />
            </span>
          ))}
        </aside>
        <div className="min-w-0 flex-1 p-5">
          <div className="mb-4">
            <h3 className="text-lg font-extrabold text-slate-700">{title}</h3>
            <p className="text-[10px] font-semibold text-blue-300">XXXXXXXX</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

function Metric({ value, label, tone = 'red' }) {
  const colors =
    tone === 'gold'
      ? 'border-amber-300 text-amber-500'
      : tone === 'green'
        ? 'border-emerald-300 text-emerald-500'
        : 'border-rose-300 text-rose-500'

  return (
    <div className={`rounded border bg-white px-4 py-3 shadow-sm ${colors}`}>
      <p className="text-4xl font-semibold leading-none">{value}</p>
      <p className="mt-2 text-[10px] font-semibold text-slate-500">{label}</p>
    </div>
  )
}

function Donut() {
  return (
    <div className="rounded bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-bold text-slate-600">
        Suspicious Transactions as on 10-01-2022
      </p>
      <div className="grid place-items-center">
        <div className="grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#49bfa9_0_34%,#d54c68_34%_62%,#dca51c_62%_82%,#173c90_82%_100%)]">
          <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-center">
            <span className="text-xs font-bold text-slate-500">450</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bars() {
  return (
    <div className="rounded bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-bold text-slate-600">STR Summary</p>
      <div className="flex h-36 items-end gap-4 border-l border-b border-slate-200 px-4">
        {[72, 38, 84, 48, 68, 56].map((height, index) => (
          <span
            className={`w-5 rounded-t ${index % 3 === 0 ? 'bg-emerald-400' : index % 3 === 1 ? 'bg-orange-400' : 'bg-blue-500'}`}
            key={`${height}-${index}`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function TableRows() {
  return (
    <div className="overflow-hidden rounded bg-white shadow-sm">
      <div className="grid grid-cols-6 bg-blue-800 px-3 py-2 text-[10px] font-bold text-white">
        <span>AML Case ID</span>
        <span>Branch ID</span>
        <span>Identified Date</span>
        <span>Date</span>
        <span>Mode</span>
        <span>Amount</span>
      </div>
      {[225, 140, 205, 190].map((row, index) => (
        <div
          className="grid grid-cols-6 border-b border-slate-100 px-3 py-2 text-[10px] text-slate-600 last:border-b-0"
          key={row}
        >
          <span>{row}</span>
          <span>Branch {index + 1}</span>
          <span>02-01-2022</span>
          <span>27-12-2021</span>
          <span>{index % 2 ? 'Cash' : 'Transfer'}</span>
          <span>{70 + index * 22}</span>
        </div>
      ))}
    </div>
  )
}

export function DashboardMockup({ className = '' }) {
  return (
    <WindowFrame className={`w-[min(590px,calc(100vw-48px))] max-w-none ${className}`}>
      <div className="grid grid-cols-[1fr_0.55fr] gap-3">
        <Metric value="450" label="Total STR (Suspicious Transaction Report)" />
        <Metric value="3" label="Days Pending for AML Process" tone="gold" />
      </div>
      <div className="mt-4 grid grid-cols-[1.05fr_0.95fr] gap-4">
        <Donut />
        <Bars />
      </div>
      <div className="mt-4">
        <p className="mb-2 text-sm font-extrabold text-slate-600">AML Report</p>
        <TableRows />
      </div>
    </WindowFrame>
  )
}

function KycRows() {
  return (
    <div className="grid gap-1.5">
      {['0095423', '0095428', '0095430', '0095429', '0095426'].map((id, index) => (
        <div
          className="flex items-center justify-between rounded bg-slate-50 px-3 py-2 text-[10px]"
          key={id}
        >
          <span>
            <strong>{id}</strong>
            <span className="ml-2 text-slate-500">Rogho Nandon</span>
          </span>
          <span className="text-slate-400">{index + 1}</span>
        </div>
      ))}
    </div>
  )
}

export function DesktopMockup() {
  return (
    <WindowFrame className="w-[min(620px,calc(100vw-48px))] max-w-none" title="KYC Dashboard">
      <div className="grid grid-cols-4 gap-3">
        <Metric value="115" label="New Customer" tone="green" />
        <Metric value="940" label="In Progress" tone="gold" />
        <Metric value="105" label="KYC Completed" tone="green" />
        <Metric value="22" label="Failed Records" />
      </div>
      <div className="mt-4 grid grid-cols-[1fr_0.52fr] gap-4">
        <div>
          <TableRows />
          <div className="mt-4 rounded bg-white p-4 shadow-sm">
            <div className="flex h-28 items-end gap-5">
              {[35, 72, 42, 82, 54, 76].map((height, index) => (
                <span
                  className={`w-8 rounded-t ${index % 2 ? 'bg-emerald-400' : 'bg-rose-400'}`}
                  key={`${height}-${index}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-3 shadow-xl">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold">Branch Chokak Chouk</p>
              <p className="text-[10px] text-slate-400">Failed Records</p>
            </div>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-rose-100 text-rose-500">
              22
            </span>
          </div>
          <KycRows />
        </div>
      </div>
    </WindowFrame>
  )
}

const phoneRows = [
  { label: 'To Jin', meta: 'Work', amount: '-$59', direction: 'up' },
  { label: 'From Google', meta: 'Salary', amount: '+$859', direction: 'down' },
  { label: 'To David', meta: 'Work', amount: '-$479', direction: 'up' },
]

function PhoneNav() {
  const items = [
    { label: 'Home', icon: Home },
    { label: 'Card', icon: CreditCard },
    { label: 'Transaction', icon: Repeat2 },
    { label: 'Profile', icon: UserRound },
  ]

  return (
    <div className="absolute inset-x-3 bottom-3 flex justify-between rounded-b-[24px] border-t border-slate-200 bg-white pt-2 text-[9px]">
      {items.map(({ label, icon: Icon }) => (
        <span className="grid justify-items-center gap-1 text-slate-900" key={label}>
          <Icon size={16} strokeWidth={1.8} />
          {label}
        </span>
      ))}
    </div>
  )
}

function ActivityPhone() {
  return (
    <>
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[linear-gradient(135deg,#c6d5dd,#f1d4c4)]" />
          <div>
            <p className="text-sm font-extrabold">Toni Kross</p>
            <p className="text-[10px] text-slate-400">Good Morning</p>
          </div>
        </div>
        <span className="grid h-8 w-8 place-items-center rounded-full border border-slate-200">
          <MoreHorizontal size={14} />
        </span>
      </div>
      <p className="mt-8 text-2xl font-extrabold text-n7-royal">$42,295.00 USD</p>
      <div className="mt-7 grid grid-cols-3 gap-4 text-center text-[10px] font-bold">
        {['Fund Transfer', 'Add Money', 'More'].map((item) => (
          <span className="grid justify-items-center gap-2" key={item}>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100">
              <CreditCard size={16} />
            </span>
            {item}
          </span>
        ))}
      </div>
      <h4 className="mt-7 text-sm font-extrabold">Recent activity</h4>
      <div className="mt-3 flex gap-2 text-[8px] font-bold">
        {['This Day', 'This Week', 'This Month', '6 Month'].map((item) => (
          <span
            className={`rounded-full px-3 py-1.5 ${item === 'This Week' ? 'bg-n7-royal text-white' : 'bg-slate-100 text-slate-500'}`}
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 grid gap-3">
        {phoneRows.map((row) => (
          <div className="flex items-center justify-between border-b border-slate-100 pb-3" key={row.label}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500 text-white">
                <Repeat2 size={14} />
              </span>
              <div>
                <p className="text-xs font-extrabold">
                  {row.label} <span className="font-medium text-slate-500">- {row.meta}</span>
                </p>
                <p className="text-[9px] text-slate-400">12 jun 2022</p>
              </div>
            </div>
            <p className="text-xs font-extrabold">{row.amount}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function ChartPhone() {
  return (
    <>
      <div className="mt-8 rounded-2xl bg-slate-50 p-5">
        <p className="text-[11px] text-slate-400">March 2022</p>
        <p className="mt-1 text-2xl font-extrabold text-n7-royal">$8,295.00 USD</p>
        <div className="mt-6 flex h-28 items-end justify-between">
          {[58, 58, 82, 58, 58, 58].map((height, index) => (
            <span
              className={`w-5 rounded-lg ${index === 2 ? 'bg-n7-royal' : 'bg-slate-200'}`}
              key={index}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[9px] font-bold">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>
      </div>
      <h4 className="mt-7 text-sm font-extrabold">Recent activity</h4>
      <div className="mt-4 grid gap-3">
        {phoneRows.slice(0, 2).map((row) => (
          <div className="flex items-center justify-between border-b border-slate-100 pb-3" key={row.label}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-800 text-white">
                <Repeat2 size={14} />
              </span>
              <div>
                <p className="text-xs font-extrabold">
                  {row.label} <span className="font-medium text-slate-500">- {row.meta}</span>
                </p>
                <p className="text-[9px] text-slate-400">12 jun 2022</p>
              </div>
            </div>
            <p className="text-xs font-extrabold">{row.amount}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function ProfilePhone() {
  const rows = [
    { label: 'Profile setting', icon: UserRound },
    { label: 'Setting', icon: Settings },
    { label: 'Support', icon: Headphones },
    { label: 'Sign out', icon: LogOut },
  ]

  return (
    <>
      <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-center">
        <div className="mx-auto h-16 w-16 rounded-xl bg-[linear-gradient(135deg,#b9cad4,#f1d4c4)]" />
        <p className="mt-4 text-xl font-extrabold">Toni Kross</p>
        <p className="mt-1 text-[11px] text-slate-400">tonikross@gmail.com</p>
      </div>
      <div className="mt-5 grid gap-4">
        {rows.map(({ label, icon: Icon }) => (
          <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3" key={label}>
            <span className="flex items-center gap-3 text-sm font-extrabold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-200">
                <Icon size={15} />
              </span>
              {label}
            </span>
            <span className="text-xl leading-none">&gt;</span>
          </div>
        ))}
      </div>
    </>
  )
}

export function PhoneMockup({ variant = 'activity', className = '' }) {
  return (
    <div
      className={`relative mx-auto h-[530px] w-[266px] rounded-[42px] border-[7px] border-black bg-white p-5 text-slate-900 shadow-[0_28px_60px_rgba(0,0,0,0.25)] ring-2 ring-slate-500/30 ${className}`}
    >
      <div className="absolute left-1/2 top-0 h-7 w-[118px] -translate-x-1/2 rounded-b-2xl bg-black">
        <span className="absolute left-1/2 top-2.5 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-900 ring-1 ring-slate-700" />
      </div>
      {variant === 'chart' ? <ChartPhone /> : null}
      {variant === 'profile' ? <ProfilePhone /> : null}
      {variant === 'activity' ? <ActivityPhone /> : null}
      <PhoneNav />
    </div>
  )
}
