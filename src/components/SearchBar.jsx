import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchLocation } from '../api/climateAPI'
import { Search, MapPin } from 'lucide-react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    const results = await searchLocation(query)
    if (results && results.length > 0) {
      const loc = results[0]
      const name = loc.name + (loc.admin1 ? `, ${loc.admin1}` : '') + `, ${loc.country}`
      navigate(`/details/${encodeURIComponent(name)}?lat=${loc.latitude}&lon=${loc.longitude}`)
    }
  }

  const loadSuggestions = async (value) => {
    setQuery(value)
    if (value.length < 2) {
      setSuggestions([])
      return
    }
    const results = await searchLocation(value)
    setSuggestions(results.slice(0, 5))
  }

  return (
    <div className="w-full max-w-2xl mx-auto relative">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => loadSuggestions(e.target.value)}
          placeholder="Search city or location..."
          className="w-full px-12 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-4 top-5 h-6 w-6 text-gray-500" />
        <button type="submit" className="absolute right-3 top-3 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-10">
          {suggestions.map((loc, i) => (
            <button
              key={i}
              onClick={() => {
                const name = `${loc.name}, ${loc.country}`
                navigate(`/details/${encodeURIComponent(name)}?lat=${loc.latitude}&lon=${loc.longitude}`)
                setSuggestions([])
                setQuery('')
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-3"
            >
              <MapPin className="h-5 w-5 text-gray-500" />
              <div>
                <div className="font-medium">{loc.name}{loc.admin1 && `, ${loc.admin1}`}</div>
                <div className="text-sm text-gray-500">{loc.country}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

