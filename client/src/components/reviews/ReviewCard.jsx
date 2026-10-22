function ReviewCard({
  name,
  image,
  rating,
  review,
  date,
  verified,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition duration-300 h-70">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold">
            {name}
          </h3>

          <p className="text-yellow-500">
            {"⭐".repeat(rating)}
          </p>

        </div>

      </div>

      <p className="text-gray-600 mt-5 leading-7">
        {review}
      </p>

      <div className="flex justify-between items-center mt-5">

        {verified && (
          <span className="text-green-600 text-sm font-medium ">
            ✔ Verified Customer
          </span>
        )}

        <span className="text-gray-400 text-sm ">
          {date}
        </span>

      </div>

    </div>
  );
}

export default ReviewCard;