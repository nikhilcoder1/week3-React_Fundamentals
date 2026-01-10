import { useState } from 'react'
import './App.css'
import ListView from './components/ListView';
import GridView from './components/GridView';


function App() {

  const [isListView, setIsListView] = useState(true);

  const movies = [
    { id: 1, title: "3 Idiots", genre: "Inspirational" },
    { id: 2, title: "Shutter Island", genre: "Thriller" },
    { id: 3, title: "Titanic", genre: "Drama" },
    { id: 4, title: "The Sixth Sense", genre: "Psychological Thriller" },
    { id: 5, title: "13-B", genre: "Suspense/Horro" },
    { id: 6, title: "Sita-Ramam", genre: "Romance" },
    { id: 7, title: "Charlie-777", genre: "Drama" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-10">
      
      <h1 className="text-center text-4xl font-bold text-blue-400 mb-8 tracking-wide">
        Movie List App
      </h1>

      {/* View Toggle */}
      <div className="flex justify-center gap-4 mb-10">
        <button 
        className="px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        onClick={() => setIsListView(true)}
        >
          List View
        </button>
        <button 
        className="px-6 py-2 rounded-full bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
        onClick={() => setIsListView(false)}
        >
          Grid View
        </button>
      </div>

      {/* Conditional Rendering */}
      {isListView ? (
        <ListView movies={movies} />
      ) : (
        <GridView movies={movies} />
      )}

      className={`px-6 py-2 rounded-full font-semibold transition
        ${isListView 
          ? "bg-blue-500 text-white" 
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"}
      `}

    </div>
  )
}

export default App;