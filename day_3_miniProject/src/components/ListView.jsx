function ListView({ movies }) {
  return (
    <ul className="max-w-3xl mx-auto space-y-4">
      {movies.map(movie => (
        <li
          key={movie.id}
          className="flex justify-between items-center bg-gray-800 px-6 py-4 rounded-lg border border-gray-700 hover:border-blue-500 transition"
        >
          <span className="text-lg font-semibold text-white">{movie.title}</span>
          <span className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">{movie.genre}</span>
        </li>
      ))}
    </ul>
  );
}

export default ListView;