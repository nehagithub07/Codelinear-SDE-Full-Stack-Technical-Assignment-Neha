function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase text-n7-cyan">{eyebrow}</p>
      ) : null}
      <h2 className="mt-4 max-w-3xl text-4xl font-medium leading-tight text-mist-50 sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-mist-100/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
