import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'        // ← ADD THIS LINE
import { Droplets, Thermometer, Wind, Sun } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Climate Tracker for Agriculture
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Monitor real-time weather and climate conditions for better farming decisions
        </p>
      </div>

      <div className="mb-12">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <WeatherCard title="Temperature" value="28°" unit="C" icon={Thermometer} />
        <WeatherCard title="Humidity" value="68%" icon={Droplets} color="blue" />
        <WeatherCard title="Wind Speed" value="12" unit="km/h" icon={Wind} />
        <WeatherCard title="UV Index" value="8" icon={Sun} color="yellow" />
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Search for your location to get accurate climate data
        </p>
      </div>
    </div>
  )
}