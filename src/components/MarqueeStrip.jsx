const messages = ['N7', 'Say', 'to the new way of banking', 'CB7', 'Say']

function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-white text-ink-950">
      <div className="flex h-[82px] min-w-max items-center gap-7 whitespace-nowrap px-8 text-[44px] font-semibold leading-none">
        {[...messages, ...messages].map((message, index) => (
          <span className="inline-flex items-center gap-7" key={`${message}-${index}`}>
            <span className="text-[74px] font-light leading-none text-slate-400/70">
              *
            </span>
            <span className={message === 'N7' || message === 'CB7' ? 'text-blue-600' : ''}>
              {message}
              {message === 'Say' && index === 1 ? ' \u{1F44B}' : ''}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip
