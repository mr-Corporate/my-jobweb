import React from 'react'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4 text-red-500">404 - Not Found</h1>
    <p className="text-lg">The page you're looking for does not exist.</p>
  </div>
  )
}
