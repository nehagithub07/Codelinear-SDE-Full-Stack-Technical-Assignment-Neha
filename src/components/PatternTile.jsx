function PatternTile({ className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-6 rounded-md bg-[#111A45] p-7 ${className}`}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="relative aspect-square min-h-0 min-w-0" key={index}>
          <span className="absolute inset-x-[24%] top-0 h-[18%] rounded-full bg-n7-cyan" />
          <span className="absolute inset-x-[24%] bottom-0 h-[18%] rounded-full bg-n7-cyan" />
          <span className="absolute inset-y-[24%] left-0 w-[18%] rounded-full bg-n7-cyan" />
          <span className="absolute inset-y-[24%] right-0 w-[18%] rounded-full bg-n7-cyan" />
        </div>
      ))}
    </div>
  )
}

export default PatternTile
