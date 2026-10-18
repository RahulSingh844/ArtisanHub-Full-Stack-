import VideoCard from "../cards/VideoCard";
import axios from "axios";
import { useState, useEffect } from "react";

function TrendingCreators() {
  // Stores all creators fetched from the backend
  const [creators, setCreators] = useState([]);

  // Fetch creators from MongoDB when the component loads
  useEffect(() => {
    const getCreators = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5050/api/creators"
        );

        console.log("Creators from backend:", response.data);

        // Backend may return:
        // [creator1, creator2]
        // OR
        // { creators: [creator1, creator2] }
        const creatorData =
          response.data.creators || response.data;

        setCreators(creatorData);
      } catch (error) {
        console.log("Error fetching creators:", error);
      }
    };

    getCreators();
  }, []);

  /*
    Only show creators who currently have at least one Work
    and that Work contains at least one media file.

    Why?
    When a creator deletes their last Work, the creator
    still exists in MongoDB. We don't want to show an empty
    VideoCard saying "No work media available".
  */
  const creatorsWithWorks = creators.filter((creator) => {
    return creator.works?.some(
      (work) =>
        work.media &&
        work.media.length > 0
    );
  });

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      {/* Section heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        Trending Creators Videos
      </h2>

      {/* Show only creators who have Work media */}
      <div className="grid grid-cols-1  gap-8">

        {creatorsWithWorks.map((creator) => (
          <VideoCard
            key={creator._id}

            // Creator basic information
            _id={creator._id}
            name={creator.name}
            profession={creator.profession}
            city={creator.city}
            rating={creator.rating}
            price={creator.price}

            // Profile image coming from Cloudinary
            image={creator.image}

            // Actual Works uploaded by the creator
            works={creator.works}
          />
        ))}

      </div>

      {/* Show message when no creator has any Work */}
      {creatorsWithWorks.length === 0 && (
        <div className="text-center text-gray-500 py-10">
          No creator works available.
        </div>
      )}

    </section>
  );
}

export default TrendingCreators;