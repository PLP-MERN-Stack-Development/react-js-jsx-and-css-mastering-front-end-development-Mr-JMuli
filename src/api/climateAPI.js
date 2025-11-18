const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

export async function searchLocation(query) {
  if (!query.trim()) return []
  const res = await fetch(`${GEOCODE_URL}?name=${encodeURIComponent(query)}&count=5`)
  const data = await res.json()
  return data.results || []
}

export async function getClimateData(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: ['temperature_2m', 'relative_humidity_2m', 'precipitation', 'wind_speed_10m', 'soil_moisture_0_1cm'],
    hourly: 'temperature_2m',
    daily: [
      'temperature_2m_max',
      'temperature_2m_min',
      'precipitation_sum',
      'wind_speed_10m_max',
      'uv_index_max'
    ].join(','),
    timezone: 'auto',
    forecast_days: 7
  })

  const res = await fetch(`${WEATHER_URL}?${params}`)
  const data = await res.json()
  return data
}