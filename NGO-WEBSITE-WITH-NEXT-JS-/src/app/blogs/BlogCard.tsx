export default function BlogCard({ image, date, title, description }) {
  return (
    <div className="bg-[#1f3c4a] rounded-xl overflow-hidden shadow-md flex flex-col hover:scale-[1.02] transition text-left max-w-sm mx-auto">
      <img
        src={image}
        alt={title}
        className="h-36 w-full object-cover"
      />

      <div className="p-4 flex flex-col flex-grow text-white">
        <span className="bg-white text-[#1f3c4a] text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-2 self-start">
          {date}
        </span>

        <h3 className="text-base font-semibold mb-1 leading-snug line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-white mb-3 line-clamp-2">
          {description}
        </p>

        <hr className="border-white/30 mb-3" />

        <button className="text-xs font-medium hover:underline text-white self-center">
          Read more →
        </button>
      </div>
    </div>
  );
}
