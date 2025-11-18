export default function WeatherCard({ title, value, unit, icon: Icon, color = "green" }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          {unit && <span className="text-gray-500 text-sm">{unit}</span>}
        </div>
        {Icon && <Icon className={`h-12 w-12 text-${color}-500`} />}
      </div>
    </div>
  )
}