export default function WhatWeDoPage() {
  return (
    <main className="w-full bg-white">

      {/* HERO SECTION */}
      <section className="w-full bg-[#f8f2ed] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#111d51] mb-6">
            What We Do
          </h1>

          <p className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
            At <span className="font-semibold">Divya Prakash Foundation</span>,
            we believe real change happens when compassion meets action.
            Our work focuses on uplifting communities through education,
            healthcare, sustainability, and hunger relief — ensuring dignity,
            opportunity, and hope for every individual we serve.
          </p>
        </div>
      </section>

      {/* WORK AREAS */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Education */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4 text-center">🎓</div>
            <h3 className="text-xl font-semibold mb-3 text-center">Education</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              We provide access to quality education by supporting schools,
              learning centers, and scholarship programs. Our initiatives help
              children and young adults gain knowledge, confidence, and skills
              to break the cycle of poverty and build a brighter future.
            </p>
          </div>

          {/* Healthcare */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4 text-center">🏥</div>
            <h3 className="text-xl font-semibold mb-3 text-center">Healthcare</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Through medical camps, awareness programs, and health support,
              we ensure underserved communities receive essential healthcare.
              Our goal is early prevention, improved wellbeing, and access
              to basic medical services for all.
            </p>
          </div>

          {/* Environment */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4 text-center">🌱</div>
            <h3 className="text-xl font-semibold mb-3 text-center">Environment</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              We promote sustainability through tree plantation drives,
              waste reduction awareness, and eco-friendly practices.
              Protecting nature today ensures a healthier planet
              for future generations.
            </p>
          </div>

          {/* Hunger Relief */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="text-5xl mb-4 text-center">🍲</div>
            <h3 className="text-xl font-semibold mb-3 text-center">Hunger Relief</h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              No one should sleep hungry. We provide nutritious meals,
              food distribution programs, and emergency relief to families
              facing food insecurity, restoring hope and dignity.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full bg-[#2E8B57] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Us in Making a Difference
          </h2>

          <p className="max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Your contribution helps us reach more lives and create lasting
            impact. Together, we can bring positive change to communities
            and build a better tomorrow.
          </p>

          <a
            href="/donate"
            className="inline-flex items-center justify-center bg-white text-[#2E8B57] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Donate Now →
          </a>
        </div>
      </section>

    </main>
  );
}
