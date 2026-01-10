function GridView({ movies }) {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {movies.map(movie => (
        <div
          key={movie.id}
          className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 hover:shadow-blue-500/20 transition-transform"
        >
          <h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
          <p className="inline-block text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400">{movie.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default GridView;