import CampaignCard from "./CampaignCard";

export default function CampaignPreview() {
  return (
    <section
      id="campaigns"
      className="relative w-full bg-gray-200 py-12 overflow-hidden"
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs uppercase tracking-widest text-orange-600 font-semibold">
            Campaigns
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-[#111d51]">
            Together For Change: Join Our Mission <br />
            To Make A Difference
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="mx-auto w-full max-w-sm">
            <CampaignCard
              category="Pure Water"
              title="Clean Water, Bright Futures"
              image="/images/blog1.jpg"
            />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <CampaignCard
              category="Healthy Food"
              title="Nourishing Hope, One Meal At A Time"
              image="/images/blog2.jpg"
            />
          </div>

          <div className="mx-auto w-full max-w-sm">
            <CampaignCard
              category="Medical Care"
              title="Healing Lives, Spreading Smiles"
              image="/images/blog3.jpg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
