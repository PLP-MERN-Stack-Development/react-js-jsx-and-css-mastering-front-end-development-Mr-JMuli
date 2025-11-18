export default function ClimateMetric({ label, value, unit, risk }) {
  const riskColor = risk === 'high' ? 'text-red-600' : risk === 'medium' ? 'text-yellow-600' : 'text-green-600'

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-5 border border-green-200 dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
      <p className="text-2xl font-bold mt-1">{value} {unit}</p>
      {risk && <p className={`text-sm font-medium mt-2 ${riskColor}`}>{risk.toUpperCase()} RISK</p>}
    </div>
  )
}