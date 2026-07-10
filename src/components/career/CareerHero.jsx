export default function CareerHero({ onShowJobs }) {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          Build Your Career With Us
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
          Join Houston Systems and work with talented engineers on innovative
          software, cloud, AI, and digital transformation projects.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
  onClick={() => {
    console.log("Button Clicked");
    onShowJobs();
  }}
  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
>
  View Open Positions
</button>
           

          <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}