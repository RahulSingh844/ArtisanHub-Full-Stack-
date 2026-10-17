import CategoryCard from "../cards/CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  { title: "Painter", emoji: "🧱" },
  { title: "Carpenter", emoji: "🪚" },
  { title: "Tailor", emoji: "🧵" },
  { title: "Electrician", emoji: "⚡" },
  { title: "Plumber", emoji: "🚿" },
  { title: "Interior", emoji: "🏠" },
  { title: "Wall Artist", emoji: "🎨" },
  { title: "Glass Work", emoji: "🪟" },
  { title: "Furniture", emoji: "🪑" },
];

function Categories() {

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/creators/${category.toLowerCase()}`);
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Browse by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {categories.map((category) => (

          <div
            key={category.title}
            onClick={() => handleCategoryClick(category.title)}
            className="cursor-pointer"
          >

            <CategoryCard
              title={category.title}
              emoji={category.emoji}
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;