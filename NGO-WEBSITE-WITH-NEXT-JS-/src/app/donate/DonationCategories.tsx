import {
  FaGraduationCap,
  FaHeartbeat,
  FaLeaf,
  FaUtensils,
} from "react-icons/fa";
export default function DonationCategories() {
  return (
    <section id="donation" className="w-full py-20 sm:py-24 bg-[#f8f2ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <p className="text-lg text-[#F4A261] font-medium mb-2">
          Donation
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#111d51]">
          Your Donation Brings Smiles And <br className="hidden sm:block" />
          Transforms Lives
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: FaGraduationCap,
              title: "Education",
              text: "Empowering future leaders through access to quality education.",
            },
            {
              icon: FaHeartbeat,
              title: "Healthcare",
              text: "Providing essential healthcare services to underserved communities.",
            },
            {
              icon: FaLeaf,
              title: "Environmental",
              text: "Promoting sustainability and protecting natural resources.",
            },
            {
              icon: FaUtensils,
              title: "Hunger",
              text: "Fighting hunger by providing nutritious food to those in need.",
            },
          ].map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border-2 border-transparent
                hover:border-[#F4A261] shadow-sm hover:shadow-md transition duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-[#f8f2ed] rounded-full">
                  <Icon className="text-2xl text-[#2E8B57]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 text-[#111d51]">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 text-sm mb-4">
                  {item.text}
                </p>

                {/* Link */}
                <a className="text-sm text-[#2E8B57] font-medium cursor-pointer hover:underline">
                  See All Campaigns →
                </a>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <button className="bg-[#2E8B57] text-white px-8 py-3 rounded-full font-medium hover:bg-[#256f46] transition">
          View All Campaigns →
        </button>
      </div>
    </section>
  );
}
