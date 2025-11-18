import { useLocation, useParams } from 'react-router-dom'
import { useClimateData } from '../hooks/useClimateData'
import Loader from '../components/Loader'
import WeatherCard from '../components/WeatherCard'
import ForecastCard from '../components/ForecastCard'
import ClimateMetric from '../components/ClimateMetric'
import { Droplets, CloudRain, Wind, AlertTriangle, ThermometerSun } from 'lucide-react'

export default function Details() {
  const { location: encodedLocation } = useParams()
  const location = decodeURIComponent(encodedLocation)
  const search = new URLSearchParams(useLocation().search)
  const lat = search.get('lat')
  const lon = search.get('lon')

  const { data, loading, error } = useClimateData(lat, lon)

  if (loading) return <Loader />
  if (error || !data) return <div className="text-center py-20 text-red-600">Error loading data</div>

  const current = data.current
  const daily = data.daily

  const forecasts = daily.time.slice(1, 7).map((date, i) => ({
    date,
    temperature_2m_max: daily.temperature_2m_max[i + 1],
    temperature_2m_min: daily.temperature_2m_min[i + 1],
    precipitation_sum: daily.precipitation_sum[i + 1],
  }))

  // Risk Logic
  const humidityRisk = current.relative_humidity_2m > 80 ? 'high' : current.relative_humidity_2m > 70 ? 'medium' : 'low'
  const tempRisk = current.temperature_2m > 35 ? 'high' : current.temperature_2m > 30 ? 'medium' : 'low'
  const rainRisk = current.precipitation > 20 ? 'high' : current.precipitation > 10 ? 'medium' : 'low'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-2 dark:text-white">{location}</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Real-time Agricultural Climate Data</p>

      {/* Current Conditions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <WeatherCard title="Temperature" value={`${Math.round(current.temperature_2m)}°C`} icon={ThermometerSun} />
        <WeatherCard title="Humidity" value={`${current.relative_humidity_2m}%`} icon={Droplets} color="blue" />
        <WeatherCard title="Precipitation" value={`${current.precipitation} mm/h`} icon={CloudRain} color="blue" />
        <WeatherCard title="Wind Speed" value={`${Math.round(current.wind_speed_10m)} km/h`} icon={Wind} />
      </div>

      {/* Agricultural Risks */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 dark:text-white">
          <AlertTriangle className="text-yellow-500" /> Risk Alerts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ClimateMetric label="Fungal Disease Risk" value={`${current.relative_humidity_2m}% Humidity`} risk={humidityRisk} />
          <ClimateMetric label="Heat Stress Risk" value={`${Math.round(current.temperature_2m)}°C`} risk={tempRisk} />
          <ClimateMetric label="Flooding Risk" value={`${current.precipitation} mm/h Rain`} risk={rainRisk} />
        </div>
      </div>

      {/* 7-Day Forecast */}
      <div>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">7-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {forecasts.map((day, i) => (
            <ForecastCard key={i} day={day} />
          ))}
        </div>
      </div>
    </div>
  )
}