const jobs = [
  {
    title: "Frontend Developer",
    experience: "1–3 Years",
    location: "Noida, India",
    type: "Full Time",
  },
  {
    title: "React.js Developer",
    experience: "0–2 Years",
    location: "Hybrid",
    type: "Full Time",
  },
  {
    title: "Java Backend Developer",
    experience: "2–5 Years",
    location: "Remote",
    type: "Full Time",
  },
  {
    title: "UI/UX Designer",
    experience: "1–3 Years",
    location: "Noida",
    type: "Full Time",
  },
];

export default function OpenPositions() {
  return (
    <section id="open-positions" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Open Positions
          </h2>

          <p className="mt-4 text-gray-600">
            Explore exciting opportunities to join our growing team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="border rounded-xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-700">
                {job.title}
              </h3>

              <div className="mt-4 space-y-2 text-gray-600">
                <p><strong>Experience:</strong> {job.experience}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Employment:</strong> {job.type}</p>
              </div>

              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}