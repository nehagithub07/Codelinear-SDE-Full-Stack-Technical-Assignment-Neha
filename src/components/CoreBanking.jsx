import { CheckCircle2 } from 'lucide-react'

const featuresLeft = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
]

const featuresRight = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
]

function FeatureItem({ feature }) {
  return (
    <div className="flex min-w-0 items-start gap-2.5 text-[13px] leading-[1.35] text-mist-100/75">
      <CheckCircle2 className="mt-[2px] h-[15px] w-[15px] flex-none fill-n7-blue text-white" />
      <span className="min-w-0 break-words">{feature}</span>
    </div>
  )
}

// ── LIGHT-THEMED AML Dashboard Mockup ──
function DashboardMockup() {
  return (
    <div style={{ width: 720, background: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#333', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
      {/* Top browser bar */}
      <div style={{ background: '#f0f2f5', borderBottom: '1px solid #dde1e8', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div style={{ flex: 1, background: '#fff', borderRadius: 3, padding: '2px 10px', marginLeft: 6, color: '#aaa', fontSize: 9, border: '1px solid #dde1e8' }}>xxxxxxxx</div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[...Array(3)].map((_, i) => <div key={i} style={{ width: 14, height: 14, background: '#e0e3ea', borderRadius: 2 }} />)}
        </div>
      </div>

      {/* App layout */}
      <div style={{ display: 'flex', height: 320 }}>
        {/* Left sidebar */}
        <div style={{ width: 32, background: '#1a2236', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, gap: 10, flexShrink: 0 }}>
          {[...Array(7)].map((_, i) => (
            <div key={i} style={{ width: 16, height: 16, background: i === 2 ? '#3b82f6' : 'rgba(255,255,255,0.12)', borderRadius: 3 }} />
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, background: '#f7f8fc', padding: '12px 14px', overflow: 'hidden' }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#1a2236', marginBottom: 10 }}>AML Dashboard</div>

          {/* Top two cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 10 }}>
            {/* STR Donut card */}
            <div style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid #e8eaf0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ color: '#e74c3c', fontSize: 24, fontWeight: 700, lineHeight: 1 }}>450</div>
                  <div style={{ color: '#888', fontSize: 8, marginTop: 2 }}>Total STR ( Suspicious Transaction Report)</div>
                </div>
                <span style={{ color: '#bbb', fontSize: 13 }}>⋮</span>
              </div>
              <div style={{ fontSize: 9, color: '#555', marginTop: 6, marginBottom: 4 }}>Suspicious Transactions as on 10-01-2022</div>
              {/* Donut */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
                <svg width="90" height="90" viewBox="0 0 90 90">
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#e8eaf0" strokeWidth="14" />
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#e74c3c" strokeWidth="14"
                    strokeDasharray="80 121" strokeDashoffset="0" />
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#f59e0b" strokeWidth="14"
                    strokeDasharray="50 151" strokeDashoffset="-80" />
                  <circle cx="45" cy="45" r="32" fill="none" stroke="#3b82f6" strokeWidth="14"
                    strokeDasharray="71 130" strokeDashoffset="-130" />
                  <text x="45" y="41" textAnchor="middle" fill="#e74c3c" fontSize="13" fontWeight="700">450</text>
                  <text x="45" y="52" textAnchor="middle" fill="#aaa" fontSize="8">STR</text>
                </svg>
                <div style={{ fontSize: 8, color: '#666' }}>
                  {[['#e74c3c','Reason 1'],['#f59e0b','Reason 2'],['#3b82f6','Reason 3']].map(([c,l]) => (
                    <div key={l} style={{ display:'flex',alignItems:'center',gap:4, marginBottom:4 }}>
                      <div style={{ width:7,height:7,borderRadius:'50%',background:c }} />{l}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* STR Summary bar chart card */}
            <div style={{ background: '#fff', borderRadius: 8, padding: '10px 12px', border: '1px solid #e8eaf0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ color: '#27ae60', fontSize: 24, fontWeight: 700, lineHeight: 1 }}>3</div>
                  <div style={{ color: '#888', fontSize: 8, marginTop: 2 }}>Days Pending for AML Process</div>
                </div>
                <span style={{ color: '#bbb', fontSize: 13 }}>⋮</span>
              </div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#333', marginTop: 8, marginBottom: 6 }}>STR Summary</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 55 }}>
                {[[18,32],[22,48],[14,28],[30,55],[20,40],[26,44],[16,36]].map(([a,b],i) => (
                  <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:1, height:'100%', alignItems:'center' }}>
                    <div style={{ width:'100%', height:a, background:'#c7d9f5', borderRadius:'2px 2px 0 0' }} />
                    <div style={{ width:'100%', height:b-a, background:'#3b82f6', borderRadius:'2px 2px 0 0' }} />
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 7, color: '#aaa', marginTop: 3 }}>
                <span>5 Nov 2025</span><span>6 Nov 2025</span><span>7 Nov 2025</span>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 5, fontSize: 8, color: '#666' }}>
                <span style={{ display:'flex',alignItems:'center',gap:3 }}><span style={{ width:8,height:8,background:'#c7d9f5',display:'inline-block',borderRadius:1 }} />Total Cleared Case</span>
                <span style={{ display:'flex',alignItems:'center',gap:3 }}><span style={{ width:8,height:8,background:'#3b82f6',display:'inline-block',borderRadius:1 }} />Total Reported Case</span>
              </div>
            </div>
          </div>

          {/* AML Report Table */}
          <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #e8eaf0', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ padding: '8px 12px', fontWeight: 700, fontSize: 11, color: '#1a2236', borderBottom: '1px solid #eee' }}>AML Report</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 8.5 }}>
              <thead>
                <tr style={{ background: '#3b82f6' }}>
                  {['AML Case ID','Branch ID','Identified Date','Date of Transaction','Mode of Transaction','Amount of Transactions','Type of Transactions'].map(h => (
                    <th key={h} style={{ padding: '5px 8px', color: '#fff', fontWeight: 600, textAlign: 'left', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['233','Branch 1','02-14-2022','27-12-2021','70','70','70'],
                  ['143','Branch 3','02-19-2022','27-12-2021','160','160','160'],
                  ['300','Branch 4','02-01-2022','27-03-2021','65','65','65'],
                  ['196','Branch 5','02-01-2022','26-12-2002','152','152','152'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f7f8fc', borderTop: '1px solid #eee' }}>
                    {row.map((c, j) => (
                      <td key={j} style={{ padding: '4px 8px', color: '#444' }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── LIGHT-THEMED KYC Desktop Mockup ──
function DesktopMockup() {
  return (
    <div style={{ width: 720, background: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 11, color: '#333', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
      {/* Browser chrome */}
      <div style={{ background: '#f0f2f5', borderBottom: '1px solid #dde1e8', padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#28c840' }} />
        </div>
      </div>

      {/* App layout */}
      <div style={{ display: 'flex', height: 360 }}>
        {/* Left sidebar */}
        <div style={{ width: 32, background: '#1a2236', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10, gap: 10, flexShrink: 0 }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ width: 16, height: 16, background: i === 0 ? '#3b82f6' : 'rgba(255,255,255,0.12)', borderRadius: 3 }} />
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, background: '#f7f8fc', padding: '10px 12px', overflow: 'hidden' }}>
          <div style={{ fontWeight: 700, fontSize: 12, color: '#1a2236', marginBottom: 8 }}>KYC Dashboard</div>

          {/* Stats row + side panel */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
            {/* Stats */}
            <div style={{ display: 'flex', gap: 6, flex: 1 }}>
              {[['115','Total Customers','#1a2236'],['940','In Progress','#f59e0b'],['105','KYC Completed','#22c55e']].map(([v,l,c]) => (
                <div key={l} style={{ background:'#fff', border:'1px solid #e8eaf0', borderRadius:6, padding:'6px 10px', flex:1, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize:18, fontWeight:700, color:c, lineHeight:1 }}>{v}</div>
                  <div style={{ fontSize:7.5, color:'#888', marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
            {/* Failed records panel */}
            <div style={{ width:195, background:'#fff', border:'1px solid #e8eaf0', borderRadius:6, padding:'7px 10px', fontSize:8, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ color:'#555', marginBottom:3 }}>Failed Records <span style={{ color:'#e74c3c', fontWeight:700 }}>22</span></div>
              <div style={{ color:'#888', marginBottom:2 }}>Branch No: <span style={{ color:'#333' }}>012</span></div>
              <div style={{ color:'#888', marginBottom:5 }}>Branch Name: <span style={{ color:'#333' }}>Chandni Chowk</span></div>
              <div style={{ display:'flex', gap:4 }}>
                <div style={{ flex:1, background:'#3b82f6', borderRadius:3, height:20, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:8, fontWeight:600 }}>Update</div>
              </div>
            </div>
          </div>

          {/* Branches table + customer detail */}
          <div style={{ display:'flex', gap:8, marginBottom:8 }}>
            {/* Branches table */}
            <div style={{ flex:1, background:'#fff', border:'1px solid #e8eaf0', borderRadius:6, overflow:'hidden', boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
              <table style={{ width:'100%', borderCollapse:'collapse', fontSize:7.5 }}>
                <thead>
                  <tr style={{ background:'#3b82f6' }}>
                    {['Branch St...','Total Customer','In Progress','Completed','Yet to be...'].map(h => (
                      <th key={h} style={{ padding:'4px 6px', color:'#fff', fontWeight:600, textAlign:'left', whiteSpace:'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[['B001','15','25','180','19'],['B002','14','19','107','18'],['B003','24','25','166','17'],['B004','13','23','131','16'],['B005','12','22','116','15']].map((row,i) => (
                    <tr key={i} style={{ borderTop:'1px solid #f0f0f0', background: i%2===0?'#fff':'#f9fafb' }}>
                      {row.map((c,j) => <td key={j} style={{ padding:'3px 6px', color:'#555' }}>{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Customer detail */}
            <div style={{ width:195, background:'#fff', border:'1px solid #e8eaf0', borderRadius:6, padding:'8px 10px', fontSize:8, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
              <div style={{ color:'#888', marginBottom:2 }}>Customer ID: <span style={{ color:'#333' }}>0085423</span></div>
              <div style={{ color:'#888', marginBottom:6 }}>Customer Name: <span style={{ color:'#333' }}>Ajay Krishna</span></div>
              <div style={{ fontSize:8, color:'#333', fontWeight:600, marginBottom:4 }}>Failure Reason:</div>
              <div style={{ fontSize:7.5, color:'#666', paddingLeft:4 }}>
                <div style={{ marginBottom:2 }}>1. Aadhar Number not matching</div>
                <div>2. PAN No. missing</div>
              </div>
              <div style={{ marginTop:8, display:'flex', justifyContent:'flex-end' }}>
                <div style={{ background:'#3b82f6', borderRadius:3, padding:'3px 12px', fontSize:8, color:'#fff', fontWeight:600 }}>Update</div>
              </div>
            </div>
          </div>

          {/* Customer list table */}
          <div style={{ background:'#fff', border:'1px solid #e8eaf0', borderRadius:6, overflow:'hidden', marginBottom:8, boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
            <table style={{ width:'100%', borderCollapse:'collapse', fontSize:7.5 }}>
              <thead>
                <tr style={{ background:'#3b82f6' }}>
                  {['Customer ID','Customer Name','Customer ID','Customer Name','Customer ID','Customer Name'].map((h,i) => (
                    <th key={i} style={{ padding:'4px 6px', color:'#fff', fontWeight:600, textAlign:'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...Array(4)].map((_,i) => (
                  <tr key={i} style={{ borderTop:'1px solid #f0f0f0', background: i%2===0?'#fff':'#f9fafb' }}>
                    {['00584x23','Raghu Nandan','00584x23','Raghu Nandan','00584x23','Raghu Nandan'].map((c,j) => (
                      <td key={j} style={{ padding:'3px 6px', color:'#555' }}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bar chart */}
          <div style={{ background:'#fff', border:'1px solid #e8eaf0', borderRadius:6, padding:'8px 10px', boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize:9, fontWeight:600, color:'#333', marginBottom:6 }}>Periodic Response / All Branches</div>
            <div style={{ display:'flex', gap:3, alignItems:'flex-end', height:40 }}>
              {[
                ['#e74c3c',22],['#3b82f6',35],['#22c55e',18],['#f59e0b',44],['#a855f7',28],
                ['#e74c3c',18],['#3b82f6',38],['#22c55e',25],['#f59e0b',32],['#a855f7',20],
                ['#e74c3c',30],['#3b82f6',42],
              ].map(([c,h],i) => (
                <div key={i} style={{ flex:1, height:h, background:c, borderRadius:'2px 2px 0 0', opacity:0.85 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MockupGlowFrame({ children, railStyle = {} }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Blue glow border */}
      <div style={{
        position: 'absolute',
        top: -2, left: -2, right: -2,
        bottom: -28,
        borderRadius: '10px 10px 0 0',
        border: '1.5px solid rgba(35,140,255,0.92)',
        boxShadow: '0 0 22px rgba(35,140,255,0.5), 0 0 6px rgba(35,140,255,0.3)',
        pointerEvents: 'none',
        zIndex: 20,
      }} />
      {/* Mockup */}
      <div style={{ position: 'relative', zIndex: 10, overflow: 'hidden', borderRadius: '9px 9px 0 0' }}>
        {children}
      </div>
      {/* Bottom rail */}
      <div style={{
        position: 'absolute',
        bottom: -28,
        height: 28,
        borderBottom: '1.5px solid rgba(35,140,255,0.92)',
        borderRight: '1.5px solid rgba(35,140,255,0.92)',
        boxShadow: '0 0 18px rgba(35,140,255,0.7)',
        pointerEvents: 'none',
        zIndex: 30,
        borderBottomRightRadius: 10,
        ...railStyle,
      }} />
    </div>
  )
}

export default function CoreBanking() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#07101f' }}>

      {/* ── TOP SECTION ── */}
      <section style={{
        position: 'relative',
        background: '#07101f',
        minHeight: 430,
        overflow: 'hidden',
        padding: '90px 58px 80px',
      }}>

        {/* Subtle hex/circuit grid background */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(59,130,246,0.15) 1px, transparent 0)
          `,
          backgroundSize: '36px 36px',
          opacity: 0.6,
        }} />
        {/* Diagonal circuit lines faint overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, opacity: 0.08,
          backgroundImage: `linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

        {/* CB7 watermark outline */}
        <span style={{
          position: 'absolute', left: -50, top: 55,
          fontSize: 430, fontWeight: 700, lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(255,255,255,0.045)',
          pointerEvents: 'none', userSelect: 'none', zIndex: 1,
        }}>
          CB7
        </span>

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 460 }}>
          <h2 style={{
            fontSize: 46, fontWeight: 400, lineHeight: 1.15,
            letterSpacing: '-0.03em', color: '#eef4ff', margin: 0,
          }}>
            A complete cloud-based core banking.
          </h2>
          <p style={{
            marginTop: 16, maxWidth: 320, fontSize: 13,
            lineHeight: 1.4, color: 'rgba(180,210,255,0.62)',
          }}>
            Faster time to market with our cloud-based core banking services
          </p>
          <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
          <a
  className="inline-flex min-h-12 min-w-[210px] items-center justify-center rounded-lg bg-button-blue px-8 font-mono text-sm font-medium uppercase tracking-normal text-white transition-all duration-200 ease-out hover:!bg-none hover:!bg-white hover:!text-ink-950 active:scale-[0.98]"
  href="#request-demo"
>
  Request Demo
</a>
           
            <a href="#core-details" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              borderBottom: '1px solid #22d3ee', paddingBottom: 4,
              fontFamily: 'monospace', fontSize: 10, fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#22d3ee', textDecoration: 'none',
            }}>
              Learn More <span>→</span>
            </a>
          </div>
        </div>

        {/* AML Dashboard mockup — top right, bleeds off right edge */}
        <div style={{
          position: 'absolute',
          right: -48,
          top: 32,
          zIndex: 20,
          transform: 'scale(0.63)',
          transformOrigin: 'top right',
          pointerEvents: 'none',
        }}>
          <MockupGlowFrame railStyle={{ left: -48, width: 'calc(100% + 310px)', borderBottomRightRadius: 10 }}>
            <DashboardMockup />
          </MockupGlowFrame>
        </div>
      </section>

 
      {/* ── GAP between sections ── */}
      <div style={{ background: '#07101f', height: 140 }} />

      {/* ── BOTTOM SECTION ── */}
      <section id="core-details" style={{
        position: 'relative',
        background: '#07101f',
        minHeight: 500,
        overflow: 'hidden',
        padding: '0 58px 90px',
      }}>

        {/* KYC Desktop mockup — bleeds off left edge, starts above section top */}
        <div style={{
          position: 'absolute',
          left: -20,
          top: -90,
          zIndex: 20,
          transform: 'scale(0.89)',
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}>
          <MockupGlowFrame railStyle={{ left: 0, width: 'calc(100% + 240px)', borderBottomRightRadius: 10 }}>
            <DesktopMockup />
          </MockupGlowFrame>
        </div>

        {/* Feature content — right side */}
        <div style={{
          marginLeft: '50%',
          maxWidth: 490,
          position: 'relative',
          zIndex: 30,
          paddingTop: 52,
        }}>
          <h3 style={{
            fontSize: 28, fontWeight: 400, lineHeight: 1.25,
            letterSpacing: '-0.02em', color: '#eef4ff',
            maxWidth: 480, margin: 0,
          }}>
            Run a more efficient, flexible,and digitally connected corebanking system
          </h3>

          <p style={{ marginTop: 22, fontSize: 13, fontWeight: 600, color: '#eef4ff' }}>
            What you will get:
          </p>

          <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11px 36px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {featuresLeft.map((feature) => (
                <FeatureItem feature={feature} key={feature} />
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {featuresRight.map((feature) => (
                <FeatureItem feature={feature} key={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}