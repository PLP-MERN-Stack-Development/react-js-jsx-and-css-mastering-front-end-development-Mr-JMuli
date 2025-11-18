import { format } from 'date-fns'
import { CloudRain, Sun, Wind } from 'lucide-react'

export default function ForecastCard({ day }) {
  const date = new Date(day.date)
  const Icon = day.precipitation_sum > 5 ? CloudRain : day.temperature_2m_max > 30 ? Sun : Wind

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md">
      <p className="font-semibold text-sm">{format(date, 'EEE')}</p>
      <p className="text-xs text-gray-500">{format(date, 'dd MMM')}</p>
      <Icon className="h-10 w-10 mx-auto my-3 text-blue-500" />
      <p className="text-xl font-bold">{Math.round(day.temperature_2m_max)}°</p>
      <p className="text-sm text-gray-500">{Math.round(day.temperature_2m_min)}°</p>
      <p className="text-xs mt-2 text-blue-600">↓ {day.precipitation_sum} mm</p>
    </div>
  )
}