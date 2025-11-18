import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            Welcome to AgroClimate Tracker
          </h2>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Track climate conditions affecting agriculture in your area.
          </p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
