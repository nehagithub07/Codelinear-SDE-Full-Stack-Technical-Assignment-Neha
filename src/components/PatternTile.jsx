function PatternTile({ className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-3 rounded bg-n7-royal p-4 ${className}`}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="relative h-14 w-14" key={index}>
          <span className="absolute inset-x-0 top-0 h-3 rounded-full bg-n7-cyan" />
          <span className="absolute inset-x-0 bottom-0 h-3 rounded-full bg-n7-cyan" />
          <span className="absolute inset-y-0 left-0 w-3 rounded-full bg-n7-cyan" />
          <span className="absolute inset-y-0 right-0 w-3 rounded-full bg-n7-cyan" />
        </div>
      ))}
    </div>
  )
}

export default PatternTile
