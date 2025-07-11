interface PulseIndicatorProps {
  text: string
  color: string
}

export default function PulseIndicator({ text, color }: PulseIndicatorProps) {
  return (
    <div className="flex items-center space-x-1">
      <div className={`w-1 h-1 rounded-full animate-pulse bg-${color}-400`} />
      <span>{text}</span>
    </div>
  )
}
