const messages = ['N7', 'Say', 'to the new way of banking', 'CB7', 'Say']

function MarqueeContent() {
  return messages.map((message, index) => (
    <span
      className="inline-flex items-center gap-6 px-3"
      key={`${message}-${index}`}
    >
      <span className="text-[74px] font-light leading-none text-slate-400/70">
        *
      </span>
      <span className={message === 'N7' || message === 'CB7' ? 'text-blue-600' : ''}>
        {message}
        {message === 'Say' && index === 1 ? (
          <span className="n7-wave-hand ml-3 inline-block">👋</span>
        ) : null}
      </span>
    </span>
  ))
}

function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-white text-ink-950">
      <div className="n7-marquee-track flex h-[90px] w-max items-center whitespace-nowrap text-[44px] font-semibold leading-none">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}

export default MarqueeStrip
