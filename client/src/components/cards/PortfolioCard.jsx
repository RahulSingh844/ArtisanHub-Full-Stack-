function PortfolioCard({
  thumbnail,
  title,
  category,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer mt-10">

      <div className="relative h-56">

        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

          <span className="text-6xl text-white">
            ▶
          </span>

        </div>

      </div>

      <div className="p-4">

        <h3 className="text-lg font-bold">
          {title}
        </h3>

        <p className="text-gray-500 mt-2">
          {category}
        </p>

      </div>

    </div>
  );
}

export default PortfolioCard;