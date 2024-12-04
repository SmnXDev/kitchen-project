import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, CheckCircle, Mail } from 'lucide-react'

function Thanks() {
  const navigate = useNavigate()

  const handleHomeClick = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-2xl backdrop-blur-sm bg-opacity-80 transition-all duration-300 ease-in-out hover:shadow-3xl">
        <div className="flex flex-col items-center">
          <CheckCircle className="w-20 h-20 text-green-500 mb-6 transition-all duration-300 ease-in-out hover:scale-110" />
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Thank You!</h1>
          <p className="text-xl text-gray-600 text-center">We've received your submission.</p>
        </div>
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <p className="text-lg text-gray-700">Our team will review your information and get back to you soon.</p>
          </div>
          <div className="flex items-center justify-center gap-3 bg-blue-50 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-100">
            <Mail className="w-6 h-6 text-blue-600" />
            <p className="text-lg text-gray-700">Please check your email for further updates.</p>
          </div>
        </div>
        <button 
          className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-1"
          onClick={handleHomeClick}
        >
          <Home className="w-6 h-6" />
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default Thanks

