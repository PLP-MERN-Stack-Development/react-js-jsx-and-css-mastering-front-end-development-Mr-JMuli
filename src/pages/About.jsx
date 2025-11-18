export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">About Climate Tracker</h1>
      <div className="prose prose-lg dark:prose-invert mx-auto">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Climate Tracker is a free web tool designed specifically for farmers and agricultural professionals.
        </p>
        <p className="mt-6">
          By combining real-time weather data with agricultural risk indicators, it helps you make better decisions about planting, irrigation, pest control, and harvesting.
        </p>
        <p className="mt-6 font-semibold text-green-600">
          Powered by Open-Meteo API • Built with React + Tailwind CSS
        </p>
      </div>
    </div>
  )
}