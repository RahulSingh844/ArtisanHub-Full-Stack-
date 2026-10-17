function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-2xl flex shadow-lg rounded-xl overflow-hidden">

      <input
        type="text"
        placeholder="Search painters, carpenters, tailors..."
        className="flex-1 px-5 py-4 outline-none"
      />

      <button className="bg-blue-600 text-white px-8 hover:bg-blue-700 transition">
        Search
      </button>

    </div>
  );
}

export default SearchBar;