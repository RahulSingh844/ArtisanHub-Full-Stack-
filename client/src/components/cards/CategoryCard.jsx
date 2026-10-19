function CategoryCard({ title, emoji }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer">

      <span className="text-5xl">
        {emoji}
      </span>

      <h3 className="mt-4 text-lg font-semibold">
        {title}
      </h3>

    </div>
  );
}

export default CategoryCard;