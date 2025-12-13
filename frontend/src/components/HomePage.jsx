function HomePage({ setCurrentPage }) {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
              Forest Fire Prediction System
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-stone-600 max-w-2xl mx-auto">
              Early warning system for forest fire risk assessment in Algerian regions using machine learning
            </p>
            <div className="mt-8">
              <button
                onClick={() => setCurrentPage('predict')}
                className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
              >
                Start Prediction
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              About the System
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl mx-auto">
              Our prediction model analyzes environmental factors to assess forest fire risk
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Data-Driven Analysis</h3>
              <p className="text-stone-600 text-sm">
                Utilizes historical fire data from Algerian forests combined with meteorological factors for accurate predictions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Regional Coverage</h3>
              <p className="text-stone-600 text-sm">
                Covers Bejaia and Sidi Bel-abbes regions with region-specific environmental considerations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Quick Results</h3>
              <p className="text-stone-600 text-sm">
                Get instant fire risk predictions based on current weather conditions and fire weather indices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Input Parameters Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              Input Parameters
            </h2>
            <p className="mt-3 text-stone-600 max-w-2xl mx-auto">
              Understanding the factors used for fire risk assessment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Temperature', desc: 'Ambient temperature in Celsius' },
              { name: 'RH', desc: 'Relative humidity percentage' },
              { name: 'Ws', desc: 'Wind speed in km/h' },
              { name: 'Rain', desc: 'Rainfall in mm' },
              { name: 'FFMC', desc: 'Fine Fuel Moisture Code' },
              { name: 'DMC', desc: 'Duff Moisture Code' },
              { name: 'ISI', desc: 'Initial Spread Index' },
              { name: 'Classes', desc: 'Current fire classification' },
              { name: 'Region', desc: 'Geographic region in Algeria' },
            ].map((param) => (
              <div key={param.name} className="flex items-start gap-3 p-4 bg-stone-50 rounded-lg">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></div>
                <div>
                  <span className="font-medium text-stone-900">{param.name}</span>
                  <p className="text-sm text-stone-600">{param.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
