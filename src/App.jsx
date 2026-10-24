import { useState, useEffect } from 'react'

const mockProfiles = [
  {
    id: 1,
    name: 'Amina',
    age: 26,
    county: 'Nairobi',
    distance: '2.3 km',
    bio: 'Love hiking, chai, and good conversations. Looking for genuine connection.',
    interests: ['Travel', 'Music', 'Cooking'],
    tribe: 'Kikuyu',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
  },
  {
    id: 2,
    name: 'Brian',
    age: 29,
    county: 'Kiambu',
    distance: '5.1 km',
    bio: 'Tech entrepreneur. Into fitness, football, and exploring new spots in Nairobi.',
    interests: ['Tech', 'Sports', 'Business'],
    tribe: 'Luo',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop'
  },
  {
    id: 3,
    name: 'Wanjiku',
    age: 24,
    county: 'Nairobi',
    distance: '1.8 km',
    bio: 'Student & creative. Sheng vibes, art, and looking for someone with ambition.',
    interests: ['Art', 'Fashion', 'Church'],
    tribe: 'Kikuyu',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop'
  }
]

function App() {
  const [location, setLocation] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matches, setMatches] = useState([])
  const [error, setError] = useState(null)

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        })
      },
      (err) => setError(err.message)
    )
  }

  const handleSwipe = (direction) => {
    if (direction === 'like' && mockProfiles[currentIndex]) {
      setMatches([...matches, mockProfiles[currentIndex]])
    }
    setCurrentIndex(prev => prev + 1)
  }

  const current = mockProfiles[currentIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Kenya Swipe Connect</h1>
        <div className="text-sm text-gray-500">
          {location ? `📍 ${location.lat.toFixed(2)}, ${location.lng.toFixed(2)}` : 'Location not set'}
        </div>
      </header>

      <main className="max-w-md mx-auto p-4">
        {!location && (
          <div className="bg-white rounded-xl shadow p-6 text-center mb-6">
            <h2 className="text-xl font-semibold mb-2">Enable Location</h2>
            <p className="text-gray-600 mb-4">We need your location to find people nearby in Kenya.</p>
            <button
              onClick={requestLocation}
              className="bg-pink-600 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-700"
            >
              Allow Location Access
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        )}

        {current ? (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={current.photo} alt={current.name} className="w-full h-96 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{current.name}, {current.age}</h2>
                  <p className="text-gray-600">{current.county} • {current.distance}</p>
                </div>
                <span className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full">{current.tribe}</span>
              </div>
              <p className="mt-3 text-gray-700">{current.bio}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {current.interests.map(i => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">{i}</span>
                ))}
              </div>
              <div className="flex justify-center gap-8 mt-8">
                <button
                  onClick={() => handleSwipe('pass')}
                  className="w-16 h-16 rounded-full bg-gray-200 text-3xl flex items-center justify-center hover:bg-gray-300"
                >
                  ✖️
                </button>
                <button
                  onClick={() => handleSwipe('like')}
                  className="w-16 h-16 rounded-full bg-pink-500 text-white text-3xl flex items-center justify-center hover:bg-pink-600"
                >
                  ❤️
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">No more profiles nearby</h2>
            <p className="text-gray-600 mt-2">Check back later or expand your distance filter.</p>
          </div>
        )}

        {matches.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg">Your Matches ({matches.length})</h3>
            <div className="flex gap-3 mt-3 overflow-x-auto">
              {matches.map(m => (
                <div key={m.id} className="flex-shrink-0 w-20 text-center">
                  <img src={m.photo} alt={m.name} className="w-16 h-16 rounded-full object-cover mx-auto" />
                  <p className="text-xs mt-1">{m.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">
        Made for Kenya 🇰🇪 | Deploy on Netlify from GitHub
      </footer>
    </div>
  )
}

export default App
