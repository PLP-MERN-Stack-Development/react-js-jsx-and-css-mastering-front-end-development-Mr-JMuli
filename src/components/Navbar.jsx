import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Leaf } from 'lucide-react'

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Climate Tracker</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-green-600">About</Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}