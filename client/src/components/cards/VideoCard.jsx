import { Link } from "react-router-dom";
import { useState } from "react";

function VideoCard({
  _id,
  name,
  profession,
  city,
  rating,
  price,
  image,
  works,
}) {

  // Current media for this creator's first work
  const [currentIndex, setCurrentIndex] = useState(0);

  const firstWork = works?.[0];
  const media = firstWork?.media || [];
  const currentMedia = media[currentIndex];


  // Show next media
  const nextMedia = () => {

    setCurrentIndex((prev) =>
      (prev + 1) % media.length
    );

  };


  // Show previous media
  const previousMedia = () => {

    setCurrentIndex((prev) =>
      (prev - 1 + media.length) % media.length
    );

  };


  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Work Media */}

      <div className="relative bg-black">

        {currentMedia?.type === "video" ? (

          <video
            src={currentMedia.url}
            controls
            className="w-full h-156 object-cover"
          />

        ) : currentMedia?.type === "image" ? (

          <img
            src={currentMedia.url}
            alt={firstWork?.title || name}
            className="w-full h-156 object-cover"
          />

        ) : (

          <div className="w-full h-156 flex items-center justify-center text-white">
            No work media available
          </div>

        )}


        {/* Slider controls */}

        {media.length > 1 && (

          <>

            {/* Previous button */}

            <button
              type="button"
              onClick={previousMedia}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl"
            >
              ‹
            </button>


            {/* Next button */}

            <button
              type="button"
              onClick={nextMedia}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl"
            >
              ›
            </button>


            {/* Small dots */}

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">

              {media.map((_, index) => (

                <span
                  key={index}
                  className={`w-2 h-2 rounded-full transition ${
                    currentIndex === index
                      ? "bg-white"
                      : "bg-white/40"
                  }`}
                />

              ))}

            </div>

          </>

        )}

      </div>


      {/* Creator Information */}

      <div className="p-5">

        {/* Profile + Name */}

        <div className="flex items-center gap-3">

          <img
            src={image?.url || image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="text-xl font-bold">
              {name}
            </h3>

            <p className="text-gray-600 text-sm">
              {profession}
            </p>

          </div>

        </div>


        {/* Rating + Location */}

        <div className="flex justify-between mt-4 text-sm text-gray-600">

          <span>
            ⭐ {rating}
          </span>

          <span>
            📍 {city}
          </span>

        </div>
        {/* Work details */}

        {firstWork && (
          <div className="mt-4">

            <h4 className="text-lg font-semibold">
              {firstWork.title}
            </h4>

            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {firstWork.description}
            </p>

          </div>
        )}


        {/* Starting Price */}

        <p className="mt-4 text-right  font-semibold text-blue-600">
          Project Cost: ₹{price}
        </p>


        {/* View Profile */}

        <Link
          to={`/creator/${_id}`}
          className="flex justify-center w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl mt-6"
        >
          View Profile
        </Link>

      </div>

    </div>

  );

}

export default VideoCard;