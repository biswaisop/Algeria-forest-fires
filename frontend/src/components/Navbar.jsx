import { useState } from 'react'

function Navbar({ currentPage, setCurrentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-xl font-semibold text-stone-800">FireGuard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-green-700'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('predict')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'predict'
                  ? 'text-green-700'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Prediction
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setCurrentPage('home')
                  setMobileMenuOpen(false)
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'home'
                    ? 'bg-green-50 text-green-700'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('predict')
                  setMobileMenuOpen(false)
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'predict'
                    ? 'bg-green-50 text-green-700'
                    : 'text-stone-600 hover:bg-stone-50'
                }`}
              >
                Prediction
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
