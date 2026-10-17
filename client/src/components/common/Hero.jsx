import SearchBar from "./SearchBar";
function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 style={ba}">

      <h1 className="text-5xl font-bold">
        Bring Your Dream Home Ideas to Life
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-2xl">
        Discover trusted painters, carpenters, interior designers, tailors and other skilled professionals. Watch their work, compare styles, and book the right expert for your project.
      </p>
      <SearchBar />
      <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Explore Creators
      </button>

    </section>
  );
}

export default Hero;