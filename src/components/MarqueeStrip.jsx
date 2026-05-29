const messages = ['N7', 'Say', 'to the new way of banking', 'CB7', 'Say']

function MarqueeStrip() {
  return (
    <div className="overflow-hidden border-y-4 border-emerald-500 bg-white py-2 text-ink-950">
      <div className="flex max-w-full items-center justify-center gap-4 whitespace-nowrap font-semibold sm:text-2xl">
        {[...messages, ...messages].map((message, index) => (
          <span className={message === 'N7' || message === 'CB7' ? 'text-n7-blue' : ''} key={`${message}-${index}`}>
            {index % 2 === 0 ? '*' : ''}
            {message}
            {message === 'Say' && index === 1 ? ' \u{1F44B}' : ''}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeStrip
