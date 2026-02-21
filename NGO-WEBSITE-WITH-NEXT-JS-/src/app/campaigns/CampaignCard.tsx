import Link from "next/link";
export default function CampaignCard({
  category,
  title,
  image,
}: {
  category: string;
  title: string;
  image: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition w-80 h-auto items-center text-center">
      <div className="p-4 flex flex-col gap-3">
        <span className="text-xs font-semibold text-[#2e8b57]">
          • {category}
        </span>

        <h3 className="text-2xl font-bold text-[#111D51] max-w-2xl mx-auto">
          {title}
        </h3>

        {/* Bigger image area */}
        <div className="h-36 w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover rounded-md"
          />
        </div>

        {/* Content */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Providing essential resources and support to underserved communities
          to help create a healthier and brighter future.
        </p>

        {/* Progress */}
        <div className="mt-1">
          <div className="flex justify-between text-xs text-black mb-1 font-bold">
            <span>Goal</span>
            <span>75%</span>
          </div>
          <div className="h-2 bg-[#111d51] rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-[#F4A261] rounded-full"></div>
          </div>
        </div>

        {/* CTA */}
        <Link
href="/donate"
className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm"
>
Donate Now →
</Link>
      </div>
    </div>
  );
}
