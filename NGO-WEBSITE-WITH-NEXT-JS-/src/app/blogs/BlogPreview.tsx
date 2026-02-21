import BlogCard from "./BlogCard";

export default function BlogPreview() {
  const blogs = [
    {
      image: "/images/blog1.jpg",
      date: "20 Jan, 2025",
      title: "Providing Food, Clean Water, and Medical Care to Those in Need",
      description:
        "Bringing hope to communities by delivering essential food, water, and medical support.",
    },
    {
      image: "/images/blog2.jpg",
      date: "25 Jan, 2025",
      title: "No One Should Go Hungry, Thirsty, or Without Treatment",
      description:
        "Providing access to basic needs and care to create healthier communities.",
    },
    {
      image: "/images/blog3.jpg",
      date: "30 Jan, 2025",
      title: "Nutrition Meals, Safe Water, and Healthcare to Every Child in Need",
      description:
        "Together, we ensure every child has access to nutrition, clean water, and healthcare.",
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-orange-600 mb-2">From The Blog</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Latest News And Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition">
          View All Blogs →
        </button>
      </div>
    </section>
  );
}
