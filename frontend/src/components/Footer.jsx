function Footer() {
  return (
    <footer className="bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-lg font-semibold text-stone-800">FireGuard</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-stone-600">
              Forest Fire Prediction System for Algerian Regions
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Built with React & FastAPI • Data from UCI ML Repository
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-stone-200 text-center">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} FireGuard. Environmental monitoring for safer forests.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
